(()=>{
    restore(vm.runtime._primitives,"sensing_username");
    hookp(vm.runtime._primitives,"sensing_username",{
        apply(f, th, args) {
            let ret = Reflect.apply(f, th, args);
            return ret + "griffpatch"; // bypasses anticheat (yes it actually exists and is running on other players devices)
        }
    });
    vm.runtime.targets.forEach(v=>v.blocks.resetCache());
})();