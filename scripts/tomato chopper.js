(() => {
    vm.runtime.targets[1].isTouchingColor = () => false;
    setInterval(() => {
        let C = vm.runtime.targets[1].sprite.clones;
        for (let i in C) {
            if (C[i].getCurrentCostume().name == "Tomato") {
                //console.log(i,C[i]);
                C[i].isTOuchingColor = () => true;
            }
        }
    }, 100);
})()