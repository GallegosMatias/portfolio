import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
  $('.slider').bxSlider({
    pager: false,
    controls: false,
    slideWidth: 2000,
    auto: true,
    pause: 3000,
    easing: 'ease-in'
  });
});
  }

}
