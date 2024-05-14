// You need to install the extension for this script to work

(()=>{
    const lac = getsprite("LACR");
    const plr = vm.runtime.targets[3];
    restore(vm.runtime._primitives,"event_broadcast");
    hook(vm.runtime._primitives,"event_broadcast",old=>{
        return function(b, th) {
            if (b.BROADCAST_OPTION.name === "lac.setback" || b.BROADCAST_OPTION.name == "lac.ban")
                return;
            return old.apply(this,arguments);
        }
    })
    
    restore(vm.runtime._primitives,"procedures_call");
    hook(vm.runtime._primitives,"procedures_call",old=>{
        return function(b,th) {
            if (th.target.blocks._blocks !== lac.blocks._blocks)
                return old.apply(this,arguments);
            if (th.target.blocks._blocks === lac.blocks._blocks && b.mutation.proccode.includes("flag")) {
               return;
            }
            return old.apply(this,arguments);
        }
    });
    restore(vm.runtime._primitives,"data_setvariableto");
    hook(vm.runtime._primitives,"data_setvariableto",old=>{
        return function(b,th) {
            if (b.VARIABLE.name == "Yv" && b.VALUE < 0) {
                return;
            } else if (b.VARIABLE.name == "Xv" && b.VALUE == 0) {
                const bid = th.thread.stack[th.thread.stack.length-1];
                const next = th.thread.target.blocks._blocks[th.thread.target.blocks.getNextBlock(bid)];
                if (next && next.opcode === "event_broadcast") {
                    const inp = th.thread.target.blocks._blocks[next.inputs.BROADCAST_INPUT.block];
                    if (inp && inp.fields.BROADCAST_OPTION.value == "lac.setback")
                        return;
                }
                return;
            }
            return old.apply(this,arguments);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
    runfunc(lac,"flag %s punishment %s description %s last X pos %s last Y pos %s",["Loaded",0,"Loaded up disabler",0, 0])
})();

(()=>{
    // Fly script F to toggle WASD controls
    if (window.inter != null) clearInterval(window.inter);
    let pressed = false;
    let flying = false;
    window.inter = setInterval(()=>{
        if (pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F")),!pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            flying = !flying;
        }
        let w=vm.runtime.ioDevices.keyboard._keysPressed.includes("W"),a=vm.runtime.ioDevices.keyboard._keysPressed.includes("A"),s=vm.runtime.ioDevices.keyboard._keysPressed.includes("S"),d=vm.runtime.ioDevices.keyboard._keysPressed.includes("D");
        if (!flying) return;
        setglobal("Xv",d*15 - a*15);
        setglobal("Yv",w*15 - s*15);
        setglobal("Falling",0);
    });
    restore(vm.runtime._primitives,"data_changevariableby");
    hookp(vm.runtime._primitives,"data_changevariableby",{
        apply(f, th, args) {
            if (flying){
                switch(args[0].VARIABLE.name){
                    case "Xv":
                    case "Yv":
                    case "Falling":
                        args[0].VALUE = 0;
                }
            } else if (args[0].VARIABLE.name == "Falling")
                args[0].VALUE = 1;
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();