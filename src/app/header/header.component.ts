import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
/*
  hola: boolean = true;
  adios: boolean = false;
*/
  constructor(private route: ActivatedRoute, public location: Location) {}

  ngOnInit() {
  /*
  EXISTE EL PRIMER Y SEGUNDO PARAMETRO EN LA URL?
  SI ES ASÍ, MOSTRARLO CON UN NGIF EN EL HTML
  */
    // tslint:disable-next-line: no-string-literal
    const firstUrlParam = this.route.snapshot.params['id'];
    const secondUrlParam = this.route.snapshot.paramMap.get('id');
    console.log('id 1', firstUrlParam);
    console.log('id 2', secondUrlParam);
  }

  goBack(): void {
    this.location.back();
  }

}
