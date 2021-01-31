E.showMessage("My\nSimple\nApp","My App")

setWatch(function(e) {
    E.showMessage("Left","My App")
}, BTN4, { edge:"falling",repeat:true,debounce:50});


setWatch(function(e) {
    E.showMessage("Right","My App")
}, BTN5, { edge:"falling",repeat:true,debounce:50});