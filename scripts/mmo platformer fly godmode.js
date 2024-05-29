(()=>{
    vm.runtime.targets[1].createVariable("$speed","speed","");
    const code = {
        "=}zEiv0%M:$Vpy94U[I5": {
            "id": "=}zEiv0%M:$Vpy94U[I5",
            "opcode": "event_whenkeypressed",
            "inputs": {},
            "fields": {
                "KEY_OPTION": {
                    "name": "KEY_OPTION",
                    "value": "f"
                }
            },
            "next": "Tl%_*E%X=h[|aU+BnGW~",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 289,
            "y": 777
        },
        "Tl%_*E%X=h[|aU+BnGW~": {
            "id": "Tl%_*E%X=h[|aU+BnGW~",
            "opcode": "sensing_askandwait",
            "inputs": {
                "QUESTION": {
                    "name": "QUESTION",
                    "block": "BkRxLr7C!n857`rNH/r-",
                    "shadow": "BkRxLr7C!n857`rNH/r-"
                }
            },
            "fields": {},
            "next": "KHQXV#0TH~w6hXD@D_Li",
            "topLevel": false,
            "parent": "=}zEiv0%M:$Vpy94U[I5",
            "shadow": false
        },
        "BkRxLr7C!n857`rNH/r-": {
            "id": "BkRxLr7C!n857`rNH/r-",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "FLY SPEED"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "Tl%_*E%X=h[|aU+BnGW~",
            "shadow": true
        },
        "KHQXV#0TH~w6hXD@D_Li": {
            "id": "KHQXV#0TH~w6hXD@D_Li",
            "opcode": "control_if",
            "inputs": {
                "CONDITION": {
                    "name": "CONDITION",
                    "block": "m9=Ys#^tk+4vg0VOF8hM",
                    "shadow": null
                },
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "W;}^}`bUU,%+#3jUm#],",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "Tl%_*E%X=h[|aU+BnGW~",
            "shadow": false
        },
        "m9=Ys#^tk+4vg0VOF8hM": {
            "id": "m9=Ys#^tk+4vg0VOF8hM",
            "opcode": "operator_not",
            "inputs": {
                "OPERAND": {
                    "name": "OPERAND",
                    "block": "W(l}i)=tPdT5i8hT-rj@",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "KHQXV#0TH~w6hXD@D_Li",
            "shadow": false
        },
        "W(l}i)=tPdT5i8hT-rj@": {
            "id": "W(l}i)=tPdT5i8hT-rj@",
            "opcode": "operator_equals",
            "inputs": {
                "OPERAND1": {
                    "name": "OPERAND1",
                    "block": "0IL![bnOJ$b`g:TT_cQB",
                    "shadow": "Tr)_y!C9l8h=ACdmxTZ/"
                },
                "OPERAND2": {
                    "name": "OPERAND2",
                    "block": "i_uGN3yT~Ph`0]g[|+0?",
                    "shadow": "i_uGN3yT~Ph`0]g[|+0?"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "m9=Ys#^tk+4vg0VOF8hM",
            "shadow": false
        },
        "0IL![bnOJ$b`g:TT_cQB": {
            "id": "0IL![bnOJ$b`g:TT_cQB",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "W(l}i)=tPdT5i8hT-rj@",
            "shadow": false
        },
        "Tr)_y!C9l8h=ACdmxTZ/": {
            "id": "Tr)_y!C9l8h=ACdmxTZ/",
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
            "parent": "W(l}i)=tPdT5i8hT-rj@",
            "shadow": true
        },
        "i_uGN3yT~Ph`0]g[|+0?": {
            "id": "i_uGN3yT~Ph`0]g[|+0?",
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
            "parent": "W(l}i)=tPdT5i8hT-rj@",
            "shadow": true
        },
        "W;}^}`bUU,%+#3jUm#],": {
            "id": "W;}^}`bUU,%+#3jUm#],",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "}6b1lY{Mj`#m=4XpLqTB",
                    "shadow": ")fb3dsGGEt_}3I|;EuDY"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "$speed",
                    "value": "speed",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "KHQXV#0TH~w6hXD@D_Li",
            "shadow": false
        },
        "}6b1lY{Mj`#m=4XpLqTB": {
            "id": "}6b1lY{Mj`#m=4XpLqTB",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "W;}^}`bUU,%+#3jUm#],",
            "shadow": false
        },
        ")fb3dsGGEt_}3I|;EuDY": {
            "id": ")fb3dsGGEt_}3I|;EuDY",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "0"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "W;}^}`bUU,%+#3jUm#],",
            "shadow": true,
            "x": "467.93745422363276",
            "y": "945"
        },
        "T`h6QjXtV`cB?1z4M:rF": {
            "id": "T`h6QjXtV`cB?1z4M:rF",
            "opcode": "event_whenbroadcastreceived",
            "inputs": {},
            "fields": {
                "BROADCAST_OPTION": {
                    "name": "BROADCAST_OPTION",
                    "id": "JFC%GL]Ka.(v{G,Qp~Xh",
                    "value": "LOAD",
                    "variableType": "broadcast_msg"
                }
            },
            "next": "*9W?lmu@:g0my%9cAWSB",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 302,
            "y": 29
        },
        "*9W?lmu@:g0my%9cAWSB": {
            "id": "*9W?lmu@:g0my%9cAWSB",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "B~D2UTt2ZRO@k_bR$!js",
                    "shadow": "B~D2UTt2ZRO@k_bR$!js"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "$speed",
                    "value": "speed",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "T`h6QjXtV`cB?1z4M:rF",
            "shadow": false
        },
        "B~D2UTt2ZRO@k_bR$!js": {
            "id": "B~D2UTt2ZRO@k_bR$!js",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "1"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "*9W?lmu@:g0my%9cAWSB",
            "shadow": true
        },
        "Z5.G1buNEo}d$9N%]JeQ": {
            "id": "Z5.G1buNEo}d$9N%]JeQ",
            "opcode": "event_whenbroadcastreceived",
            "inputs": {},
            "fields": {
                "BROADCAST_OPTION": {
                    "name": "BROADCAST_OPTION",
                    "id": "EmRV]n$Ek(aIb/haC#w^",
                    "value": "START",
                    "variableType": "broadcast_msg"
                }
            },
            "next": "V(NnjMVB|+s{8WBW+X1I",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 281,
            "y": 318
        },
        "V(NnjMVB|+s{8WBW+X1I": {
            "id": "V(NnjMVB|+s{8WBW+X1I",
            "opcode": "control_forever",
            "inputs": {
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "uDuNF=vg8$}YF36.^f|^",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "Z5.G1buNEo}d$9N%]JeQ",
            "shadow": false
        },
        "uDuNF=vg8$}YF36.^f|^": {
            "id": "uDuNF=vg8$}YF36.^f|^",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "POHNYjh2e}BSHwXc-PGd",
                    "shadow": "POHNYjh2e}BSHwXc-PGd"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "!OVN0%s0K6f8+Qz%]3+^",
                    "value": "FLAG COUNT",
                    "variableType": ""
                }
            },
            "next": "!K.vsZ-xIU_*YDy{5aGA",
            "topLevel": false,
            "parent": "V(NnjMVB|+s{8WBW+X1I",
            "shadow": false
        },
        "POHNYjh2e}BSHwXc-PGd": {
            "id": "POHNYjh2e}BSHwXc-PGd",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "0"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "uDuNF=vg8$}YF36.^f|^",
            "shadow": true
        },
        "!K.vsZ-xIU_*YDy{5aGA": {
            "id": "!K.vsZ-xIU_*YDy{5aGA",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "m$(T@v=J0WzOMZ,Up`3,",
                    "shadow": "m$(T@v=J0WzOMZ,Up`3,"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "W4jq39m=-BXk*%TkY`uo-@Player Die-",
                    "value": "@Player Die",
                    "variableType": ""
                }
            },
            "next": "9p4g[;%ek}%E6dXsc;=i",
            "topLevel": false,
            "parent": "uDuNF=vg8$}YF36.^f|^",
            "shadow": false
        },
        "m$(T@v=J0WzOMZ,Up`3,": {
            "id": "m$(T@v=J0WzOMZ,Up`3,",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "0"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "!K.vsZ-xIU_*YDy{5aGA",
            "shadow": true
        },
        "9p4g[;%ek}%E6dXsc;=i": {
            "id": "9p4g[;%ek}%E6dXsc;=i",
            "opcode": "control_if",
            "inputs": {
                "CONDITION": {
                    "name": "CONDITION",
                    "block": "4NdY5bb?d]?d,eqdYZ+x",
                    "shadow": null
                },
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "p6T{[Cci/#xt#Z#rut:*",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "!K.vsZ-xIU_*YDy{5aGA",
            "shadow": false
        },
        "4NdY5bb?d]?d,eqdYZ+x": {
            "id": "4NdY5bb?d]?d,eqdYZ+x",
            "opcode": "sensing_mousedown",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "9p4g[;%ek}%E6dXsc;=i",
            "shadow": false
        },
        "p6T{[Cci/#xt#Z#rut:*": {
            "id": "p6T{[Cci/#xt#Z#rut:*",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": "`km87+dqp];IG0;hk,wT",
                    "shadow": "!9wy=4tjVSP3|RG!Nqye"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "W4jq39m=-BXk*%TkY`uo-@Player SX-",
                    "value": "@Player SX",
                    "variableType": ""
                }
            },
            "next": ")fW_jezdx0n0mja-RLZi",
            "topLevel": false,
            "parent": "9p4g[;%ek}%E6dXsc;=i",
            "shadow": false
        },
        "`km87+dqp];IG0;hk,wT": {
            "id": "`km87+dqp];IG0;hk,wT",
            "opcode": "operator_subtract",
            "inputs": {
                "NUM1": {
                    "name": "NUM1",
                    "block": "pe4#,X%;^AsISOJj-gO_",
                    "shadow": "kOyC2G0@wJo1j;O5wYTV"
                },
                "NUM2": {
                    "name": "NUM2",
                    "block": "0~#`*cb%Ay2)hAiv#KHx",
                    "shadow": "Txq.$cdn14K8#0.CX%Y)"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "p6T{[Cci/#xt#Z#rut:*",
            "shadow": false
        },
        "pe4#,X%;^AsISOJj-gO_": {
            "id": "pe4#,X%;^AsISOJj-gO_",
            "opcode": "operator_multiply",
            "inputs": {
                "NUM1": {
                    "name": "NUM1",
                    "block": "DvG]d+Kh~;Y({/*-9!ee",
                    "shadow": "vJ$LH=FJIQ5Jkd!:?F]H"
                },
                "NUM2": {
                    "name": "NUM2",
                    "block": "aWo|Hf!?tV46W;R~og{I",
                    "shadow": "Kii*/c/Ib_1ibHc.`Xg+"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "`km87+dqp];IG0;hk,wT",
            "shadow": false
        },
        "DvG]d+Kh~;Y({/*-9!ee": {
            "id": "DvG]d+Kh~;Y({/*-9!ee",
            "opcode": "sensing_mousex",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "pe4#,X%;^AsISOJj-gO_",
            "shadow": false
        },
        "vJ$LH=FJIQ5Jkd!:?F]H": {
            "id": "vJ$LH=FJIQ5Jkd!:?F]H",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "pe4#,X%;^AsISOJj-gO_",
            "shadow": true
        },
        "aWo|Hf!?tV46W;R~og{I": {
            "id": "aWo|Hf!?tV46W;R~og{I",
            "opcode": "data_variable",
            "inputs": {},
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "$speed",
                    "value": "speed",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "pe4#,X%;^AsISOJj-gO_",
            "shadow": false
        },
        "Kii*/c/Ib_1ibHc.`Xg+": {
            "id": "Kii*/c/Ib_1ibHc.`Xg+",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "pe4#,X%;^AsISOJj-gO_",
            "shadow": true
        },
        "kOyC2G0@wJo1j;O5wYTV": {
            "id": "kOyC2G0@wJo1j;O5wYTV",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "`km87+dqp];IG0;hk,wT",
            "shadow": true
        },
        "0~#`*cb%Ay2)hAiv#KHx": {
            "id": "0~#`*cb%Ay2)hAiv#KHx",
            "opcode": "sensing_of",
            "inputs": {
                "OBJECT": {
                    "name": "OBJECT",
                    "block": "@!{0AKS|;`@es_=[w7e0",
                    "shadow": "@!{0AKS|;`@es_=[w7e0"
                }
            },
            "fields": {
                "PROPERTY": {
                    "name": "PROPERTY",
                    "value": "x position"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "`km87+dqp];IG0;hk,wT",
            "shadow": false
        },
        "@!{0AKS|;`@es_=[w7e0": {
            "id": "@!{0AKS|;`@es_=[w7e0",
            "opcode": "sensing_of_object_menu",
            "inputs": {},
            "fields": {
                "OBJECT": {
                    "name": "OBJECT",
                    "value": "Player"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "0~#`*cb%Ay2)hAiv#KHx",
            "shadow": true
        },
        "Txq.$cdn14K8#0.CX%Y)": {
            "id": "Txq.$cdn14K8#0.CX%Y)",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "`km87+dqp];IG0;hk,wT",
            "shadow": true
        },
        "!9wy=4tjVSP3|RG!Nqye": {
            "id": "!9wy=4tjVSP3|RG!Nqye",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "0"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "p6T{[Cci/#xt#Z#rut:*",
            "shadow": true
        },
        ")fW_jezdx0n0mja-RLZi": {
            "id": ")fW_jezdx0n0mja-RLZi",
            "opcode": "data_setvariableto",
            "inputs": {
                "VALUE": {
                    "name": "VALUE",
                    "block": ";JAPGOk0dYgxHK1mV|(A",
                    "shadow": "7D[d!lwVi6byO4QF0+D?"
                }
            },
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "W4jq39m=-BXk*%TkY`uo-@Player SY-",
                    "value": "@Player SY",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "p6T{[Cci/#xt#Z#rut:*",
            "shadow": false
        },
        ";JAPGOk0dYgxHK1mV|(A": {
            "id": ";JAPGOk0dYgxHK1mV|(A",
            "opcode": "operator_subtract",
            "inputs": {
                "NUM1": {
                    "name": "NUM1",
                    "block": ";~tmo#zi_s.[R9nNN@5]",
                    "shadow": "yQ02@sS_Fu8?5oomHMUx"
                },
                "NUM2": {
                    "name": "NUM2",
                    "block": "!Kzg^^SRb_k-`)]fe*O%",
                    "shadow": "sB(DyS%}Cs3j!k^szo^|"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": ")fW_jezdx0n0mja-RLZi",
            "shadow": false
        },
        ";~tmo#zi_s.[R9nNN@5]": {
            "id": ";~tmo#zi_s.[R9nNN@5]",
            "opcode": "operator_multiply",
            "inputs": {
                "NUM1": {
                    "name": "NUM1",
                    "block": ")~UM49-N!Z5``r5[8|RY",
                    "shadow": "Ly;WICD`ZVQe`t[MDYg6"
                },
                "NUM2": {
                    "name": "NUM2",
                    "block": "sCyd:%jS}L|{JbDggbPn",
                    "shadow": "ra4W{!.q*0=p;Y:AIg[G"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": ";JAPGOk0dYgxHK1mV|(A",
            "shadow": false
        },
        ")~UM49-N!Z5``r5[8|RY": {
            "id": ")~UM49-N!Z5``r5[8|RY",
            "opcode": "sensing_mousey",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": ";~tmo#zi_s.[R9nNN@5]",
            "shadow": false
        },
        "Ly;WICD`ZVQe`t[MDYg6": {
            "id": "Ly;WICD`ZVQe`t[MDYg6",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ";~tmo#zi_s.[R9nNN@5]",
            "shadow": true
        },
        "sCyd:%jS}L|{JbDggbPn": {
            "id": "sCyd:%jS}L|{JbDggbPn",
            "opcode": "data_variable",
            "inputs": {},
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "$speed",
                    "value": "speed",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ";~tmo#zi_s.[R9nNN@5]",
            "shadow": false
        },
        "ra4W{!.q*0=p;Y:AIg[G": {
            "id": "ra4W{!.q*0=p;Y:AIg[G",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ";~tmo#zi_s.[R9nNN@5]",
            "shadow": true
        },
        "yQ02@sS_Fu8?5oomHMUx": {
            "id": "yQ02@sS_Fu8?5oomHMUx",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ";JAPGOk0dYgxHK1mV|(A",
            "shadow": true
        },
        "!Kzg^^SRb_k-`)]fe*O%": {
            "id": "!Kzg^^SRb_k-`)]fe*O%",
            "opcode": "sensing_of",
            "inputs": {
                "OBJECT": {
                    "name": "OBJECT",
                    "block": "O},%w]$:7G)zq$$%yn!W",
                    "shadow": "O},%w]$:7G)zq$$%yn!W"
                }
            },
            "fields": {
                "PROPERTY": {
                    "name": "PROPERTY",
                    "value": "y position"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ";JAPGOk0dYgxHK1mV|(A",
            "shadow": false
        },
        "O},%w]$:7G)zq$$%yn!W": {
            "id": "O},%w]$:7G)zq$$%yn!W",
            "opcode": "sensing_of_object_menu",
            "inputs": {},
            "fields": {
                "OBJECT": {
                    "name": "OBJECT",
                    "value": "Player"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "!Kzg^^SRb_k-`)]fe*O%",
            "shadow": true
        },
        "sB(DyS%}Cs3j!k^szo^|": {
            "id": "sB(DyS%}Cs3j!k^szo^|",
            "opcode": "math_number",
            "inputs": {},
            "fields": {
                "NUM": {
                    "name": "NUM",
                    "value": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ";JAPGOk0dYgxHK1mV|(A",
            "shadow": true
        },
        "7D[d!lwVi6byO4QF0+D?": {
            "id": "7D[d!lwVi6byO4QF0+D?",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "0"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": ")fW_jezdx0n0mja-RLZi",
            "shadow": true
        },
        "#HEy)#iLvXNo8YNyu}lj": {
            "id": "#HEy)#iLvXNo8YNyu}lj",
            "opcode": "event_whenkeypressed",
            "inputs": {},
            "fields": {
                "KEY_OPTION": {
                    "name": "KEY_OPTION",
                    "value": "g"
                }
            },
            "next": "S^;T8WKp8]gvMJ3JK$XU",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 690,
            "y": 765
        },
        "S^;T8WKp8]gvMJ3JK$XU": {
            "id": "S^;T8WKp8]gvMJ3JK$XU",
            "opcode": "sensing_askandwait",
            "inputs": {
                "QUESTION": {
                    "name": "QUESTION",
                    "block": "?.)3|Qko=Jf`dJ7.`ROa",
                    "shadow": "?.)3|Qko=Jf`dJ7.`ROa"
                }
            },
            "fields": {},
            "next": "|{(]oyI?:6NDbhzS^o?^",
            "topLevel": false,
            "parent": "#HEy)#iLvXNo8YNyu}lj",
            "shadow": false
        },
        "?.)3|Qko=Jf`dJ7.`ROa": {
            "id": "?.)3|Qko=Jf`dJ7.`ROa",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "SPEED"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "S^;T8WKp8]gvMJ3JK$XU",
            "shadow": true
        },
        "|{(]oyI?:6NDbhzS^o?^": {
            "id": "|{(]oyI?:6NDbhzS^o?^",
            "opcode": "control_if",
            "inputs": {
                "CONDITION": {
                    "name": "CONDITION",
                    "block": "B~-OpOL6$.FooQYYbl`T",
                    "shadow": null
                },
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "v2Hp.aKBaF:7Z`;Nt}(b",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "S^;T8WKp8]gvMJ3JK$XU",
            "shadow": false
        },
        "B~-OpOL6$.FooQYYbl`T": {
            "id": "B~-OpOL6$.FooQYYbl`T",
            "opcode": "operator_not",
            "inputs": {
                "OPERAND": {
                    "name": "OPERAND",
                    "block": "1_X=Y0t}ipRt4;0F09(R",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "|{(]oyI?:6NDbhzS^o?^",
            "shadow": false
        },
        "1_X=Y0t}ipRt4;0F09(R": {
            "id": "1_X=Y0t}ipRt4;0F09(R",
            "opcode": "operator_equals",
            "inputs": {
                "OPERAND1": {
                    "name": "OPERAND1",
                    "block": "E8V:U0Ee*11H{RxVbNRA",
                    "shadow": "w;wqZLn,,3mM8FaMf3t)"
                },
                "OPERAND2": {
                    "name": "OPERAND2",
                    "block": "~WB0,a[t:e^}6)SSxVOQ",
                    "shadow": "~WB0,a[t:e^}6)SSxVOQ"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "B~-OpOL6$.FooQYYbl`T",
            "shadow": false
        },
        "E8V:U0Ee*11H{RxVbNRA": {
            "id": "E8V:U0Ee*11H{RxVbNRA",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "1_X=Y0t}ipRt4;0F09(R",
            "shadow": false
        },
        "w;wqZLn,,3mM8FaMf3t)": {
            "id": "w;wqZLn,,3mM8FaMf3t)",
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
            "parent": "1_X=Y0t}ipRt4;0F09(R",
            "shadow": true
        },
        "~WB0,a[t:e^}6)SSxVOQ": {
            "id": "~WB0,a[t:e^}6)SSxVOQ",
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
            "parent": "1_X=Y0t}ipRt4;0F09(R",
            "shadow": true
        },
        "v2Hp.aKBaF:7Z`;Nt}(b": {
            "id": "v2Hp.aKBaF:7Z`;Nt}(b",
            "opcode": "procedures_call",
            "inputs": {
                "=1$+Zb?drLzmz%_KLti?": {
                    "name": "=1$+Zb?drLzmz%_KLti?",
                    "block": "XuxrI9Pjk)p,p]Nk/y@P",
                    "shadow": "XuxrI9Pjk)p,p]Nk/y@P"
                },
                "_1N{(K9IA2Kmt/pTWi,a": {
                    "name": "_1N{(K9IA2Kmt/pTWi,a",
                    "block": "lk$}(GMn}R$4*u8shNHZ",
                    "shadow": "^xjz4^uNz5cWghNeu=vO"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "|{(]oyI?:6NDbhzS^o?^",
            "shadow": false,
            "mutation": {
                "tagName": "mutation",
                "children": [],
                "proccode": "set %s %s",
                "argumentids": "[\"=1$+Zb?drLzmz%_KLti?\",\"_1N{(K9IA2Kmt/pTWi,a\"]",
                "warp": "true"
            }
        },
        "XuxrI9Pjk)p,p]Nk/y@P": {
            "id": "XuxrI9Pjk)p,p]Nk/y@P",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "speed"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "v2Hp.aKBaF:7Z`;Nt}(b",
            "shadow": true
        },
        "lk$}(GMn}R$4*u8shNHZ": {
            "id": "lk$}(GMn}R$4*u8shNHZ",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "v2Hp.aKBaF:7Z`;Nt}(b",
            "shadow": false
        },
        "^xjz4^uNz5cWghNeu=vO": {
            "id": "^xjz4^uNz5cWghNeu=vO",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "1"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "v2Hp.aKBaF:7Z`;Nt}(b",
            "shadow": true,
            "x": "849.8333329094779",
            "y": "1072.2592592592591"
        },
        "SEhK69`!n}PO,8^:b3zm": {
            "id": "SEhK69`!n}PO,8^:b3zm",
            "opcode": "event_whenkeypressed",
            "inputs": {},
            "fields": {
                "KEY_OPTION": {
                    "name": "KEY_OPTION",
                    "value": "h"
                }
            },
            "next": "F!;O1Gcc+P$e:JaeDo(v",
            "topLevel": true,
            "parent": null,
            "shadow": false,
            "x": 1092,
            "y": 762
        },
        "F!;O1Gcc+P$e:JaeDo(v": {
            "id": "F!;O1Gcc+P$e:JaeDo(v",
            "opcode": "sensing_askandwait",
            "inputs": {
                "QUESTION": {
                    "name": "QUESTION",
                    "block": "eO.@q9ROT-Y/`IR8+?xE",
                    "shadow": "eO.@q9ROT-Y/`IR8+?xE"
                }
            },
            "fields": {},
            "next": "yD.O8N9;I(tMdyE/v]/V",
            "topLevel": false,
            "parent": "SEhK69`!n}PO,8^:b3zm",
            "shadow": false
        },
        "eO.@q9ROT-Y/`IR8+?xE": {
            "id": "eO.@q9ROT-Y/`IR8+?xE",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "JUMP"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "F!;O1Gcc+P$e:JaeDo(v",
            "shadow": true
        },
        "yD.O8N9;I(tMdyE/v]/V": {
            "id": "yD.O8N9;I(tMdyE/v]/V",
            "opcode": "control_if",
            "inputs": {
                "CONDITION": {
                    "name": "CONDITION",
                    "block": "Nt7+9Uf(:]4K7!?9TfyJ",
                    "shadow": null
                },
                "SUBSTACK": {
                    "name": "SUBSTACK",
                    "block": "-%|K*Y}3M8Ru{+:KPolQ",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "F!;O1Gcc+P$e:JaeDo(v",
            "shadow": false
        },
        "Nt7+9Uf(:]4K7!?9TfyJ": {
            "id": "Nt7+9Uf(:]4K7!?9TfyJ",
            "opcode": "operator_not",
            "inputs": {
                "OPERAND": {
                    "name": "OPERAND",
                    "block": "Vsf8/!92]pAc):*;XES~",
                    "shadow": null
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "yD.O8N9;I(tMdyE/v]/V",
            "shadow": false
        },
        "Vsf8/!92]pAc):*;XES~": {
            "id": "Vsf8/!92]pAc):*;XES~",
            "opcode": "operator_equals",
            "inputs": {
                "OPERAND1": {
                    "name": "OPERAND1",
                    "block": "FNf7G)Y,[;hzV?UyY3*}",
                    "shadow": "}fLZpb2W??wQ*pt]lZvK"
                },
                "OPERAND2": {
                    "name": "OPERAND2",
                    "block": "jxR^~W%G757A$(n_g^5p",
                    "shadow": "jxR^~W%G757A$(n_g^5p"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "Nt7+9Uf(:]4K7!?9TfyJ",
            "shadow": false
        },
        "FNf7G)Y,[;hzV?UyY3*}": {
            "id": "FNf7G)Y,[;hzV?UyY3*}",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "Vsf8/!92]pAc):*;XES~",
            "shadow": false
        },
        "}fLZpb2W??wQ*pt]lZvK": {
            "id": "}fLZpb2W??wQ*pt]lZvK",
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
            "parent": "Vsf8/!92]pAc):*;XES~",
            "shadow": true
        },
        "jxR^~W%G757A$(n_g^5p": {
            "id": "jxR^~W%G757A$(n_g^5p",
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
            "parent": "Vsf8/!92]pAc):*;XES~",
            "shadow": true
        },
        "-%|K*Y}3M8Ru{+:KPolQ": {
            "id": "-%|K*Y}3M8Ru{+:KPolQ",
            "opcode": "procedures_call",
            "inputs": {
                "=1$+Zb?drLzmz%_KLti?": {
                    "name": "=1$+Zb?drLzmz%_KLti?",
                    "block": "tC?/3)2[7I[$u-%i)K!V",
                    "shadow": "tC?/3)2[7I[$u-%i)K!V"
                },
                "_1N{(K9IA2Kmt/pTWi,a": {
                    "name": "_1N{(K9IA2Kmt/pTWi,a",
                    "block": "?QSVRC7l1t,a-%+;gLoq",
                    "shadow": "kHrxw6=8jGHkuo_N05at"
                }
            },
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "yD.O8N9;I(tMdyE/v]/V",
            "shadow": false,
            "mutation": {
                "tagName": "mutation",
                "children": [],
                "proccode": "set %s %s",
                "argumentids": "[\"=1$+Zb?drLzmz%_KLti?\",\"_1N{(K9IA2Kmt/pTWi,a\"]",
                "warp": "true"
            }
        },
        "tC?/3)2[7I[$u-%i)K!V": {
            "id": "tC?/3)2[7I[$u-%i)K!V",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "jump"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "-%|K*Y}3M8Ru{+:KPolQ",
            "shadow": true
        },
        "?QSVRC7l1t,a-%+;gLoq": {
            "id": "?QSVRC7l1t,a-%+;gLoq",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "-%|K*Y}3M8Ru{+:KPolQ",
            "shadow": false
        },
        "kHrxw6=8jGHkuo_N05at": {
            "id": "kHrxw6=8jGHkuo_N05at",
            "opcode": "text",
            "inputs": {},
            "fields": {
                "TEXT": {
                    "name": "TEXT",
                    "value": "1"
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "-%|K*Y}3M8Ru{+:KPolQ",
            "shadow": true
        }
    };
    for (let i in code) {
        vm.runtime.targets[1].blocks.createBlock(code[i]);
    };
    vm.runtime.requestBlocksUpdate();
    let loaded = false;
    vm.on("PROJECT_START", ()=> {
        if (!loaded)
            broadcast("LOAD");
        broadcast("START");
        loaded = true;
    });
    if (vm.runtime.threads.length > 0) {
        loaded = true;
        broadcast("LOAD");
        broadcast("START");
    }
    setInterval(()=>{setlocal("Game","clock",1)},0);
    window.tp = function(p) {
        p=p.toUpperCase();
        let plrs = vm.runtime.targets[4].sprite.clones;
        for (let i in plrs) {
            if (plrs[i].variables["%?ot.iQuUk5;BfW32u|W"].value == p) {
                setglobal("@Player X",plrs[i].variables["H-gkN?L}J=ux?r5Vo0$;"].value);
                setglobal("@Player Y",plrs[i].variables["`.;Ijcd,m^fJNIuTKXUr"].value)
            }
        }
    }
    const CONFIG = {speed:1, jump:1};
    restoreop("procedures_call");
    hookop("procedures_call", old => {
        return function (b, th) {
            try {
                let cargs = JSON.parse(b.mutation.argumentids);
                let args = [];
                for (let i of cargs) {
                    args.push(b[i]);
                };
                if (th.thread.target.getName() === "Blank" && b.mutation.proccode === "set %s %s") { // block used for communication
                    CONFIG[args[0]] = args[1];
                } else if (th.thread.target.getName() === "Game" && b.mutation.proccode.includes("accelerate")) {
                    b[cargs[0]] *= Number(CONFIG.speed) || 1;
                }
            } catch (e) {}
            return old.apply(this, arguments)
        }
    });
    restoreop("data_setvariableto");
    hookop("data_setvariableto", old => {
        const jumps = new WeakMap; // this isn't here for caching its bc if i set b.VALUE to x2 value then it will stay like that (if its constant value) which is bad
        return function (b, th) {
            if (b.VARIABLE.name === "@Player SY" && th.thread.target.getName() === "Game") {
                try {
                    if (jumps.has(b)) {
                        b.VALUE = jumps.get(b) * (Number(CONFIG.jump) || 1);
                    } else if ((b.VALUE == 10 || b.VALUE == 14 || b.VALUE == 17) && getglobal("@Player Mode") !== "Parachute" && !jumps.has(b)) {
                        jumps.set(b, b.VALUE);
                        b.VALUE *= Number(CONFIG.jump) || 1;
                    }
                } catch (e) {}
            }
            return old.apply(this, arguments);
        }
    });
    vm.runtime.requestBlocksUpdate();
})();