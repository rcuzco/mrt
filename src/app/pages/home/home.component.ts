import { Component } from '@angular/core';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  racers: UsersModel[];

  constructor(public usersService: UsersService) 
  {
    this.racers = this.usersService.racerList;
    console.log("this.racers",this.racers);
  }

}
