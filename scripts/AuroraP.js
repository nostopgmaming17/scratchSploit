// https://scratch.mit.edu/projects/919853847
// Supports the other versions too

(()=>{
    const sprite = getsprite("Sprite1");
    restore(vm.runtime._primitives,"procedures_call");
    hookp(vm.runtime._primitives,"procedures_call",{
        apply(f, th, args){
            if (args[0].mutation.proccode.startsWith("Event.Check.Flagged")) {
                return;
            }
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
    window.inter!=null&&clearInterval(window.inter);
    window.inter = setInterval(()=>{
        const w=vm.runtime.ioDevices.keyboard._keysPressed.includes("W"),s=vm.runtime.ioDevices.keyboard._keysPressed.includes("S");
        if (w||s){
            setglobal("MotionY",w*10-s*10);
        }
        const a=vm.runtime.ioDevices.keyboard._keysPressed.includes("A"),d=vm.runtime.ioDevices.keyboard._keysPressed.includes("D");
        if (a||d){
            setglobal("MotionX",d*15-a*15);
        }
    })
})();