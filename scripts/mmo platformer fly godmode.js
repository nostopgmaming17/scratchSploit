(()=>{
    vm.runtime.targets[1].createVariable("$speed","speed","");
    const code = {
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
            "shadow": false,
            "x": 78.40740740740742,
            "y": 459.25925925925924
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
            "shadow": true,
            "x": "621.8746190954138",
            "y": "382.74074074074076"
        },
        "aWo|Hf!?tV46W;R~og{I": {
            "id": "aWo|Hf!?tV46W;R~og{I",
            "opcode": "data_variable",
            "inputs": {},
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "$SPEED",
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
            "shadow": true,
            "x": "728.5699315954138",
            "y": "382.74074074074076"
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
            "shadow": true,
            "x": "699.9486931694881",
            "y": "114.14814814814821"
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
            "shadow": true,
            "x": "509.7264709472656",
            "y": "478"
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
            "shadow": true,
            "x": "485.5783227991175",
            "y": "728.2222222222222"
        },
        "sCyd:%jS}L|{JbDggbPn": {
            "id": "sCyd:%jS}L|{JbDggbPn",
            "opcode": "data_variable",
            "inputs": {},
            "fields": {
                "VARIABLE": {
                    "name": "VARIABLE",
                    "id": "$SPEED",
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
            "shadow": true,
            "x": "557.7264709472656",
            "y": "609.2592592592592"
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
            "shadow": true,
            "x": "406.24131944444434",
            "y": "614.2222222222236"
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
            "shadow": true,
            "x": "509.7264709472656",
            "y": "542"
        },
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
                    "value": "SPEED"
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
            "shadow": true,
            "x": "165.3333333333331",
            "y": "441.3333333333348"
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
                    "id": "$SPEED",
                    "value": "speed",
                    "variableType": ""
                }
            },
            "next": null,
            "topLevel": false,
            "parent": "KHQXV#0TH~w6hXD@D_Li",
            "shadow": false,
            "x": 387.96296296296293,
            "y": 936.1111111111112
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
            "topLevel": true,
            "parent": null,
            "shadow": true,
            "x": 467.93745422363276,
            "y": 945
        },
        "}6b1lY{Mj`#m=4XpLqTB": {
            "id": "}6b1lY{Mj`#m=4XpLqTB",
            "opcode": "sensing_answer",
            "inputs": {},
            "fields": {},
            "next": null,
            "topLevel": false,
            "parent": "W;}^}`bUU,%+#3jUm#],",
            "shadow": false,
            "x": 494.92592592592575,
            "y": 971.2592592592591
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
            "shadow": false,
            "x": 93.48148148148124,
            "y": 602.1729374638364
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
            "shadow": false,
            "x": 278.66666666666663,
            "y": 410.0741644965455
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
        }
    };
    for (let i in code) {
        vm.runtime.targets[1].blocks._blocks[i] = code[i]
    };
    vm.runtime.targets[1].blocks._scripts.push(
        "=}zEiv0%M:$Vpy94U[I5",
        ")fb3dsGGEt_}3I|;EuDY",
        "T`h6QjXtV`cB?1z4M:rF",
        "Z5.G1buNEo}d$9N%]JeQ"
    );
    let firstload = false;
    vm.on("PROJECT_START", ()=> {
        if (!firstload) broadcast("LOAD");
        firstload = true;
        broadcast("START");
    });
    setInterval(()=>{setlocal("Game","clock",1)},0);
    window.tp = function(p) {
        let plrs = vm.runtime.targets[4].sprite.clones;
        for (let i in plrs) {
            if (plrs[i].variables["%?ot.iQuUk5;BfW32u|W"].value == p) {
                setglobal("@Player X",plrs[i].variables["H-gkN?L}J=ux?r5Vo0$;"].value);
                setglobal("@Player Y",plrs[i].variables["`.;Ijcd,m^fJNIuTKXUr"].value)
            }
        }
    }
})()