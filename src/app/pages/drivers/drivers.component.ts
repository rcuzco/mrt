import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})

export class DriversComponent implements OnInit {
  
  racers: UsersModel[];

  constructor(public usersService: UsersService) 
  {
    this.racers = this.usersService.racerList;
    console.log("this.racers",this.racers);
  }

  ngOnInit() {}

}
