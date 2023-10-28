$(document).ready(function() {        
    // if restartBtn is clicked redirect to index.html page
    $('#retryBtn').click(function() {
        // redirect to index.html
        window.location.href = "index.html";
    });

    // if exitBtn is clicked destroy the window
    $('#exitBtn').click(function() {
        // destroy window
        window.close();
    });

});