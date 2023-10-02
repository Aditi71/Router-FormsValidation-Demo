import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isNavbarCollapsed = true; // Define the isNavbarCollapsed property

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed; // Define the toggleNavbar method
  }

}