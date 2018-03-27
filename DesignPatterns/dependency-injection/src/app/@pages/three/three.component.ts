import { Component, Input, OnInit } from '@angular/core';
import { BService } from '../../@modules/component-scope/b.service';
import { AService } from '../../@modules/app-scope/a.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  providers: [BService]
})
export class ThreeComponent implements OnInit {
  @Input() customInstance: number;
  name: string;
  constructor(
    private aService: AService, // application scope; from AppModule providers;
    private bService: BService // component scope;
  ) {
  }

  ngOnInit() {
    this.name = 'ThreeComponent';
    this.bService.source = this.name;
    this.bService.instance = 3333;
    this.aService.config.instance = this.customInstance; // shared service configuration;
    setTimeout(() => this.bService.timestamp = new Date(), 3000);
  }

}
