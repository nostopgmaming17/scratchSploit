// https://scratch.mit.edu/projects/478790208/

(() => {
    let pressed = false;
    setInterval(() => {
        const player = getsprite("Player")
        setglobal("HEALTH", 100);
        setlocal(player,"fire rate",-10)
        !player.visible&&player.setVisible(true);
        if (pressed && !vm.runtime.ioDevices.keyboard._keysPressed.includes("F") && (pressed = false), !pressed && (pressed = vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            vm.runtime._pushThread("nfFeb:quy1e3F;ny6DXz",player);
        }
    }, 10);
})();