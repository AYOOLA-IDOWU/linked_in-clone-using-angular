import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExplorepageComponent } from './explorepage/explorepage.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingpageComponent,SignuppageComponent,NavbarComponent, ExplorepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // public,private
  title = 'firstproject';
  // public firstname = "idowu"
}
