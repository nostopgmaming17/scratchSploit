(()=>{
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
  }
  return result;
  }
  let vn = makeid(1000); // walls
  let vn2 = makeid(1000); // bombs
  let vid = makeid(1000);
  let vid2 = makeid(1000);

  getsprite("Player").createVariable(vid,vn,"");
  setlocal("Player",vn,9);
  getsprite("Player").createVariable(vid2,vn2,"");
  setlocal("Player",vn2,5);
  vm.runtime.ioDevices.userData._username = "griffpatch_is_homo";
  let P = 1013;
  let NOCLIP = false;
  window.addEventListener("keydown", k => {
    if (k.code == "KeyE") {
      if (P == 1013) {
        P = 1010;
      } else if (P == 1010) {
        P = 1011;
      } else if (P == 1011) {
        P = 1013;
      }
    } else if (k.code == "KeyQ") {
      setlocal("Player","mode",200)
    } else if (k.code == "KeyF") {
      NOCLIP = !NOCLIP;
      if (NOCLIP) {
        setlocal("Player",vn,0)
        setlocal("Player",vn2,0)
      } else {
        setlocal("Player",vn,9)
        setlocal("Player",vn2,5)
      }
    }
  });
  setInterval(()=>{
    setglobal("PowerBombs",10000);
    setglobal("PowerFire",100);
    setlocal("Player","Inactive",vm.runtime.ioDevices.clock.projectTimer());
    setlocal("Player","speed",5);
    setlocal("Player", "Power", P);
    let m = getlocal("Player","mode");
    if (m == 100 || m == 0) setlocal("Player","mode",1);
  }, 10);
  (()=>{
    let b = getsprite("Player").blocks._blocks;
    for (let i in b) {
      if (b[i].opcode == "data_setvariableto" && b[i].fields.VARIABLE.value == "solid") {
        let val = b[b[i].inputs.VALUE.block].fields.TEXT.value*1;
        if (val == 0) return;
        let bid = makeid(1000);
        if (val == 9) {
          b[bid] = {
            id:bid,
            inputs:{},
            next:null,
            opcode:"data_variable",
            parent:b[i].id,
            shadow:false,
            topLevel:false,
            x:b[i].x,
            y:b[i].y,
            fields:{
              VARIABLE:{
                name:"VARIABLE",
                value:vn,
                id:vid,
                variableType:""
              }
            }
          }
          b[i].inputs.VALUE.block = bid;
        } else if (val == 5) {
          b[bid] = {
            id:bid,
            inputs:{},
            next:null,
            opcode:"data_variable",
            parent:b[i].id,
            shadow:false,
            topLevel:false,
            x:b[i].x,
            y:b[i].y,
            fields:{
              VARIABLE:{
                name:"VARIABLE",
                value:vn2,
                id:vid2,
                variableType:""
              }
            }
          }
          b[i].inputs.VALUE.block = bid;
        }
      }
    }
  })();
})();