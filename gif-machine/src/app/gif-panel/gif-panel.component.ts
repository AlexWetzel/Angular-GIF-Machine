import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gif-panel',
  templateUrl: './gif-panel.component.html',
  styleUrls: ['./gif-panel.component.css']
})
export class GifPanelComponent implements OnInit {
  @Input() gifPanel;
  isClicked: boolean = false;
 

  constructor() { }

  ngOnInit() {
  }

}
