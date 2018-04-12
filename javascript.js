$(window).on("load", startHistorie);


/*
elementer:
man_container
man_sprite
man_sit
bear_container
bear_sprite
bear_fall


animationer:
man_move_right
man_walk
man_sit_down
bear_move_right
bear_walk
bear_falling

lyd:
blæsevejr
buskerasler
brøl
skrig
dramatisk_musik
sejres_musik
*/

function startHistorie() {

    $("#startHistorie").on("click", startHistorie);

    $("#mandSerBjorn").on("click", mandSerBjorn);

    $("#bjornEfterMand").on("click", bjornEfterMand);
}


console.log("startHistorien");
/*

start lyd: blæsevejr

start-anim: man_walk */

$("#man_container").addClass("man_move_right");

/* man_walk */

$("#man_sprite").addClass("man_walk");

/* start-anim: man_sit */

$("#man_sit").addClass("man_sit_down");


/* spil lyd: buskerasler */

/* stop-anim: man_sit_down */

/* start-anim: bear_walk */

$("#bear_container").addClass("bear_move_right");

$("#bear_sprite").addClass("bear_walk");

spil lyd: brøl

}






function mandSerBjorn() {

    /*

    start-anim: man_turn
    spil lyd: skrig

    */


    function bjornEfterMand() {

    }

    /*

    stop lyd: baggrundsstøj

    spil lyd: dramatisk_musik

    start-anim: man_samlerop

    start-anim: man_loefter

    start-anim: bjorn_hurtigere

    start-anim: man_kaster_traestamme

    spil lyd: højere dramatisk lyd

    start-anim: man_når_væk

    spil lyd: sejres musik
















    }
