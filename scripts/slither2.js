// https://scratch.mit.edu/projects/108566337/

(()=>{
    const killedby = getid("KilledBy");
    const facing = getlocalid("Game","facing")
    restore(vm.runtime._primitives,"data_setvariableto");
    hookp(vm.runtime._primitives,"data_setvariableto",{
        apply(f, th, args) {
            try{
                if (args[0].VARIABLE.id === killedby && args[0].VALUE >= 0) {
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
    let diepress = false;
    setInterval(()=>{
        if (vm.runtime.ioDevices.keyboard._keysPressed.includes("W")) {
            setlocal("Game","power",5);
        } else {
            setlocal("Game","power",1);
        }
        if (diepress&&!vm.runtime.ioDevices.keyboard._keysPressed.includes("F")&&(diepress=false),!diepress&&(diepress=vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            console.log(1000);
            setglobal("KilledBy",getlocal("Multiplayer","@Player ID"))
        }
    },0);
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();