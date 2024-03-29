// https://scratch.mit.edu/projects/946011965/
// ban bypass

(()=>{
    restore(vm.runtime._primitives,"control_stop");
    hookp(vm.runtime._primitives,"control_stop",{
        apply(f, th, args) {
            if (args[0].STOP_OPTION == "all") {
                console.warn("%cBAN SCRIPT: \""+args[1].thread.topBlock+"\"","color: red; font-size: 2rem;");
                say(args[1].thread.target,"");
                args[0].STOP_OPTION = "this script";
                args[1].thread.target.blocks.deleteBlock(args[1].thread.topBlock);
                vm.runtime.requestBlocksUpdate();
            }
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();