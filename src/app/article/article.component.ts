import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from './../config.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  posts = { };

  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id);
  }

  getPostById(id: number){
    return this.config.getPostById(id);
  }

  getback(){
    this.location.back();
  }
}