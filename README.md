# Angular-GIF-Machine

Link: https://alexwetzel.github.io/Angular-GIF-Machine/

Angular GIF Machine is an Angular app that lets you query the Giphy API, and displays gifs that you can click to play or stop.

Although similar to my other gif machine app, this app uses Angular and features a new user interface.

## Using The App

In the middle of the web page there is a form. Type in a topic and click search. This send a query to the Giphy API and returns 10 gifs.

You can also click a topic button below the search form to return gifs based on that topic. When you search for a new topic, a button gets added for that topic.

Ten gifs will be displayed on the lowe half of the page when you search, each with content rating.

The gifs will be still by default. They will animate once they are clicked, and can be stopped by clicking them again.

## Possible Improvements

- Topic button deletion
  
- Improved query options, such as by rating and number of results

- User accounts to save favorite gifs

- Option to display gif data

## Known Bugs

- Hitting the ener key in the search form will refresh the page. Click the 'search' button to avoid this issue.

- Multiple topic buttons can be added for the same topic.
