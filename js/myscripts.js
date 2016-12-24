$(document).ready(function() {
    $('.parallax').parallax();

    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left', // Choose the horizontal origin
    });

    $('.slider').slider({
        full_width: true,
        height: 500,
        indicators: true
    });

    $('#modal1').leanModal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        ready: function() { alert('Ready'); }, // Callback for Modal open
        complete: function() { alert('Closed'); } // Callback for Modal close
    });

    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });

    $('.carousel').carousel();

});

// Tell the user the page is WIP
$(window).load(function() {
    Materialize.toast('Pagina in costruzione, prova a tornare nei prossimi giorni', 120000);
});
