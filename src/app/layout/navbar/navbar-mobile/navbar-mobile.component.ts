import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  imports: [NgClass, NavbarMobileMenuComponent],
  templateUrl: './navbar-mobile.component.html',
  styleUrl: './navbar-mobile.component.scss'
})
export class NavbarMobileComponent {
  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = false;
  }
}
