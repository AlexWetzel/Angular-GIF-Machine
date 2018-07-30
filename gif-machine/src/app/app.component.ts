import { Component, ViewChild, ElementRef } from '@angular/core';
// import * as request from 'request';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('queryInput') queryElement: ElementRef;

  title = 'app';
  gifs: object[] = [];

  apiCall() {
    const searchResults = []
    console.log('This works');

    // const search = 'cats';
    const search = this.queryElement.nativeElement.value;
    console.log(search);
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cb04bd6c938f44708d8dd7cbbefb25ad&q=" + search + "&limit=10&offset=0&lang=en";

    axios.get(queryURL).then(function(response){

      console.log(response.data.data)
      console.log(response.data.data[0].images.fixed_height.url)
      response.data.data.forEach(result => {
        const gif = {
          animatedGif: result.images.fixed_height.url,
          stillGif: result.images.fixed_height_still.url,
          rating: result.rating
        }
        console.log(gif);
        searchResults.push(gif);
      });

      // console.log(this.gifs);

      // const result = response.data
      // console.log(result[0].images.fixed_height.url);
  
      // this.gifs = response.data
      // console.log(this.gifs);

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
      console.log(searchResults);
    });
    this.gifs = searchResults;
  }
}
