/**
 * GATOL js file
 * 
 * Helps keep track of helper methods that each js may need.
 */

/* =========================== Shared Variables =========================== */

// the backend we are using
var apiUrl = 'https://calm-garden-9078.herokuapp.com' 

/* =========================== JSON Request Logic =========================== */

/**
 * HTTP POST request
 * @param  {string}   url       URL path, e.g. "/api/trainers"
 * @param  {Object}   data      JSON data to send in request body
 * @param  {function} onSuccess   callback method to execute upon request success (200 status)
 * @param  {function} onFailure   callback method to execute upon request failure (non-200 status)
 * @return {None}
 */
var makePostRequest = function(url, data, onSuccess, onFailure) {
    $.ajax({
        type: 'POST',
        url: apiUrl + url,
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "JSON",
        success: onSuccess,
        error: onFailure
    });
};

/**
 * HTTP DELETE request
 * @param  {string}   url       URL path, e.g. "/api/sessions/:id" (id = auth_token)
 * @param  {Object}   data      JSON data to send in request body
 * @param  {function} onSuccess   callback method to execute upon request success (204 status)
 * @param  {function} onFailure   callback method to execute upon request failure (non-200 status)
 * @return {None}
 */
var makeDeleteRequest = function(url, onSuccess, onFailure) {
    $.ajax({
        type: 'DELETE',
        url: apiUrl + url,
        //data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "JSON",
        success: onSuccess,
        error: onFailure
    });
};


/* =========================== Cookie Logic =========================== */

// Sets the Cookie
function setCookie(cname, cvalue) {
    // currently only doing expiration of 1 hour
    var now = new Date();
    var time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);

    document.cookie= cname + "=" + cvalue +
    "; expires=" + now.toUTCString() +
    "; path=/"; 

    console.log("set cookie: " + cname + "=" + cvalue +
    "; expires=" + now.toUTCString() +
    "; path=/");
}

// Gets the Cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

// Deletes the Cookie
function deleteCookie(cname) {
    document.cookie= cname + "=" +
    "; expires=Thu, 01 Jan 1970 00:00:00 UTC" +
    "; path=/"; 

    console.log("deleted cookie: " + cname);
}

// Used for debugging
function checkCookie() {
    var auth = getCookie("auth_token");
    if (auth != "") {
        alert("Welcome again, auth token: " + auth);
    }
}


