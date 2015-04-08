// =================
// application.js
// 
// Base JavaScript file for our app.
// =================

// Some test data
var photo = {};

photo.metadata =
{
  "photog_name": "Anthony Souffle",
  "photo_org": "Chicago Tribune",
  "article_url": "http://www.chicagotribune.com/news/local/breaking/chi-bison-illinois-20150328-20150328-story.html",
  "photo_url": "http://www.trbimg.com/img-54944fd9/turbine/chi-bison12souffle-ct0024841857-20141211/750/750x422"
};

photo.context =
[
  {
    "rank": 1,
    "type": "quote",
    "content": {
      "words": "Lorem ipsum dolor sit amet, consectetur adipisicing elit conoque serif dolores sit.",
      "attribution_name": "John Smith",
      "attribution_org": "Director, Bison Foundation"
    }
  },
  {
    "rank": 2,
    "type": "number",
    "content": {
      "number": "22",
      "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus debitis, porro laudantium animi ipsa. Ratione numquam explicabo aspernatur nesciunt, quam."
    }
  },
  {
    "rank": 3,
    "type": "comment",
    "content": {
      "words": "Lorem ipsum dolor sit amet, consectetur adipisicing elit conoque serif dolores sit.",
      "attribution_name": "John Smith",
      "attribution_org": "Director, Bison Foundation"
    }
  },
];

// Now, let's do stuff?
// ...