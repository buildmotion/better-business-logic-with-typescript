import { Component, OnInit } from '@angular/core';
import { BService } from '../../@modules/component-scope/b.service';
import { AService } from '../../@modules/app-scope/a.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
  providers: [BService] // provided as component-scope;
})
export class OneComponent implements OnInit {
  name: string;
  constructor(
    private aService: AService, // application scope; from AppModule providers;
    private bService: BService // component scope;
  ) {
  }

  ngOnInit() {
    this.name = 'OneComponent';
    this.bService.source = this.name;
    this.bService.instance = 1111;
    setTimeout(() => this.bService.timestamp = new Date(), 1000);
  }
}
