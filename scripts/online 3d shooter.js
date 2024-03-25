(()=>{
    const code = {
        "HvPPj(QTW*j!FMdso95p": {
            "id": "HvPPj(QTW*j!FMdso95p",
            "opcode": "event_whenflagclicked",
            "inputs": {},
            "fields": {},
            "next": "C8HY;=(3h84$[sk,~{T*",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 1010.5185185185177,
            "y": 306.5185185185185
        },
        "C8HY;=(3h84$[sk,~{T*": {
            "id": "C8HY;=(3h84$[sk,~{T*",
            "opcode": "control_forever",
            "inputs": {
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "{J+2PC.zY~^f)R,ZWO6?",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "HvPPj(QTW*j!FMdso95p",
            "shadow": false,
            "x": "-358",
            "y": "1035"
        },
        "{J+2PC.zY~^f)R,ZWO6?": {
            "id": "{J+2PC.zY~^f)R,ZWO6?",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "E^jw:vMv)gGQNSBz)A^)",
                    "shadow": "E^jw:vMv)gGQNSBz)A^)"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "moq?QRWLl5I6jQ(FB*k*-Health-",
                    "value": "Health",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "C8HY;=(3h84$[sk,~{T*",
            "shadow": false,
            "x": 554.2222222222215,
            "y": 458.46918854890174
        },
        "E^jw:vMv)gGQNSBz)A^)": {
            "id": "E^jw:vMv)gGQNSBz)A^)",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "100"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "{J+2PC.zY~^f)R,ZWO6?",
            "shadow": true
        }
    };
    for (let i in code) {
        vm.runtime.targets[0].blocks.createBlock(code[i]);
    };

    restore(vm.runtime._primitives,"procedures_call");
    hook(vm.runtime._primitives,"procedures_call",old=>{
        const sprite = vm.runtime.targets[1];
        return function(b, th) {
            try{
                if (th.thread.target.blocks._blocks === sprite.blocks._blocks && b.mutation.proccode.includes("Accelerate")) {
                    const cargs = JSON.parse(b.mutation.argumentids);
                    b[cargs[1]] *= 2;
                }
            }catch(e){}
            return old.apply(this,arguments);
        }
    });
    restore(vm.runtime._primitives,"data_changevariableby");
    hook(vm.runtime._primitives,"data_changevariableby",old=>{
        const sprite = vm.runtime.targets[1];
        const id = getlocalid(sprite,"shoot wait");
        const ops = new WeakSet;
        return function(b, th) {
            try{
                if (b.VARIABLE.id === id && b.VALUE == 5) {
                    b.VALUE = 1;
                }
            }catch(e){}
            return old.apply(this,arguments);
        }
    });
    restore(vm.runtime.sequencer,"stepThreads");
    hook(vm.runtime.sequencer,"stepThreads",old=>{
        const shoot = vm.runtime.targets[0].variables[getid("_Shoot")];
        const hitid = vm.runtime.targets[0].variables[getid("_Hit ID")];
        const entities = getsprite("Entities");
        const crosshair = getsprite("Crosshair");
        const pid = getlocalid("Entities","Player ID");
        const dead = getlocalid("Entities","eDead");
        function dist(a,b) {
            return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
        }
        let last = null;
        return function() {
            const r = old.apply(this,arguments);
            try{
                if (shoot.value > 0 && hitid.value == 0) {
                    let r = 100, rv = null;
                    for(let p of entities.sprite.clones) {
                        if (!p.visible || p.variables[dead].value == 1) continue;
                        const d = dist(crosshair, p);
                        if (d < r) {
                            r = d;
                            rv = p;
                        }
                    }
                    if (last != rv && last != null) {
                        last.clearEffects();
                    }
                    if (rv != null) {
                        hitid.value = rv.variables[pid].value;
                        rv.setEffect("color",100);
                    }
                    last = rv;
                } else if (last != null) {
                    last.clearEffects();
                }
            }catch(e){ console.warn(e) }
            return r;
        }
    })
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());

    let obj = vm.runtime.targets[0].blocks._blocks['=hr*2JdBoq7da2!tZ{zw'].inputs.OPERAND2;
    obj = vm.runtime.targets[0].blocks._blocks[obj.block];
    obj.fields = {};
    obj.opcode = "sensing_username";
    vm.runtime.targets[0].blocks.resetCache();
    vm.runtime.targets[0].blocks.emitProjectChanged();
    vm.runtime.requestBlocksUpdate();
    if (vm.runtime.threads.length > 0)
        vm.runtime._pushThread("HvPPj(QTW*j!FMdso95p",vm.runtime.targets[0]);
})();