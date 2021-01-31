E.showMessage("My\nSimple\nApp","My App")

setWatch(function(e) {
     Bangle.beep(10);
    E.showMessage("Left","My App");
}, BTN4, { edge:"falling",repeat:true,debounce:50});


setWatch(function(e) {
     Bangle.beep(10);
    E.showMessage("Right","My App");
}, BTN5, { edge:"falling",repeat:true,debounce:50});