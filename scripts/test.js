(()=>{
    let cnt = 0;
    function scan(block,a,b){
        for(let i in block){
            if(typeof block[i] == "object")
                scan(block[i],a,b);
            else if (block[i]==a)
                block[i]=b;
        }
    }
    for(let i=0;i<vm.runtime.targets.length;i++){
        let sprite = vm.runtime.targets[i];
        let blocks = sprite.blocks._blocks;
        for(let j in blocks) {
            let b = blocks[j];
            if (!b || !b.parent) continue;
            if (b.opcode == "event_broadcast"){
                let opt = blocks[b.inputs.BROADCAST_INPUT.block];
                let OPT = opt.fields.BROADCAST_OPTION.value;
                if (OPT.includes("lac"))console.log(OPT)
                if (OPT.includes("lac")){
                    console.log("Disabling 0x"+(cnt++).toString(16),b.id,OPT);
                    let next = b.next;
                    let parent = b.parent;
                    b.next = null;
                    b.parent = null;
                    scan(blocks[parent],j,next);
                    if(next!=null)
                        blocks[next].parent = parent;
                }
            }
        }
        sprite.blocks.resetCache();
        sprite.blocks.emitProjectChanged()
    }
})();