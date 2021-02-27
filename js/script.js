
var dialogs = {
    t3: ["Je suis à l'écoute de mes patients et toujours souriant.", "Si vous ne me voyez pas bien, il est peut-être temps de consulter !", "Je lave ma blouse chaque jour avec <span class='blur'>Persil blancheur</span>"],
    t1: ["Le coeur c'est à bien à droite ?", "J'ai fait médecine pour suivre mes copines.", "Je ferai battre votre coeur !"],
    t2: ["Choisissez votre couleur de peau et je vous la mets. Moi c'est du #f5ca99.", "La cravate, c'est pour plaire à Elisa.", "Je m'y connais un peu en médecine, vous avez du pot !"]
}






// Shorthand for $( document ).ready()
$(function() {
    console.log( "ready!" );

    // let items = dialogs['t1'];
    // let item = items[Math.floor(Math.random() * items.length)];
    // console.log(item);

    $('#card-t1').hover(
        function() {
            //mouseenter
            let items = dialogs['t1'];
            let item = items[Math.floor(Math.random() * items.length)];
            // console.log(item);
            $('#bubble-t1').html(item);
        }
    );

    $('#card-t2').hover(
        function() {
            //mouseenter
            let items = dialogs['t2'];
            let item = items[Math.floor(Math.random() * items.length)];
            // console.log(item);
            $('#bubble-t2').html(item);
        }
    );

    $('#card-t3').hover(
        function() {
            //mouseenter
            let items = dialogs['t3'];
            let item = items[Math.floor(Math.random() * items.length)];
            // console.log(item);
            $('#bubble-t3').html(item);
        }
    );



});