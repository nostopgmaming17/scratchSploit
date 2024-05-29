(()=>{
    const dmul = global("_DMUL");
    const blockdata = global("_BLOCK_DATA");
    const changes = global("CHG GIDX");
    const owner = global("OWNER");
    const age = global("AGE");
    const grid = global("GRID");
    const pid = global("PLAYER ID");
    const tick = global("TICK");
    const changescount = global("CHANGES #");
    function getBlockData(tile) {
        const data = blockdata.value;
        const ret = {};
        for(let i=0;i<dmul.value-1;i++) {
            const val = data[tile*dmul.value + i];
            ret[data[i]] = val;
            ret[i + 1] = val;
        }
        return ret;
    }
    function blockTierByName(name) {
        const data = blockdata.value;
        for(let i=Number(dmul.value);i<data.length;i+=Number(dmul.value)) {
            if (name.toLowerCase() == data[i + 1].toLowerCase())
                return data[i];
        }
    }
    function blockIndexByName(name) {
        const data = blockdata.value;
        for(let i=Number(dmul.value);i<data.length;i+=Number(dmul.value)) {
            if (name.toLowerCase() == data[i + 1].toLowerCase())
                return i;
        }
    }
    function recordChange(idx, tile) {
        const found = changes.value.findIndex(v=>v==idx);
        if (found > 0) {
            changes.value.splice(found,1);
            if (found < changescount.value) {
                changescount.value--;
            }
        }
        changes.value[changescount.value] = idx;
        owner.value[idx - 1] = pid.value;
        age.value[idx - 1] = tick.value;
        grid.value[idx - 1] = tile;
    }
    function replaceBlock(idx, tile) {
        if (getBlockData(tile)[20] == "G") {
            getglobal("ACTIVATE").push(idx);
        }
        recordChange(idx, tile);
        getglobal("LIGHT MOD").unshift(idx);
        broadcast("Check Crafting Recipes");
    }
    function blockDataAt(idx) {
        return getBlockData(Number(grid.value[idx - 1]));
    }
    function blockAt(idx) {
        return Number(grid.value[idx - 1]);
    }
    window.getBlockData = getBlockData;
    window.blockTierByName = blockTierByName;
    window.blockIndexByName = blockIndexByName;
    window.recordChange = recordChange;
    window.replaceBlock = replaceBlock;
    window.blockDataAt = blockDataAt;
    window.blockAt = blockAt;
    const config = {speed:3, noclip: false};
    restoreop("procedures_call");
    hookop("procedures_call", {
        apply(f, th, args) {
            try{
                if (args[1].thread.target.getName() == "Player" && args[0].mutation.proccode.includes("Try Move")) {
                    const cargs = JSON.parse(args[0].mutation.argumentids);
                    args[0][cargs[0]] *= config.speed;
                    if (config.noclip) {

                        setglobal("PLAYER X", Number(getglobal("PLAYER X")) + args[0][cargs[0]]);
                        setglobal("PLAYER Y", Number(getglobal("PLAYER Y")) + vm.runtime.ioDevices.keyboard._keysPressed.includes("W")*3*config.speed - vm.runtime.ioDevices.keyboard._keysPressed.includes("S")*3*config.speed);
                        const l = getlocal("Player","rewind");
                        if (l.length >= 400) {
                            while(l.length>398)
                                l.pop();
                        }
                        if (l[0] != getglobal("PLAYER X") && l[1] != getglobal("PLAYER Y"))
                            l.unshift(getglobal("PLAYER X"),getglobal("PLAYER Y"));
                        return;
                    }
                } else if (args[1].thread.target.getName() == "Player" && args[0].mutation.proccode.includes("Check Trapped")) {
                    if (config.noclip) {
                        setlocal("Player","trapped",0);
                        return;
                    }
                }
            }catch(e){}
            return Reflect.apply(f, th, args);
        }
    });
    restoreop("sensing_username");
    hookop("sensing_username",{
        apply(f, th, args) {
            let ret = Reflect.apply(f, th, args);
            return ret + "griffpatch"; // bypasses anticheat (yes it actually exists and is running on other players devices)
        }
    });
    const cloudversion = global(cloudSymbol + " version");
    const breaking = global("BREAKING");
    restoreop("data_variable");
    hookop("data_variable",{
        apply(f, th, args) {
            if (args[0].VARIABLE.id == "gameversion")
                return cloudversion.value;
            else if (args[0].VARIABLE.id == breaking.id)
                return vm.runtime.ioDevices.mouse._isDown * 101 - 1;
            return Reflect.apply(f, th, args);
        }
    });
    restoreop("sensing_of");
    hookop("sensing_of",{
        apply(f, th, args) {
            if (args[0].PROPERTY == "gameversion")
                return cloudversion.value;
            return Reflect.apply(f, th, args);
        }
    });
    let pressed1 = false, pressed2 = false;
    setInterval(()=>{
        let inv = getglobal("INV");
        let invC = getglobal("INV #");
        if(!pressed1 && (pressed1=vm.runtime.ioDevices.keyboard._keysPressed.includes("G"))) {
            ask("SPEED:").then(answer=>Number(answer)).then(spd=>{
                spd==spd&&(config.speed=spd);
                pressed1 = false;
            });
        } else if (pressed2&&!vm.runtime.ioDevices.keyboard._keysPressed.includes("H")&&(pressed2=false),!pressed2&&(pressed2=vm.runtime.ioDevices.keyboard._keysPressed.includes("H"))) {
            config.noclip = !config.noclip;
        }
        if (vm.runtime.ioDevices.keyboard._keysPressed.includes("W")) {
            setlocal("Player","speed y",15);
        }
        setglobal("BREAKING",Math.max(getglobal("BREAKING"),100));
        setglobal("LAND CLAIMS", []);
        inv[0]=117;
        invC[0]=1;
        window.inv = inv;
        window.invC = invC;
    },10)
})();