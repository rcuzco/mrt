import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { YoutubeService } from './services/youtube.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  teta: boolean = true;

  videos: object = {};
  videos$: Subscription;

  constructor(
    public youtubeService: YoutubeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {

      const query = window.location.search;
      console.log('query 00000000000000000000000000000' + query);

      const getId = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('AAAAAAAAAAAAAA ' + getId);



      console.log('EEEEEEEEEEEEEEE this.router.url' + this.router.url);

      const urlTree = this.router.parseUrl(this.router.url);
      console.log('IIIIIIIIIIIIIII this.router.url PARSED ' + urlTree);

      const uid = urlTree.queryParams['uid'];
      console.log('OOOOOOOOOOOOOOO queryParams.uid' + uid);

      this.activatedRoute.queryParams.subscribe(params => {
        const data: any = params['uid'] || null;
        console.log('UUUUUUUUUUUUUU params.uid' + data);
      });
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      console.log('HEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY ' + param['id']);
    });

    this.videos$ = this.youtubeService.getYoutubeVideos('UCAnEUW12DYwZ8kgET9HXDKw').subscribe(res => { this.videos = res; });
    console.log('APP component:  this.videos', this.videos);
  }

  ngOnDestroy() {
    this.videos$.unsubscribe();
  }

}
