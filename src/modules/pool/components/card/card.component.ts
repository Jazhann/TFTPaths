import { Component, EventEmitter, Input, Output} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { Champion } from '@models/champion';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent{

  @Input() champion: Champion;
  @Input() noChampSelected: boolean;
  @Output() championClicked = new EventEmitter<Champion>();

  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  /**
   * Get champion image
   * @param name Champion name
   */
  getImage(name) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${'../../assets/images/champions/' + name + '.png'})`);
  }

  /**
   * Send output to parent with champion clicked
   * @param champion Champion
   */
  selectChampion(champion) {
    this.championClicked.emit(champion);
  }


}
