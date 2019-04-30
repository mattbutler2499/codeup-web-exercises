(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var area = Math.PI * Math.pow(circle.radius, 2);
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            if (doRounding === true){
                var roundingArea = Math.round(circle.getArea(circle.radius));
                 console.log(Math.round(area));
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: + " + roundingArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
