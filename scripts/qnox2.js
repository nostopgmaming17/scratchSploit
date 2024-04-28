// https://scratch.mit.edu/projects/452800849/

(()=>{
    const pattern = patternscan(getsprite("AntiCheat"),["=","input.string2","=","input.string1","=",1,"input.string2","=","input.string2","="])
    const clicks = pattern[0][4].fields.VARIABLE.value;
    const cps = pattern[0][2].fields.VARIABLE.value;
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
        let amt = Math.floor(Math.random()*500+100);
        setglobal(clicks,(Number(getglobal(clicks))||0)+amt);
        setglobal(cps,(Number(getglobal(cps))||0)+amt);
    });
})();