// https://scratch.mit.edu/projects/452800849/

(()=>{
    const pattern = patternscan(getsprite("AntiCheat")||vm.runtime.targets[2],["=","input.string2","=","input.string1","=",1,"input.string2","=","input.string2","="]);
    const lock = patternscan(getsprite("AntiCheat")||vm.runtime.targets[2],["event_broadcast","input.broadcast_input","=",0,"*","control_stop"])[0][1].fields.BROADCAST_OPTION.value;
    const clicks = varbyid(pattern[0][4].fields.VARIABLE.id);
    const cps = varbyid(pattern[0][2].fields.VARIABLE.id);
    restore(vm.runtime._primitives,"event_broadcast");
    hookp(vm.runtime._primitives,"event_broadcast",{
        apply(f, th, args) {
            if (args[0].BROADCAST_OPTION.name == lock)
                return;
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
    setInterval(()=>{
        let amt = Math.floor(Math.random()*500+100);
        clicks.value = (Number(clicks.value)||0)+amt;
        cps.value = (Number(cps.value)||0)+amt;
    });
})();