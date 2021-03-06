import { Injectable } from '@angular/core';
import { TopBannerModel } from '../models/top-banner.model';

@Injectable({
  providedIn: 'root'
})

export class TopBannerService {

  public banners: TopBannerModel[] = [
    {
      src: '../../assets/images/banner/alo-vet-ham.jfif',
      alt: 'Alo Vet Ham'
    },
    /*{
      src: 'banner-campeonato-angel-burgueno.png',
      alt: 'Campeonato Angel Burgueño'
    },
    {
      src: 'banner-equipo.png',
      alt: 'Equipo Mancos Racing Team'
    }*/
  ];

}
