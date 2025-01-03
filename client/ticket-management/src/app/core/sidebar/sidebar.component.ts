import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TooltipModule} from "primeng/tooltip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TooltipModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
