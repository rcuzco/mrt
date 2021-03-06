import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { UsersService } from './services/users.service';
import { TopBannerService } from './services/top-banner.service';
import { YoutubeService } from './services/youtube.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { DriverProfileComponent } from './pages/drivers/driver-profile/driver-profile.component';
import { VideoComponent } from './pages/video/video.component';
import { ComponentsComponent } from './components/components.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { ChampionshipsComponent } from './pages/championships/championships.component';

//import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PagesComponent,
    HomeComponent,
    DriversComponent,
    DriverProfileComponent,
    VideoComponent,
    ComponentsComponent,
    VideoListComponent,
    DriverListComponent,
    PhotoListComponent,
    ChampionshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
//    HomeModule
  ],
  providers: [
    UsersService,
    TopBannerService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
