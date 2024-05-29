// You need to install the extension for this script to work

(()=>{
    const lac = vm.runtime.targets[2];
    patternscan(lac,["control_if","input.substack","procedures_call","input.rMu@rPJmADQ[[:m!L:B%","text",1,"input.nT@9gjwj8I0Cs$05)n16","text"]).forEach(v=>{
        //console.log("FLAG DETECTED:",v[1].id,"flag(",v[2].fields.TEXT.value,",",v[3].fields.TEXT.value,")");
        v[1].mutation.proccode = "";
    });
    patternscan(lac,["data_setvariableto","input.value","text"]).forEach(v=>{
        switch(v[0].fields.VARIABLE.value){
            case "Xv":
                if (v[1].fields.TEXT.value <= 0){
                    v[1].opcode = "data_variable";
                    v[1].fields.VARIABLE = {
                        name:"VARIABLE",
                        value: v[0].fields.VARIABLE.value,
                        id: v[0].fields.VARIABLE.id
                    };
                    delete v[1].fields.TEXT;
                }
                break;
            case "Yv2":
                if (v[1].fields.TEXT.value < 0){
                    v[1].opcode = "data_variable";
                    v[1].fields.VARIABLE = {
                        name:"VARIABLE",
                        value: v[0].fields.VARIABLE.value,
                        id: v[0].fields.VARIABLE.id
                    };
                    delete v[1].fields.TEXT;
                }
        }
    });
    patternscan(lac,["event_broadcast_menu"]).forEach(v=>{
        if (v[0].fields.BROADCAST_OPTION.value == "lac.setback"){
            v[0].fields.BROADCAST_OPTION.value = "nothing";
            v[0].fields.BROADCAST_OPTION.id = "";
        }
    })
    vm.runtime.targets[2].blocks.resetCache();
    vm.runtime.requestBlocksUpdate();
    runfunc(lac,"flag %s %s %s %s %s %s %s",["Loaded","Loaded up disabler",0,0,0,0,0])
})();

(()=>{
    // Fly script F to toggle WASD controls
    if (window.inter != null) clearInterval(window.inter);
    let pressed = false;
    let flying = false;
    window.inter = setInterval(()=>{
        if (pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F")),!pressed&&(pressed=vm.runtime.ioDevices.keyboard._keysPressed.includes("F"))) {
            flying = !flying;
        }
        let w=vm.runtime.ioDevices.keyboard._keysPressed.includes("W"),a=vm.runtime.ioDevices.keyboard._keysPressed.includes("A"),s=vm.runtime.ioDevices.keyboard._keysPressed.includes("S"),d=vm.runtime.ioDevices.keyboard._keysPressed.includes("D");
        if (!flying) return;
        setglobal("Xv",d*15 - a*15);
        setglobal("Yv2",w*15 - s*15);
        setglobal("Falling",0);
    });
    restoreop("data_changevariableby");
    hookop("data_changevariableby",{
        apply(f, th, args) {
            if (flying){
                switch(args[0].VARIABLE.name){
                    case "Xv":
                    case "Yv2":
                    case "Falling":
                        args[0].VALUE = 0;
                }
            } else if (args[0].VARIABLE.name == "Falling")
                args[0].VALUE = 1;
            return Reflect.apply(f, th, args);
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();