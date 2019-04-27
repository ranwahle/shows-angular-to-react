import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShowsService} from '../shows.service';
import {DomSanitizer} from '@angular/platform-browser'


@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.scss']
})
export class SingleShowComponent implements OnInit {

  show: any;
  constructor(private acticatedRoute: ActivatedRoute, private showsService: ShowsService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.acticatedRoute.params.subscribe((params: any) => {
      const id = params.id;
      this.showsService.getShowById(id).subscribe((show: any) => {
        document.title = show.name;
        this.show = show;
        this.show.summry = this.sanitizer.bypassSecurityTrustHtml(this.show.summary);
      })
    })
  }

}
