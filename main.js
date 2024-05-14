(function() {
    "use strict";
    console.log("Loaded");
    const proxy = Proxy;
    const reflect = {};
    for(let k of Object.getOwnPropertyNames(Reflect)) {
        reflect[k] = Reflect[k];
    }
    let vm;
    const spoof = new WeakMap;
    const hook = function(o,n,f){
        const old = o[n];
        const cb = f(old);
        spoof.set(cb,old);
        Object.defineProperty(cb,"name",{
            value: old.name
        });
        o[n] = cb;
    }
    const hookp = function(o,n,h) {
        const p = new proxy(o[n],h);
        spoof.set(p,o[n]);
        o[n] = p;
    }
    const restore = function(o,n) {
        let f = o[n];
        if (!spoof.has(f)) return false;
        while (true) {
            if (!spoof.has(f))
                break;
            f = spoof.get(f);
        }
        o[n] = f;
        return f;
    }
    const getnative = function(f) {
        while (true) {
            if (!spoof.has(f))
                break;
            f = spoof.get(f);
        }
        return f;
    }
    window.hook = hook;
    window.hookp = hookp;
    window.restore = restore;
    window.getnative = getnative;
    hookp(Function.prototype,"bind",{
        apply(f, th, args) {
            try{
                if (args[0].runtime != null && args[0].hasOwnProperty("editingTarget")) {
                    console.log("%cSuccessfully logged VM & Have fun trolling and shit (Extension)", "color: #ff4d36; font-size:200%");
                    vm = args[0];
                    window.vm = vm;
                    Function.prototype.bind = f;
                }
            }catch(e){}
            return reflect.apply(f, th, args);
        }
    });
    vm = document.getElementById('app')?._reactRootContainer?._internalRoot?.current?.child?.pendingProps?.store?.getState()?.scratchGui?.vm;
    if (vm != null) {
        console.log("%cSuccessfully logged VM & Have fun trolling and shit (Unpack extension to auto-inject)", "color: #ff4d36; font-size:200%");
        restore(Function.prototype,"bind");
        window.vm = vm;
    }
    hookp(Function.prototype,"toString", {
        apply(f, th, args) {
            return reflect.apply(f, spoof.get(th)||th, args);
        }
    });
    (()=>{
        const accessor = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype,"response");
        Object.defineProperty(XMLHttpRequest.prototype,"response",{
            get() {
                try{
                    if (this.url.endsWith("/session/")) {
                        const r = accessor.get.call(this);
                        try{
                            if (r.permissions != null) {
                                r.permissions.new_scratcher = false;
                                r.permissions.scratcher = true;
                                r.user.banned = false;
                                return r;
                            }
                        }catch(e){}
                    }
                } catch(e) {}
                return accessor.get.call(this);
            }
        });
        const m = new WeakMap;
        Object.defineProperty(Object.prototype,"thread",{
            get() {
                return m.get(this);
            },
            set(v) {
                if (Reflect.getOwnPropertyDescriptor(this,"sequencer") !== undefined && window.thread != this) {
                    window.thread = this;
                }
                return m.set(this, v);
            }
        })
    })();
    window.sleep = async ms => {
        return new Promise(resolve => setTimeout(resolve,ms));
    }
    window.cloudSymbol = "☁";
    window.getRectSize = function() {
        let c = vm.renderer.canvas;
        return [c.width,c.height];
    };
    window.getTarget = function() {
        let x = vm.runtime.ioDevices.mouse._clientX,
            y = vm.runtime.ioDevices.mouse._clientY;
        let id = vm.renderer.pick(x,y);
        for (let i = 0; i < vm.runtime.targets.length; i++) {
            let s = vm.runtime.targets[i];
            if (s.drawableID == id) {
                return s;
            };
        };
    };
    window.getsprite = function(n) {
        return vm.runtime.targets[getspriteid(n)];
    };
    window.getspriteid = function(n) {
        for (let i in vm.runtime.targets) {
            if (vm.runtime.targets[i].getName() == n) {
                return i;
            };
        };
    };
    window.setglobal = function(n,v) {
        for (let id in vm.runtime.targets[0].variables) {
            if (vm.runtime.targets[0].variables[id].name == n) {
                const V = vm.runtime.targets[0].variables[id];
                if (V.isCloud)
                    vm.runtime.ioDevices.cloud.requestUpdateVariable(V.name,v);
                V.value = v;
                return true;
            }
        }
        return false
    };
    window.getglobal = function(n) {
        for(let i in vm.runtime.targets[0].variables) {
            if (vm.runtime.targets[0].variables[i].name == n) {
                return vm.runtime.targets[0].variables[i].value;
            }
        }
        return false
    };
    window.setlocal = function(s,n,v) {
        let spr;
        if (typeof s == "string") {
            spr = getsprite(s);
        } else {
            spr = s;
        };
        for (let id in spr.variables) {
            if (spr.variables[id].name == n) {
                spr.variables[id].value = v;
                return true;
            };
        };
        return false
    };
    window.getlocal = function(s,n) {
        let spr;
        if (typeof s == "string") {
            spr = getsprite(s);
        } else {
            spr = s;
        }; 
        for (let id in spr.variables) {
            if (spr.variables[id].name == n) {
                return spr.variables[id].value;
            };
        };
        return false;
    };
    window.getlocals = function(s) {
        let spr;
        if (typeof s == "string")
            spr = getsprite(s);
        else
            spr = s;
        let l = [];
        for(let i in spr.variables) {
            l.push(spr.variables[i].name);
        }
        return l;
    }
    window.getglobals = function() {
        let spr = vm.runtime.targets[0]
        let l = [];
        for(let i in spr.variables) {
            l.push(spr.variables[i].name);
        }
        return l;
    }
    window.getid = function(n) {
        for(let i in vm.runtime.targets[0].variables) {
            if (vm.runtime.targets[0].variables[i].name == n) {return i}
        }
        return false
    };
    window.getlocalid = function(s,n) {
        let spr;
        if (typeof(s) == "string") {
            spr = getsprite(s);
        } else {
            spr = s;
        };
        for (let id in spr.variables) {
            if (spr.variables[id].name == n) {return id};
        };
        return false;
    };
    window.showvariable = function(n,s) {
        return variablevisible(n,s,true);
    };
    window.hidevariable = function(n,s) {
        return variablevisible(n,s,false);
    };
    window.variablevisible = function(n,s,v) {
        let id = getlocalid(s || "Stage",n)
        vm.runtime.monitorBlocks.changeBlock({id:id,element:"checkbox",value:v},vm.runtime);
        return id;
    };
    window.key = function(k,d) {
        vm.postIOData("keyboard", {
            key: k,
            isDown: d
        })
    };
    window.mouse = function(C) {
        if (!C) {
            let d = vm.runtime.ioDevices.mouse._isDown,
                x = vm.runtime.ioDevices.mouse._scratchX,
                y = vm.runtime.ioDevices.mouse._scratchY;
            return {
                d: d,
                D: d,
                down: d,
                x: x,
                X: x,
                y: y,
                Y: y
            }
        }
        let s = getRectSize();
        let x = C.x || C.X || vm.runtime.ioDevices.mouse._scratchX,
            y = C.y || C.Y || vm.runtime.ioDevices.mouse._scratchY,
            d = C.down || C.d || C.D || vm.runtime.ioDevices.mouse._isDown;
        vm.postIOData("mouse",{
            x: x,
            y: y,
            isDown: d,
            canvasWidth: s[0],
            canvasHeight: s[1]
        });
        if (d) {
            let t = getTarget();
            vm.runtime.startHats("event_whenthisspriteclicked", null, t);
            vm.runtime.startHats("event_whenstageclicked", null, t);
        };
    };
    window.broadcast = function(name) {
        vm.runtime.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:name})
    };
    window.say = function(s, msg) {
        let spr = s;
        if (typeof(s) == "string") {
            spr = getsprite(spr);
        }
        vm.runtime.emit("SAY",spr,"say",msg);
    };
    window.think = function(s, msg) {
        let spr = s;
        if (typeof(s) == "string") {
            spr = getsprite(spr);
        }
        vm.runtime.emit("SAY",spr,"think",msg);
    };
    window.ANSWER = "";
    window.ask = async function(question) {
        vm.runtime.emit("QUESTION",question);
        let a = null;
        let e = vm.runtime.on("ANSWER",(A)=>{a=A})
        let l = e._events.ANSWER.length;
        while (a == null) {await new Promise(resolve => setTimeout(resolve, 100));};
        e._events.ANSWER.pop(l);
        return a;
    };
    /*
    opcodes:
        opcode compare (ex: data_setvariableto)
        input (ex: input.substack)
        goto (number of block it went over already)
        = (any opcode)
        * (skips down until it finds the block specified in next opcode)
        ^ (parent)
        *^ (skips up until it finds the block specified in next opcode)
        none (no block)
    */
    window.patternscan = function(_sprite,opcodes) { // example for opcodes: ["control_if_else","input.condition","operator_gt","input.operand1","data_variable",0,"input.substack","control_if","input.substack","data_addtolist"]
        const sprite = typeof(_sprite)=="object"?_sprite:getsprite(_sprite);
        const blocks = sprite.blocks._blocks;
        let ret = [];
        for (let id in blocks) {
            const block = blocks[id];
            let cblock = block;
            let match = true;
            const blockA = [];
            for (let i = 0; i < opcodes.length; i++) {
                if (typeof(opcodes[i]) == "string" && !opcodes[i].toLowerCase().startsWith("input.") && opcodes[i] != "*" && opcodes[i] != "*^" && opcodes[i] != "none") blockA.push(cblock);
                if (opcodes[i] == "^") {
                    cblock = blocks[cblock.parent];
                    continue;
                }
                if (cblock == null) {
                    if (opcodes[i] != "none")
                        match = false;
                    break;
                }
                if (opcodes[i] == "*") {
                    let found = false;
                    let lastblock;
                    while(true) {
                        if (cblock == null) {
                            if (opcodes[i+1] == "none")
                                found = true;
                            cblock = lastblock;
                            break;
                        }
                        if (opcodes[i+1] != "=" && opcodes[i+1] != "none" && cblock.opcode == opcodes[i+1]) {
                            found = true;
                            break;
                        }
                        lastblock = cblock;
                        cblock = blocks[cblock.next];
                    }
                    if (found) {
                        blockA.push(cblock);
                        i++;
                        if (typeof(opcodes[i+1]) == "string" && opcodes[i+1].toLowerCase().startsWith("input.")) {
                            const inp = opcodes[i + 1].substr(6);
                            if (cblock == null) {
                                match = false;
                                break;
                            }
                            if (cblock.inputs[inp.toUpperCase()] != null) {
                                cblock = blocks[cblock.inputs[inp.toUpperCase()].block];
                                i++;
                                continue;
                            } else if (cblock.inputs[inp.toLowerCase()] != null) {
                                cblock = blocks[cblock.inputs[inp.toLowerCase()].block];
                                i++;
                                continue;
                            } else if (cblock.inputs[inp] != null) {
                                cblock = blocks[cblock.inputs[inp].block];
                                i++;
                                continue;
                            }
                            match = false;
                            break;
                        } else if (opcodes[i+1] == "^") {
                            i++;
                            cblock = blocks[cblock.parent];
                        } else if (opcodes[i+1] != "*" && opcodes[i+1] != "*^")
                            cblock = blocks[cblock.next];
                        continue;
                    } else {
                        match = false;
                        break;
                    }
                } else if (opcodes[i] == "*^") {
                    let found = false;
                    let lastblock;
                    while(true) {
                        if (cblock == null) {
                            if (opcodes[i+1] == "none")
                                found = true;
                            cblock = lastblock;
                            break;
                        }
                        if (opcodes[i+1] != "=" && opcodes[i+1] != "none" && cblock.opcode == opcodes[i+1]) {
                            found = true;
                            break;
                        }
                        lastblock = cblock;
                        cblock = blocks[cblock.parent];
                    }
                    if (found) {
                        blockA.push(cblock);
                        i++;
                        if (typeof(opcodes[i+1]) == "string" && opcodes[i+1].toLowerCase().startsWith("input.")) {
                            const inp = opcodes[i + 1].substr(6);
                            if (cblock == null) {
                                match = false;
                                break;
                            }
                            if (cblock.inputs[inp.toUpperCase()] != null) {
                                cblock = blocks[cblock.inputs[inp.toUpperCase()].block];
                                i++;
                                continue;
                            } else if (cblock.inputs[inp.toLowerCase()] != null) {
                                cblock = blocks[cblock.inputs[inp.toLowerCase()].block];
                                i++;
                                continue;
                            } else if (cblock.inputs[inp] != null) {
                                cblock = blocks[cblock.inputs[inp].block];
                                i++;
                                continue;
                            }
                            match = false;
                            break;
                        } else if (opcodes[i+1] == "^") {
                            i++;
                            cblock = blocks[cblock.parent];
                        } else if (opcodes[i+1] != "*" && opcodes[i+1] != "*^")
                            cblock = blocks[cblock.next];
                        continue;
                    } else {
                        match = false;
                        break;
                    }
                }
                if (typeof(opcodes[i]) == "string" && opcodes[i] != "=" && cblock.opcode != opcodes[i]) {
                    match = false;
                    break;
                }
                if (i + 1 == opcodes.length)
                    break;
                if (typeof(opcodes[i+1]) == "string" && opcodes[i+1].toLowerCase().startsWith("input.")) {
                    const inp = opcodes[i + 1].substr(6);
                    if (cblock == null) {
                        match = false;
                        break;
                    }
                    if (cblock.inputs[inp.toUpperCase()] != null) {
                        cblock = blocks[cblock.inputs[inp.toUpperCase()].block];
                        i++;
                        continue;
                    } else if (cblock.inputs[inp.toLowerCase()] != null) {
                        cblock = blocks[cblock.inputs[inp.toLowerCase()].block];
                        i++;
                        continue;
                    } else if (cblock.inputs[inp] != null) {
                        cblock = blocks[cblock.inputs[inp].block];
                        i++;
                        continue;
                    }
                    match = false;
                    break;
                } else if (typeof (opcodes[i + 1]) == "number") {
                    cblock = blockA[opcodes[i + 1]];
                    continue;
                }
                if (opcodes[i+1] != "*" && opcodes[i+1] != "*^")
                    cblock = blocks[cblock.next];
            }
            if (match)
                ret.push(blockA);
        }
        return ret;
    }
    window.varbyid = function(id) {
        for (let i=0;i<vm.runtime.targets.length;i++) {
            const target = vm.runtime.targets[i];
            for (let v in target.variables) {
                if (v == id)
                    return target.variables[v];
            }
        }
    }
    window.runfunc = function(target,name,args) {
        if (arguments.length < 3) return;
        const def = target.blocks._blocks[target.blocks._cache.procedureDefinitions[name]] || target.blocks._blocks[target.blocks.getProcedureDefinition(name)];
        const pro = target.blocks._blocks[def.inputs.custom_block.block];
        const mut = pro.mutation;
        const cargs = JSON.parse(mut.argumentids);
        const o = {
            mutation: {
                argumentids: mut.argumentids,
                children: [],
                proccode: name,
                tagName: "mutation",
                warp: mut.warp
            }
        }
        for(let i=0;i<cargs.length;i++){
            o[cargs[i]] = args[i];
        }
        const th = vm.runtime._pushThread(def.id,target);
        hookp(th,"popStack",{
            apply(f, self, args) {
                delete self.popStack;
                if (self.stack.length == 2)
                    Reflect.apply(f, th, args);
                return Reflect.apply(f, th, args);
            }
        });
        thread.thread = th;
        thread.sequencer = vm.runtime.sequencer;
        getnative(vm.runtime._primitives.procedures_call)(o,thread);
        return th;
    };
    window.getparam = function(th, name) {
        return th.getParam(name);
    };
    window.setparam = function(th, name, value) {
        for(let i=th.stackFrames.length-1;i>=0;i--) {
            if (th.stackFrames[i].params != null)
                return th.stackFrames[i].params[name] != null ? (th.stackFrames[i].params[name] = value,true) : false;
        }
    };
    window.getcallstack = function(th) {
        for(let i=th.stackFrames.length-1;i>=0;i--) {
            if (th.stackFrames[i].params != null)
                return th.stackFrames[i];
        }
    };
    (()=>{
        const i = setInterval(()=>{
            try{
                vm.runtime.on("ANSWER",A=>window.ANSWER=A);
                clearInterval(i);
            }catch(e){}
        },100);
    })();
})();