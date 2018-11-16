import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: { };

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.clients = this.getclients();
  }

  getclients(){
    return this.config.getconfig().clients;
  }

}
