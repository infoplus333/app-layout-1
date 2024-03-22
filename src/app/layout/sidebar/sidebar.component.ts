import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SidebarMenuComponent } from "./sidebar-menu/sidebar-menu.component";
// import packageJson from '';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    imports: [NgClass, NgIf, RouterLink, SidebarMenuComponent]
})
export class SidebarComponent {
  // public appJson: any = packageJson;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }
}
