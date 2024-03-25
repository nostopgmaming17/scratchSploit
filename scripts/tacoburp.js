// https://scratch.mit.edu/projects/478790208/

(() => {
    let pressed = false;
    setInterval(() => {
        const player = getsprite("Player")
        setglobal("HEALTH", 100);
        setlocal(player,"fire rate",-10)
        !player.visible&&player.setVisible(true);
        if (pressed && !vm.runtime.ioDevices.keyboard._keysPressed.includes("F") && (pressed = false), !pressed && (pressed = vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            /*
            console.log("WHAT",pressed)
            const buf = getlocal("Player","buffer"), spawn = getglobal("SPAWN PROJECTILE");
            const id = getglobal("MY PLAYER #"), x = getglobal("PLAYER X"), y = getglobal("PLAYER Y");
            buf.push(Math.round(x),Math.round(y),999,0);
            spawn.push(id,-1,x,y+3*1.5,0,3);
            buf.push(-1,x,y+3*1.5,0,3,"");
            console.log(buf)
            */
            vm.runtime._pushThread("nfFeb:quy1e3F;ny6DXz",player);
        }
    }, 10);
})();