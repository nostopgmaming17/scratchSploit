// https://scratch.mit.edu/projects/919853847
// Supports the other versions too
// Only works on AuroraP anticheat games

(()=>{
    let pattern = patternscan(vm.runtime.targets[1],["event_whenflagclicked","motion_gotoxy","data_setvariableto","data_setvariableto","data_setvariableto"])[0];
    const motionx = pattern[3].fields.VARIABLE.value, motiony = pattern[4].fields.VARIABLE.value;
    pattern = patternscan(vm.runtime.targets[1],["procedures_definition","looks_say",0,"input.custom_block","="])
    const flag = pattern[0][2].mutation.proccode;
    const sprite = getsprite("Sprite1");
    restoreop("procedures_call");
    hookop("procedures_call",{
        apply(f, th, args){
            if (args[0].mutation.proccode == flag) {
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
            setglobal(motiony,w*10-s*10);
        }
        const a=vm.runtime.ioDevices.keyboard._keysPressed.includes("A"),d=vm.runtime.ioDevices.keyboard._keysPressed.includes("D");
        if (a||d){
            setglobal(motionx,d*15-a*15);
        }
    })
})();