import { Component, OnInit } from '@angular/core';
import { AService } from '../../@modules/app-scope/a.service';
import { BService } from '../../@modules/component-scope/b.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [BService]
})
export class TwoComponent implements OnInit {

  name: string;
  constructor(
    private aService: AService, // application scope; from AppModule providers;
    private bService: BService // component scope;
  ) {
  }

  ngOnInit() {
    this.name = 'TwoComponent';
    this.bService.source = this.name;
    this.bService.instance = 2222;
    setTimeout('', 2000);
    setTimeout(() => this.bService.timestamp = new Date(), 2000);
  }

}
