(()=>{
    rad = d=>d*(Math.PI/180);
    let BOOSTING = false;
    onkeydown = k=>{
        if (k.code == "KeyQ") {
            BOOSTING = true;
        } else if (k.code == "KeyF") {
            setglobal("PLAYER SX",0);
            setglobal("PLAYER SY",0);
        }

    };
    onkeyup = k=>{
        if (k.code == "KeyQ") BOOSTING = false;
    };
    onclick = m=>{
        if (m.button != 0) return;
        let t = getTarget();
        if (t.isOriginal) return;
        if (t.getName() != "Players2"&&t.getName() != "Moon") return;
        if (t.getName() == "Moon"&&t.currentCostume != 6) return;
        if (t.getName() == "Players2") {
            setglobal("PLAYER X",getlocal(t,"x"));
            setglobal("PLAYER Y",getlocal(t,"y"));
        } else {
            setglobal("PLAYER X",getlocal(t,"x"));
            setglobal("PLAYER Y",getlocal(t,"y"));
        }
    }
    let sx,sy,d;
    let spr = getsprite("Player")
    setInterval(()=>{
        if (!BOOSTING) return;
        sx = getglobal("PLAYER SX")*1;
        sy = getglobal("PLAYER SY")*1;
        d = rad(getglobal("PLAYER DIR")*1);
        if (BOOSTING) {
            sx += Math.sin(d);
            sy += Math.cos(d);
        }
        setglobal("PLAYER SX",sx);
        setglobal("PLAYER SY",sy);
    },10)
})();