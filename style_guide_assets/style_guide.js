// Anything in here is definitely a code smell. We should refactor all of the initializers
// to happen via data-behavior attributes rather than inline JS.


// Initialize application health indicator

$(document).ready(
    function(){
        var $container = $(".health");
        new ApplicationStartStopButton($container);
        $container.on("js:changed", function() { new ApplicationStartStopButton($container); });
    }
);