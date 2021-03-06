import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersModel } from './../../../models/users.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})

export class DriverProfileComponent implements OnInit {

  currentUrl: string;
  currentUser: UsersModel;
  racers: UsersModel[];

  constructor(private route: ActivatedRoute, public usersService: UsersService) {

    this.racers = this.usersService.racerList;
    this.currentUrl = this.route.snapshot.params.id;
    this.racers.forEach(someUser => {
      if (someUser.urlProfile === this.currentUrl) 
      { 
        console.log("this.currentUser",someUser);
        return this.currentUser = someUser; 
      }
    });
  }

  ngOnInit() 
  {
    
  }

  mostrarDatosDeRacer(datosRacer:UsersModel)
  {
    console.log("datos recibidos", datosRacer);
    this.currentUser = datosRacer;
  }

}
