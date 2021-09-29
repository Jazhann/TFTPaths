import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TFTPaths';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'Teamfight Tactics'},
      {name: 'description', content: 'Teamfight Tactics champions sinergies and combinations.'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}
