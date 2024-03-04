(()=>{
    const workspace = Blockly.getMainWorkspace();
    const lac = vm.runtime.targets[2];
    const plr = vm.runtime.targets[3];
    restore(vm.runtime._primitives,"event_broadcast");
    hook(vm.runtime._primitives,"event_broadcast",old=>{
        return function(b, th) {
            if (b.BROADCAST_OPTION.name === "lac.setback" || b.BROADCAST_OPTION.name == "lac.ban")
                return;
            console.log(b.BROADCAST_OPTION.name)
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
            if (b.VARIABLE.name == "Yv2" && b.VALUE == -100){
                return
            }
            return old.apply(this,arguments);
        }
    });
    vm.runtime.targets.forEach(v=>{
        v.blocks.resetCache();
    })
})();