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
                    console.log(e.target,e.target.files)
                    const files = e.target.files;
                    Array.from(files).forEach(file=>{
                        const reader = new FileReader;
                        reader.onload = ()=>{
                            vm.addSprite(reader.result);
                        }
                        reader.readAsArrayBuffer(file);
                    });
                }
                spritefile.click();
                break;
            case "injectJS":
                jsfile.onchange = function(e){
                    const files = e.target.files;
                    Array.from(files).forEach(file=>{
                        const reader = new FileReader;
                        reader.onload = ()=>{
                            eval(reader.result);
                        }
                        reader.readAsText(file);
                    });
                }
                jsfile.click();
                break;
        }
    });
})();
