import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  testimonials: { };
 
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.testimonials = this.gettestimonials();
  }

  gettestimonials(){
    return this.config.getconfig().testimonials;
  }

}
