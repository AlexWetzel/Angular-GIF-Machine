import { Component } from '@angular/core';
// import * as request from 'request';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  apiCall() {
    console.log('This works');

    const search = 'cats';
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cb04bd6c938f44708d8dd7cbbefb25ad&q=" + search + "&limit=10&offset=0&lang=en";

    axios.get(queryURL).then(function(response){

      var result = response.data
      console.log(result);

      //This will display 10 gifs with their ratings
      // for (var i = 0; i < 10; i++) {

      //   var animate = result[i].images.fixed_height.url;
      //   var still = result[i].images.fixed_height_still.url;
      //   var rating = result[i].rating;

      //   var gifDiv = $("<div>").addClass("gif-div");
      //   var gifImg = $("<img>");
      //   var p = $("<p>");

      //   p.html("rating: " + rating);
      //   gifImg.attr("src", still).attr("still", still).attr("animate", animate).attr("state", "still");

      //   gifDiv.append(gifImg).append(p);
      //   $("#gifs").prepend(gifDiv);
      // }
    });
  }
}
