import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersModel } from './../../models/users.model';


@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.scss']
})

export class DriverListComponent implements OnInit {

  // metemos a los usuarios con un bucle desde el componente padre
  //@Input() public currentUser: UsersModel;
  @Input() public racers:UsersModel[];
  @Output() public profileClick:EventEmitter<UsersModel> = new EventEmitter();

  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router) {
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe(Params => {
      console.log('HEY',Params);
      
    });

    console.log("init - racers",this.racers);

    // console.log('pilotos', this.currentUser);
    // if (this.currentUser.alias === '') { this.currentUser.alias = this.currentUser.name; }
  }

  onProfile(user:UsersModel) 
  {
    console.log("user a mostrar", user);
    this.profileClick.emit(user);
     
  }



}
