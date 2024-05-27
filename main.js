(function() {
    "use strict";
    console.log("Loaded main");
    (()=>{
        const i = setInterval(()=>{
            try{
                vm.runtime.on("ANSWER",A=>window.ANSWER=A);
                clearInterval(i);
            }catch(e){}
        },100);
    })();
    const spritefile = document.createElement("input");
    spritefile.type = "file";
    const jsfile = document.createElement("input");
    jsfile.type = "file";
    document.addEventListener("ScratchSploitMessage",e=>{
        const req = e.detail;
        switch(req.type) {
            case "spoofUser":
                vm.runtime.ioDevices.userData._username = req.value;
                break;
            case "injectSprite":
                spritefile.onchange = function(e){
                    const stream = e.target.files[0].stream();
                    const reader = stream.getReader();
                    reader.read().then(v=>{
                        reader.releaseLock();
                        vm.addSprite(v.value);
                    }).catch(e=>{
                        reader.releaseLock();
                    });
                }
                spritefile.click();
                break;
            case "injectJS":
                jsfile.onchange = function(e){
                    const stream = e.target.files[0].stream();
                    const reader = stream.getReader();
                    reader.read().then(v=>{
                        reader.releaseLock();
                        eval(String.fromCharCode(...Array.from(v.value)));
                    }).catch(e=>{
                        reader.releaseLock();
                    });
                }
                jsfile.click();
                break;
        }
    });
})();
