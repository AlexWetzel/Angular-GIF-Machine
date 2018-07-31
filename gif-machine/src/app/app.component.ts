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
  topics: string[] = ["cat", "dog", "ferret", "raccoon", "sloth"];


  getTopicFromForm() {
    const topic = this.queryElement.nativeElement.value;
    this.apiCall(topic);
    this.topics.push(topic);
  }

  apiCall(topic) {
    const searchResults = []
    const queryURL = "https://api.giphy.com/v1/gifs/search?api_key=cb04bd6c938f44708d8dd7cbbefb25ad&q=" + topic + "&limit=10&offset=0&lang=en";

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
    });
    this.gifs = searchResults;
  }
}
