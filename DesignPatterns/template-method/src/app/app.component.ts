import { Component } from '@angular/core';
import { TacoService } from './modules/taco/taco.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private tacoService: TacoService) {
    this.buildTaco();
  }

  buildTaco() {
    this.tacoService.makeDenverShrimpTaco('matt', 2);
    this.tacoService.makeSteakTaco('carmen', 1);
  }
}
