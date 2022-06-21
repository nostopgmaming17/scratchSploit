vm.runtime.ioDevices.userData._username = "griffpatch_is_homo";
let P = 1013;
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
  }
});
setInterval(()=>{
  setglobal("PowerBombs",10000);
  setglobal("PowerFire",100);
  setlocal("Player","speed",5);
  setlocal("Player", "Power", P);
  let m = getlocal("Player","mode");
  if (m == 100 || m == 0) setlocal("Player","mode",1);
}, 10);