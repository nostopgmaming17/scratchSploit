var code = '(' + function() {
    console.log("Loaded");
    const old = Function.prototype.bind;
    let vm;
    const bind = function(...args) {
        if (this == console.log) {return old.apply(this,args)};
        //console.log((args[0]+'').substr(0,1),args[0],(this+'').substr(0,1),this)
        if (Function.prototype.bind == old) {
            return old.apply(this,args)
        } else if (
            args[0]&&
            Object.prototype.hasOwnProperty.call(args[0],"runtime")&&
            Object.prototype.hasOwnProperty.call(args[0],"editingTarget")
            ) {
            console.warn("%cSuccessfully logged VM & Have fun trolling and shit","color: #ff4d36; font-size:200%");
            vm = args[0];
            vmcaller = this;
            window.vm = vm;
            window.vmcaller = vmcaller;
            Function.prototype.bind = old;
        }
        return old.apply(this,args)
    };
    Function.prototype.bind = bind;
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
            if (vm.runtime.targets[0].variables[i].name == n) {return vm.runtime.targets[0].variables[i].value}
        }
        return false
    };
    window.setlocal = function(s,n,v) {
        let sid;
        if (typeof(s) == "string") {
            sid = getspriteid(s);
        } else {
            for (let i in vm.runtime.targets) {
                if (vm.runtime.targets[i].getName() == s) sid = i;
            };
        };
        for (let id in vm.runtime.targets[sid].variables) {
            if (vm.runtime.targets[sid].variables[id].name == n) {vm.setVariableValue(vm.runtime.targets[sid].id,id,v);return true};
        };
        return false
    };
    window.getlocal = function(s,n) {
        let sid;
        if (typeof(s) == "string") {
            sid = getspriteid(s);
        } else {
            for (let i in vm.runtime.targets) {
                if (vm.runtime.targets[i].getName() == s) sid = i;
            };
        }; 
        for (let id in vm.runtime.targets[sid].variables) {
            if (vm.runtime.targets[sid].variables[id].name == n) {return vm.runtime.targets[sid].variables[id].value};
        };
        return false;
    };
    window.getid = function(n) {
        for(let i in vm.runtime.targets[0].variables) {
            if (vm.runtime.targets[0].variables[i].name == n) {return i}
        }
        return false
    };
    window.getlocalid = function(s,n) {
        let sid;
        if (typeof(s) == "string") {
            sid = getspriteid(s);
        } else {
            for (let i in vm.runtime.targets) {
                if (vm.runtime.targets[i].getName() == s) sid = i;
            };
        };
        for (let id in vm.runtime.targets[sid].variables) {
            if (vm.runtime.targets[sid].variables[id].name == n) {return id};
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
                x = vm.runtime.ioDevices.mouse._x,
                y = vm.runtime.ioDevices.mouse._y;
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
        let x = C.x || C.X || vm.runtime.ioDevices.mouse._x,
            y = C.y || C.Y || vm.runtime.ioDevices.mouse._y,
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
        let a = "";
        let e = vm.runtime.on("ANSWER",(A)=>{a=A})
        let l = e._events.ANSWER.length;
        while (a == "") {await new Promise(resolve => setTimeout(resolve, 100));};
        e._events.ANSWER.pop(l);
        return a;
    };
    setTimeout(()=>{
        vm.runtime.on("ANSWER",(a)=>window.ANSWER=a);
    },5000);

} + ')();'
var script = document.createElement('script')
script.textContent = (()=>{return code})()
document.documentElement.appendChild(script)
