import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(private router: Router) {

   }
  ngOnInit() {
  }
  
  changeToLogin(){
    this.router.navigate(['/login']);
    return false;
  }
  changeToKorea(){
    this.router.navigate(['/korea']);
    return false;
  }
  changeToInter(){
    this.router.navigate(['/inter']);
    return false;
  }
}
