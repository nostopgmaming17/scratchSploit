// https://scratch.mit.edu/projects/108566337/

(()=>{
    const killedby = getid("KilledBy");
    const facing = getlocalid("Game","facing")
    const pid = getlocalid("Multiplayer","@Player ID");
    restore(vm.runtime._primitives,"data_setvariableto");
    hookp(vm.runtime._primitives,"data_setvariableto",{
        apply(f, th, args) {
            try{
                if (args[0].VARIABLE.id === killedby && args[0].VALUE >= 0) {
                    return;
                } else if (args[0].VARIABLE.id === pid && args[0].VALUE < 0) {
                    const i = getlocal("Multiplayer","i"), pnames = getglobal("@PlayerNames");
                    console.warn(pnames[Math.max(i-1,0)],"tried to kick you");
                    return;
                }
            }catch(e){}
            return Reflect.apply(f, th, args);
        }
    });
    const getdirection = (()=>{
        const sprite = getsprite("Game");
        for(let i in sprite.variables) {
            if (sprite.variables[i].name == "@Get Direction")
                return sprite.variables[i];
        }
    })();
    restore(vm.runtime._primitives,"data_changevariableby");
    hookp(vm.runtime._primitives,"data_changevariableby",{
        apply(f, th, args) {
            try{
                if (args[0].VARIABLE.id === facing) {
                    args[0].VALUE = getdirection.value;
                    return Reflect.apply(vm.runtime._primitives.data_setvariableto, th, args);
                }
            }catch(e){}
            return Reflect.apply(f, th, args);
        }
    });
    const id = getlocalid("Multiplayer","tick_frames");
    restore(vm.runtime._primitives,"data_variable");
    hookp(vm.runtime._primitives,"data_variable",{
        apply(f, th, args) {
            try{
                if (args[1].thread.target.getName() == "Multiplayer" && args[0].VARIABLE.id == id) {
                    const r = Number(Reflect.apply(f, th, args));
                    if (r==r)
                        return Math.min(45,r);
                }
            }catch(e){}
            return Reflect.apply(f, th, args);
        }
    });
    restore(vm.runtime._primitives,"procedures_call");
    hookp(vm.runtime._primitives,"procedures_call", {
        apply(f, th, args) {
            try{
                if (args[1].thread.target.getName() == "Game" && args[0].mutation.proccode.startsWith("Spawn Collect")) {
                    const cargs = JSON.parse(args[0].mutation.argumentids);
                    const siz = Math.max(2.5,Number(args[0][cargs[3]]));
                    if (!isNaN(siz))
                        args[0][cargs[3]] = siz;
                }
            } catch(e) {}
            return Reflect.apply(f, th, args);
        }
    });
    let diepress = false;
    let kickpress = false;
    setInterval(()=>{
        setlocal("Game","actionHashChange",vm.runtime.ioDevices.clock._projectTimer.timeElapsed()/1000+100); // anti afk
        setlocal("Multiplayer","Network Issues 2",0); // anti cloud kick
        setlocal("Game","too slow",0); // anti too slow kick
        if (vm.runtime.ioDevices.keyboard._keysPressed.includes("W")) {
            setlocal("Game","power",5);
        } else {
            setlocal("Game","power",1);
        }
        if (diepress&&!vm.runtime.ioDevices.keyboard._keysPressed.includes("F")&&(diepress=false),!diepress&&(diepress=vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            setglobal("KilledBy",getlocal("Multiplayer","@Player ID"))
        }
        if (kickpress&&!vm.runtime.ioDevices.keyboard._keysPressed.includes("R")&&(diepress=false),!diepress&&(diepress=vm.runtime.ioDevices.keyboard._keysPressed.includes("R"))) {
            const place = getglobal("@Place"), pnames = getglobal("@PlayerNames");
            showvariable("@PlayerNames");
            ask("Enter player to kick").then(ans=>{
                hidevariable("@PlayerNames")
                if (!pnames.includes(ans.toUpperCase())) return;
                place.push(0);
                place.push("k"+ans.toUpperCase());
                const inter = setInterval(()=>{
                    place.push(0);
                    place.push("k"+ans.toUpperCase());
                },500);
                setTimeout(()=>{
                    clearInterval(inter);
                },5e3);
            });
        }
    },0);
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();

/*
(()=>{
    const inc = 1000;
    let w = getlocal("Game", "w");
    setlocal("Game", "MyLen", getlocal("Game", "MyLen") + inc * 2);
    setlocal("Game", "parseIdx", getlocal("Game", "parseIdx") + inc * 2);
    for (let i = 0; i < inc; i++) {
        w.push(getlocal("Game", "x"));
        w.push(getlocal("Game", "y"));
    }
})();
*/

/*
setlocal("Multiplayer","griffpatch",25)
setlocal("Multiplayer","Game Revision",25)
*/