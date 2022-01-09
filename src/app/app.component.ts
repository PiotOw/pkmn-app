import {Component, ElementRef, ViewChild} from '@angular/core';
import {PokemonType} from "../models";

@Component({
  selector: 'pkmn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('icon') icon: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('navbar') navbar: ElementRef | undefined;
  @ViewChild('part1') part1: ElementRef | undefined;
  @ViewChild('part2') part2: ElementRef | undefined;

  title = 'pkmn-app';

  public PokemonType = PokemonType;

  public onScroll($event: Event): void {
    if (window.scrollY < 200) {
      this.icon?.nativeElement.setAttribute('style', `height: ${300 - window.scrollY + 'px; '}; left: ${'calc(50% - ' + (300 - window.scrollY) / 2 + 'px)'}`);
      this.part1?.nativeElement.setAttribute('style', `right: ${'calc(50% + ' + (300 - window.scrollY) / 2 + 'px)'}`);
      this.part2?.nativeElement.setAttribute('style', `left: ${'calc(50% + ' + (300 - window.scrollY) / 2 + 'px)'}`);
      this.navbar?.nativeElement.setAttribute('style', `height: ${(300 - window.scrollY) * 2 / 3 + 'px'}; font-size: ${(300 - window.scrollY) / 4 + 'px'}`);
    }
  }
}
