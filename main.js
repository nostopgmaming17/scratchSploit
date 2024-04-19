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
    const getnative = function(o,n) {
        let f = o[n];
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
                    console.log("%cSuccessfully logged VM & Have fun trolling and shit", "color: #ff4d36; font-size:200%");
                    vm = args[0];
                    window.vm = vm;
                    Function.prototype.bind = f;
                }
            }catch(e){}
            return reflect.apply(f, th, args);
        }
    });
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
        for (let i in vm.runtime.targets[0].variables) {
            if (vm.runtime.targets[0].variables[i].name == n) {
                return vm.setVariableValue(vm.runtime.targets[0].id,i,v)
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
                vm.setVariableValue(spr.id,id,v);
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
        th.stack[0] = null;
        thread.thread = th;
        thread.sequencer = vm.runtime.sequencer;
        getnative(vm.runtime._primitives,"procedures_call")(o,thread);
        return th;
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