import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { ChampionshipsComponent } from './pages/championships/championships.component';
import { DriverProfileComponent } from './pages/drivers/driver-profile/driver-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'team', component: DriversComponent },
  { path: 'team/:id', component: DriverProfileComponent },
  { path: 'championships', component: ChampionshipsComponent },
  { path: 'championships/:id', component: ChampionshipsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
