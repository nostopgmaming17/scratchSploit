// https://scratch.mit.edu/projects/404041613/

(()=>{
    const config = {speed:false}
    restore(vm.runtime._primitives,"event_broadcast");
    hookp(vm.runtime._primitives,"event_broadcast",{
        apply(f, th, args) {
            switch (args[0].BROADCAST_OPTION.name) {
                case "turbo_mode_detected":
                case "lag_detected":
                case "@hacker":
                case "crashed":
                    return;
            }
            return Reflect.apply(f, th, args);
        }
    });
    restore(vm.runtime._primitives,"data_setvariableto");
    hookp(vm.runtime._primitives,"data_setvariableto",{
        apply(f, th, args) {
            if (config.speed) {
                switch(args[0].VARIABLE.name) {
                    case "xvel":
                    case "yvel":
                        args[0].VALUE *= 3;
                }
            }
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
    let pressed = false;
    setInterval(()=>{
        setglobal("kill cooldown",0);
        setglobal("EmergencyCooldown",0);
        setglobal("EmergencyCalled",0);
        setglobal("chat cooldown",0);
        setglobal("*sabotage_blocked_till",0);
        if (vm.runtime.ioDevices.keyboard._keysPressed.includes("T")) {
            setglobal("alive?",1);
        } else if (vm.runtime.ioDevices.keyboard._keysPressed.includes("Y")) {
            setglobal("alive?",0);
        }
        if (pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F")),!pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            config.speed = !config.speed;
        }
    })
})();