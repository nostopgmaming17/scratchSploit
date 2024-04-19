// https://scratch.mit.edu/projects/452800849/

(()=>{
    const clicks = "348976986496755674558745685";
    const cps = "358976986496754574568745695";

    restore(vm.runtime._primitives,"event_broadcast");
    hookp(vm.runtime._primitives,"event_broadcast",{
        apply(f, th, args) {
            if (args[0].BROADCAST_OPTION.name == "lock")
                return;
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());

    setInterval(()=>{
        const target = getTarget();
        if (target?.getName() == "ClickObject") {
            setglobal(clicks,(Number(getglobal(clicks))||0)+111);
            setglobal(cps,(Number(getglobal(cps))||0)+111);
        }
    });
})();