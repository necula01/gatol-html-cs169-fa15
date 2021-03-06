var InputLink = (function() {

    // PRIVATE VARIABLES
    var link_container; // holds link_input container, value set in the "start" method below

    // PRIVATE METHODS

    var attachCreateHandler = function(e) {

        link_container.on('click', '#link_go', function(e) {
            alert('Starting Link!');
            //location.href = 'file:///Users/AllenYu/Desktop/cs169-dx/gatol_html_proj/dashboard.html';
            location.href = 'http://allenyu94.github.io/gatol-html/dashboard';
        });

        link_container.on('click', '#cancel_link', function(e) {
            //location.href = 'file:///Users/AllenYu/Desktop/cs169-dx/gatol_html_proj/dashboard.html';
            location.href = 'http://allenyu94.github.io/gatol-html/dashboard';
        });

    };

    /**
     * Start the app and attach event handlers.
     * @return {None}
     */
    var start = function() {
        link_container = $("#link_container");

        attachCreateHandler();

    };

    // PUBLIC METHODS
    // any private methods returned in the hash are accessible via CreateGame.key_name, e.g. CreateGame.start()
    return {
        start: start
    };

})();
