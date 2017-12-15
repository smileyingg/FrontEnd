import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
    
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
