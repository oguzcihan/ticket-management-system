import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DefaultLayoutComponent} from "./layouts/default-layout.component";
import {EmptyLayoutComponent} from "./layouts/empty-layout.component";
import {Error404Component} from "./core/errors/error404/error404.component";
import {TicketCreateUpdateComponent} from "./pages/ticket/ticket-create-update/ticket-create-update.component";
import {TicketListComponent} from "./pages/ticket/ticket-list/ticket-list.component";


export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      {path: '', title: 'Dashboard', component: DashboardComponent},
      {path: 'ticket-create', title: 'Ticket Oluştur', component: TicketCreateUpdateComponent},
      {path: 'ticket-list', title: 'Ticke Listesi', component: TicketListComponent},
    ]
  },
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {path: 'error404', component: Error404Component}
    ]
  },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: '/error404', pathMatch: 'full'},
];
