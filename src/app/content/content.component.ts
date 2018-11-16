import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  services: { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.services = this.getservices();
  }

  getservices(){
    return this.config.getconfig().services;
  }
}
