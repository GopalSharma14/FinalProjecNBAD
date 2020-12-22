import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myPersonalBudget';

  ngOnInit(){
    // (function (jquery) {
    //   jquery(document).ready(function () {
    //     var trigger = jquery(".hamburger"),
    //       overlay = jquery(".overlay"),
    //       isClosed = false;

    //     trigger.click(function () {
    //       hamburger_cross();
    //     });

    //     function hamburger_cross() {
    //       if (isClosed == true) {
    //         overlay.hide();
    //         trigger.removeClass("is-open");
    //         trigger.addClass("is-closed");
    //         isClosed = false;
    //       } else {
    //         overlay.show();
    //         trigger.removeClass("is-closed");
    //         trigger.addClass("is-open");
    //         isClosed = true;
    //       }
    //     }

    //     jquery('[data-toggle="offcanvas"]').click(function () {
    //       jquery("#wrapper").toggleClass("toggled");
    //     });
    //   });

    // })(jquery);
  }
}
