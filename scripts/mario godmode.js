(()=>{
    const code = {
        "BXD`ie#BxR,BF6V{0(MC": {
            "id": "BXD`ie#BxR,BF6V{0(MC",
            "opcode": "event_whenflagclicked",
            "inputs": {},
            "fields": {},
            "next": "]+^emzgml=xcrJ_}2W`o",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 345.3333333333333,
            "y": 312.44444444444457
        },
        "]+^emzgml=xcrJ_}2W`o": {
            "id": "]+^emzgml=xcrJ_}2W`o",
            "opcode": "control_forever",
            "inputs": {
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "g7*6ie]J}(2TF5bBmDyN",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "BXD`ie#BxR,BF6V{0(MC",
            "shadow": false,
            "x": "-358",
            "y": "1035"
        },
        "g7*6ie]J}(2TF5bBmDyN": {
            "id": "g7*6ie]J}(2TF5bBmDyN",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "@F+qJTDy:F3Dv.f~w$^G",
                    "shadow": "@F+qJTDy:F3Dv.f~w$^G"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "wT^Thir!R#l9?Hs0x)Uo",
                    "value": "EXIT",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "]+^emzgml=xcrJ_}2W`o",
            "shadow": false,
            "x": 346.81481481481467,
            "y": 684.9383997033965
        },
        "@F+qJTDy:F3Dv.f~w$^G": {
            "id": "@F+qJTDy:F3Dv.f~w$^G",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "g7*6ie]J}(2TF5bBmDyN",
            "shadow": true
        }
    };
    for (let i in code) {
        vm.runtime.targets[2].blocks._blocks[i] = code[i]
    };
    vm.runtime.targets[2].blocks._scripts.push(
        "BXD`ie#BxR,BF6V{0(MC"
    );
})()