import { Component, OnInit, OnDestroy, ɵConsole } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnDestroy {

  videos: object = {};
  videos$: Subscription;

  constructor(public youtubeService: YoutubeService) {}

  ngOnInit() {
    this.videos$ = this.youtubeService.getYoutubeVideos(' XXXXXXXXX ').subscribe(res => {
      return this.videos = res;
    });
    console.log('video-list component: VIDEOS DESDE EL SERVICIO', this.videos);
  }

  ngOnDestroy() {
    this.videos$.unsubscribe();
  }

  // PARA LOS CANALES
  /*
    channels: object = {};
    channels$: Subscription;
    urlYoutubeChannelList: string = 'https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId= xxxxxx &key=AIzaSyDlfsVpdTKoIkZfcCSI5YsYN5Tyd5Bbw3g';

    constructor(public youtubeService: YoutubeService) {}

    ngOnInit() {
      this.channels$ = this.youtubeService.getYoutubeVideos(' xxxxx ').subscribe(res => {
        console.log('LIST COMPONENT: onInit: res', res);
        return this.channels = res;
      });
    }

    ngOnDestroy() {
      this.channels$.unsubscribe();
    }
  */

}
