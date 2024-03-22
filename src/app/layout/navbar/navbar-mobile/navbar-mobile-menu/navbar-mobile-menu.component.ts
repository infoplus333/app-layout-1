import { Component } from '@angular/core';
import { MenuService } from '../../../services/menu.service';
import { SubMenuItem } from '../../../../core/models/menu.model';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarMobileSubmenuComponent } from '../navbar-mobile-submenu/navbar-mobile-submenu.component';

@Component({
  selector: 'app-navbar-mobile-menu',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    NavbarMobileSubmenuComponent,
  ],
  templateUrl: './navbar-mobile-menu.component.html',
  styleUrl: './navbar-mobile-menu.component.scss'
})
export class NavbarMobileMenuComponent {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  public closeMenu() {
    this.menuService.showMobileMenu = false;
  }

}
