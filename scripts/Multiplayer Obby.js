// https://scratch.mit.edu/projects/658513994/

(()=>{
    restore(vm.runtime._primitives,"event_broadcast")
    hookp(vm.runtime._primitives,"event_broadcast",{
        apply(f, th, args) {
            try{
                if (args[0].BROADCAST_OPTION.name == "Kick") return;
            }catch(e){}
            return Reflect.apply(f, th, args);
        }
    });
    (()=>{
        vm.runtime.targets.forEach(sprite=>{
            const blocks = sprite.blocks._blocks;
            for(let b in blocks){
                if (blocks[b].opcode == "text" && blocks[b].fields.TEXT.value == "PhilHub") {
                    blocks[b].fields = {};
                    blocks[b].opcode = "sensing_username";
                }
            }
            sprite.blocks.resetCache();
        });
        vm.runtime.requestBlocksUpdate();
    })();
    setInterval(()=>{
        setglobal("PLATFORM TO DISSAPEAR?",1);
        broadcast("Platform disappear ");
    },0);
})();