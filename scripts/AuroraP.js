// https://scratch.mit.edu/projects/919853847
// Supports the other versions too

(()=>{
    const motionx = getglobals().find(v=>v.includes("MotionX")), motiony = getglobals().find(v=>v.includes("MotionY"));
    const sprite = getsprite("Sprite1");
    restoreop("procedures_call");
    hookop("procedures_call",{
        apply(f, th, args){
            if (args[0].mutation.proccode.includes("Event")) {
                return;
            }
            return Reflect.apply(f, th, args);
        }
    });
    window.inter!=null&&clearInterval(window.inter);
    window.inter = setInterval(()=>{
        const w=vm.runtime.ioDevices.keyboard._keysPressed.includes("W"),s=vm.runtime.ioDevices.keyboard._keysPressed.includes("S");
        if (w||s){
            setglobal(motiony,w*10-s*10);
        }
        const a=vm.runtime.ioDevices.keyboard._keysPressed.includes("A"),d=vm.runtime.ioDevices.keyboard._keysPressed.includes("D");
        if (a||d){
            setglobal(motionx,d*15-a*15);
        }
    })
})();