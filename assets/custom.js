

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    // ScrollReveal Config

window.sr = ScrollReveal({reset:true});

// Customizing a reveal set
// sr.reveal( 'header', { duration: 1000 } );
sr.reveal('.scrollr', { duration: 2000 });
sr.reveal('.scrollr-1', { duration: 2300 });
sr.reveal('.scrollr-2', { duration: 2600 });
sr.reveal('.scrollr-3', { duration: 2900 });


smoothScroll.init();

});