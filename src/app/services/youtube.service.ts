import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {

  users = [];
  currentDatauser = [];
  currentDataUserApiKey: string;

  constructor(public http: HttpClient, private usersService: UsersService) {
    this.users = usersService.racerList;
    console.log('AQUI ', this.users);
  }

  // getVideosForChanel(channelID: string, urlYoutube: string, maxResults: string): Observable<Object> {
  // tslint:disable-next-line: ban-types
  getYoutubeVideos(channelID: string): Observable<Object> {
    this.users.map(user => {
      if(channelID === user.youtubeId) {
        this.currentDatauser = user;
        this.currentDataUserApiKey = user.yotubeApiKey;
      }
    });

    if(this.currentDataUserApiKey != undefined) {
      // tslint:disable-next-line: max-line-length
      const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.currentDataUserApiKey + '&channelId=' + channelID + '&order=date&part=snippet&type=video,id&mine=true';
      return this.http.get(url).pipe(map(response => response));
      // const url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDlfsVpdTKoIkZfcCSI5YsYN5Tyd5Bbw3g&channelId=UCAnEUW12DYwZ8kgET9HXDKw&order=date&part=snippet&type=video,id&maxResults=4';
      // const url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + channelID + '&order=date&part=snippet&type=video,id&maxResults=' + maxResults;
    } else { return null; }
  }

  // getYoutubeChannelList(channelID: string): Observable<Object> {}

  // getYoutubeChannel(channelID: string): Observable<Object> {}

}
