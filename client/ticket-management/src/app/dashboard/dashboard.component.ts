import { Component } from '@angular/core';
import {Button, ButtonDirective} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import {NgOptimizedImage} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    Button,
    SidebarModule,
    ButtonDirective,
    NgOptimizedImage,
    TooltipModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  visibleSidebar1=true;
}
