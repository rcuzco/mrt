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

  constructor(private route: ActivatedRoute, public usersService: UsersService) {

    this.currentUrl = this.route.snapshot.params.id;
    this.usersService.racerList.forEach(someUser => {
      if (someUser.urlProfile === this.currentUrl) { return this.currentUser = someUser; }
    });
  }

  ngOnInit() {
    console.log("COJO EL SEGUNDO?", this.currentUrl);
  }

}
