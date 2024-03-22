import { Component } from '@angular/core';
import { SubMenuItem } from '../../../core/models/menu.model';
import { MenuService } from '../../services/menu.service';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
        NgFor,
        NgClass,
        NgTemplateOutlet,
        RouterLink,
        RouterLinkActive,
        NgIf,
        SidebarSubmenuComponent,
  ],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
  constructor(public menuService: MenuService) {}

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }
}
