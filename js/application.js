// =================
// application.js
// 
// Base JavaScript file for our app.
// =================

// =====
// Global configurations
// =====

var api_base = "http://roadtrip-api.herokuapp.com/aricles/"

// ====
// Helper functions
// ====

// Get the requested URL param

var getParam = function(query,wanted) {
  var match,
      pl     = /\+/g,  // Regex for replacing addition symbol with a space
      search = /([^&=]+)=?([^&]*)/g,
      decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },

  urlParams = {};
  while (match = search.exec(query))
     urlParams[decode(match[1])] = decode(match[2]);

  return urlParams[wanted];
};

// Build html for the article page

var buildArticle = function(article) {
  // Build out our article template here

  return "";
};


// =====
// Run everything
// =====

(function() {
  var query,
      http_method,
      source_url,
      endpoint_url,
      request,
      response,
      article;

  // Pull the query out the url
  query = window.location.search.substring(1);

  // Get the http_method we want to use
  http_method = getParam(query,'action');

  // Get the source_url for this article
  source_url = getParam(query,'source');

  // We expect it'll be encoded with encodeURIComponent, so decode it
  source_url = decodeURIComponent(source_url);

  if (http_method == "read") {
    // Build our endpoint_url
    endpoint_url = api_base + 'read/' + source_url;

    // Make our request  

    // This is how we'll make the real request when the API works
    // request = $.getJSON( endpoint_url, function(data){
    //   article = buildArticle(data);
    //   $('#article').html(article)
    //   console.log('Inputting data.')
    // });

    // For now, just build from our mock api response
    request = $.getJSON( '/api/photo1.json', function(data){
      // article = buildArticle(data);
      // $('#article').html(article)
      console.log(data);
    });
  }
  else if (http_method == "create") {
    console.log('No create method yet.');
  }
  else {
    console.log('Please make a request.');
  }
})();