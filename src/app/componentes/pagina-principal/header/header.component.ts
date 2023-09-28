import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  hacerVisible(){
    let  nav:any = document.getElementById('nav');
    console.log(nav)
    nav.classList.toggle("visibility");
  
  }

}
