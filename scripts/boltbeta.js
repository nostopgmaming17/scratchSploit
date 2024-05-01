// https://scratch.mit.edu/projects/1010734473/

(()=>{
    const LOG = false;

    const plr = vm.runtime.targets[1], ac = vm.runtime.targets[3];
    const suspicion = patternscan(ac,["control_if","input.condition","operator_gt",0,"input.substack","procedures_call"])[0][2].mutation.proccode;
    const flag = patternscan(ac,["control_if","input.condition","operator_equals","input.operand1","sensing_of",0,"input.substack","procedures_call"])[0][3].mutation.proccode;
    const controller = patternscan(plr,["procedures_definition","event_broadcast","data_setvariableto","input.value","argument_reporter_string_number",0,"input.custom_block","="])[0][4].mutation.proccode;
    const yv = patternscan(plr,["motion_changeyby","input.dy","data_variable"])[0][1].fields.VARIABLE.value;
    const touching = patternscan(plr,["control_forever","input.substack","control_if","input.condition","operator_and","input.operand2","operator_equals","input.operand1","data_variable"])[0][4].fields.VARIABLE.value;
    const airtime = patternscan(ac,["control_if","input.condition","operator_gt","input.operand1","data_variable",0,"input.substack","procedures_call"])[0][2].fields.VARIABLE.value;
    const config = {
        fly: false
    };
    restore(vm.runtime._primitives,"procedures_call");
    hookp(vm.runtime._primitives,"procedures_call",{
        apply(f, th, args) {
            if (args[1].thread.target.sprite == ac.sprite) {
                switch(args[0].mutation.proccode) {
                    case suspicion:
                    case flag:
                        if (LOG) {
                            const cargs = JSON.parse(args[0].mutation.argumentids).map(v=>args[0][v]);
                            console.log(args[0].mutation.proccode==flag?"Flag":"Suspicion",cargs);
                        }
                        return;
                }
            } else if (args[1].thread.target.sprite == plr.sprite) {
                if (args[0].mutation.proccode == controller) {
                    if (config.fly)
                        return;
                    const cargs = JSON.parse(args[0].mutation.argumentids);
                    args[0][cargs[0]] = 10;
                    args[0][cargs[1]] = 32;
                }
            }
            return Reflect.apply(f, th, args);
        }
    });
    restore(vm.runtime._primitives,"data_addtolist");
    hookp(vm.runtime._primitives,"data_addtolist",{
        apply(f, th, args) {
            if (args[0].LIST.name == "Flagged") {
                if (LOG)
                    console.log("Direct Flag0:", args[0].ITEM);
                return;
            }
            return Reflect.apply(f, th, args);
        }
    });
    restore(vm.runtime._primitives,"data_insertatlist");
    hookp(vm.runtime._primitives,"data_insertatlist",{
        apply(f, th, args) {
            if (args[0].LIST.name == "Flagged") {
                if (LOG)
                    console.log("Direct Flag1:", args[0].ITEM);
                return;
            }
            return Reflect.apply(f, th, args);
        }
    });

    // Fly script F to toggle WASD controls
    if (window.inter != null) clearInterval(window.inter);
    let pressed = false;
    window.inter = setInterval(()=>{
        if (pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F")),!pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            config.flying = !config.flying;
        }
        
        if (!config.flying) return;
        let w=vm.runtime.ioDevices.keyboard._keysPressed.includes("W"),a=vm.runtime.ioDevices.keyboard._keysPressed.includes("A"),s=vm.runtime.ioDevices.keyboard._keysPressed.includes("S"),d=vm.runtime.ioDevices.keyboard._keysPressed.includes("D");
        plr.X += d*15 - a*15;
        setglobal(yv,w*10 - s*10 + 1);
        setglobal(touching,0);
        setglobal(airtime,0);
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();