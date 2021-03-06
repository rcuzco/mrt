import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})

export class DriversComponent implements OnInit {

  constructor(public usersService: UsersService) {}

  ngOnInit() {}

}
