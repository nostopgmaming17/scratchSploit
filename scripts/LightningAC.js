// You need to install the extension for this script to work

(()=>{
    const lac = vm.runtime.targets[2];
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
            if (b.VARIABLE.name == "Yv2" && b.VALUE == -100) {
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
    runfunc(lac,"flag %s %s %s %s %s %s %s",["Loaded","Loaded up disabler",0,0,0,0,0])
})();