    var jackInTheBox = {};
    jackInTheBox.triggered = false;
    jackInTheBox.intervalId = null;
    var lyrics = ["All a-...",
        "-round the ...",
        "mulberry...",
        "bush, The...",
        "monkey...",
        "chased the...",
        "wea-...",
        "-sel...",
        "The monkey...",
        "stopped to...",
        "pull up his...",
        "sock,...",
        "Pop!...",
        "goes the...",
        "wea-...",
        "-sel."];
    var x = -1;
    var lyricStart = 0;
    var lyricEnd = 16;
    var interval = 1000; // interval time in milliseconds

    var intervalId = setInterval(function () {
        if (lyricStart >= lyricEnd) {
            clearInterval(intervalId);
        } else {
            x++;
            lyricStart++;
            console.log(lyrics[x]);
        }
    }, interval);

function play() {
    if (jackInTheBox.triggered === false){
        console.log(song);
    }
}


//     ================================= BOM BONUSES
// BONUS 1: Build a Jack-In-The-Box
// Define an object called jackBox.
//     Include properties for...
// triggered - whether or not the box has been sprung (should be false by default)
// intervalId - set to null
// play() - once called, if triggered is false, console.log one new element in the lyrics array every second
// after the lyrics, stop the interval, set the triggered property to true, and alert POP!
//     windUp() - once called will stop the play() method and set triggered to false
// BONUS 2: Build a Stop Watch
// Define an object called stopWatch.
//     Include the following properties...
//     intervalId
// count
// Include the following methods...
// start() - starts console logging an increasing count every second
// pause() - pauses counter
// reset() - stops counter and resets count to zero
