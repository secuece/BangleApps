Bangle.setLCDMode();

E.showMessage("My\nSimple\nApp","My App")

setWatch(function(e) {
     Bangle.beep(10);
    E.showMessage("Left","My App");
}, BTN4, { edge:"falling",repeat:true,debounce:50});


setWatch(function(e) {
     Bangle.beep(10);
    E.showMessage("Right","My App");
}, BTN5, { edge:"falling",repeat:true,debounce:50});


setWatch(function(e) {
     Bangle.beep(10);
    E.showMessage("BTN2","My App");
}, BTN2, {});



if ( BTN1.read() ) {
     Bangle.beep(10);
     E.showMessage("BTN1","My App");
     console.log("BTN1");
}