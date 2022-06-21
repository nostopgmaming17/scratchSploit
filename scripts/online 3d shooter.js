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
                    "value": "1000"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "{J+2PC.zY~^f)R,ZWO6?",
            "shadow": true
        }
    };
    for (let i in code) {
        vm.runtime.targets[0].blocks._blocks[i] = code[i]
    };
    vm.runtime.targets[0].blocks._scripts.push(
        "HvPPj(QTW*j!FMdso95p"
    );
    let obj = vm.runtime.targets[0].blocks._blocks['=hr*2JdBoq7da2!tZ{zw'].inputs.OPERAND2;
    obj = vm.runtime.targets[0].blocks._blocks[obj.block];
    obj.fields = {};
    obj.opcode = "sensing_username";
    let szid = vm.runtime.targets[1].blocks._blocks["j)jMpHg,~`9{I6:%CDEC"].inputs.VALUE.block;
    vm.runtime.targets[1].blocks._blocks[szid].fields.NUM.value = -0.0025;
    let sxid = vm.runtime.targets[1].blocks._blocks["5C@Cd8.pfaC/ECuSEpTx"].inputs.NUM2.block;
    vm.runtime.targets[1].blocks._blocks[sxid].fields.NUM.value = 0.9;
    let syid = vm.runtime.targets[1].blocks._blocks[":BwsP.n8XXrfmNXb83P*"].inputs.NUM2.block;
    vm.runtime.targets[1].blocks._blocks[syid].fields.NUM.value = 0.9;
})()