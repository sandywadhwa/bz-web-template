  // IIFE - Immediately Invoked Function Expression
  (function($, window, document) {
    // The $ is now locally scoped

    // The rest of your code goes here!

    console.log("Being Zero Loaded App");

    // Backend Call Example
    $.get("/api", function(data, status){
        console.log("Data: " + JSON.stringify(data) + "\nStatus: " + status);
        $("#appName").text(data.name);
        $("#appVersion").text(data.version);
    });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter


/*
SHORT HAND WAY

  $("document").ready(function() {
      // The DOM is ready!
      // The rest of your code goes here!
  });
*/