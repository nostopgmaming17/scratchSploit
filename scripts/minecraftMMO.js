vm.runtime.ioDevices.userData._username="griffpatch"
window.getglobal2 = function(n) {
    var z = false;
    for(let i in vm.runtime.targets[0].variables) {
        if (vm.runtime.targets[0].variables[i].name == n) {
            z = vm.runtime.targets[0].variables[i].value; 
        }
    }
    return z;
};
window.setglobal = function(n,v) {
    var v = null;
    for (let i in vm.runtime.targets[0].variables) {
        if (vm.runtime.targets[0].variables[i].name == n) {
            v = i;
        }
    }
    if (v != null) {
        return vm.setVariableValue(vm.runtime.targets[0].id,v,v);
    }
    return false
};
let JUMP = false;
document.addEventListener("keydown",k=>{
    if (k.key=="w") {
        JUMP=true;
    }
})
document.addEventListener("keyup",k=>{
    if (k.key=="w") {
        JUMP=false;
    }
})
setInterval(()=>{
    let inv = getglobal("INV");
    let invC = getglobal("INV #");
    if (JUMP) {
        setlocal("Player","speed y",15);
    }
    inv[0]=117;
    invC[0]=69;
},10)