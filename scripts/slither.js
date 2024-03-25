// https://scratch.mit.edu/projects/108566337/

(()=>{
    const killedby = getid("KilledBy");
    restore(vm.runtime._primitives,"data_setvariableto");
    hookp(vm.runtime._primitives,"data_setvariableto",{
        apply(f, th, args) {
            try{
                if (args[0].VARIABLE.id === killedby && args[0].VALUE >= 0 && args[0].VALUE != getlocal("Multiplayer","@Player ID")) {
                    return;
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
    })
    setInterval(()=>{
        if (vm.runtime.ioDevices.keyboard._keysPressed.includes("W")) {
            setlocal("Game","power",5);
        } else {
            setlocal("Game","power",1);
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