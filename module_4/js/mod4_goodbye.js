(function (window){


var speakWord = "Good bye";

var byeSpeaker = {}; 
function  speak(name){
console.log(speakWord + " " + name );
}

window.byeSpeaker = byeSpeaker;

})(window);


