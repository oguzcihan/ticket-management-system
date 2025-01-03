import {Component, OnInit} from '@angular/core';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {PaginatorModule} from "primeng/paginator";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {Ripple} from "primeng/ripple";
import {TicketModel} from "../models/ticket.model";
import {TicketService} from "../services/ticket.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    RadioButtonModule,
    PaginatorModule,
    ConfirmDialogModule,
    Ripple,
    InputTextModule,
    NgIf
  ],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss',
  providers: [TicketService, MessageService, ConfirmationService]
})
export class TicketListComponent implements OnInit {

  ticketDialog: boolean;
  tickets: TicketModel[] = [];
  ticket: TicketModel;
  selectedTickets: TicketModel[];
  submitted: boolean;

  constructor(
    private productService: TicketService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {

  }

  ngOnInit(): void {
    this.tickets.push(
      {
        id: 1,
        user: "John Doe",
        title: 'Sample Title',
        priority: 'High',
        category: 'Category',
        date: new Date(),
        status: 'Open',
        assignedTo: "Ali Veli"
      },
      {
        id: 2,
        user: "John Doe",
        title: 'Sample Title 2',
        priority: 'Medium',
        category: 'Category 2',
        date: new Date(),
        status: 'In-Progress',
        assignedTo: "Ahmet Mehmed"
      },
      {
        id: 3,
        user: "John Doe",
        title: 'Sample Title 3',
        priority: 'Low',
        category: 'Category 3',
        date: new Date(),
        status: 'Closed',
        assignedTo: "Ali Veli"
      },
      {
        id: 4,
        user: "John Doe",
        title: 'Sample Title 4',
        priority: 'High',
        category: 'Category 4',
        date: new Date(),
        status: 'Resolved',
        assignedTo: "Ahmet Mehmed"
      }
    );

  }

  openNew() {
    this.ticket = {};
    this.submitted = false;
    this.ticketDialog = true;
  }


  deleteSelectedTickets() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected tickets?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tickets = this.tickets.filter(val => !this.selectedTickets.includes(val));
        this.selectedTickets = null;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Tickets Deleted', life: 3000});
      }
    });
  }

  editTicket(ticketModel: TicketModel) {
    this.ticket = {...ticketModel};
    this.ticketDialog = true;
  }

  deleteTicket(ticketModel: TicketModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + ticketModel.title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tickets = this.tickets.filter(val => val.id !== ticketModel.id);
        this.ticket = {};
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Ticket Deleted', life: 3000});
      }
    });
  }

  hideDialog() {
    this.ticketDialog = false;
    this.submitted = false;
  }

  saveTicket() {
    this.submitted = true;

    if (this.ticket.title.trim()) {
      if (this.ticket.id) {
        this.tickets[this.findIndexById(this.ticket.id.toString())] = this.ticket;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Ticket Updated', life: 3000});
      } else {
        this.tickets.push(this.ticket);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Ticket Created', life: 3000});
      }

      this.tickets = [...this.tickets];
      this.ticketDialog = false;
      this.ticket = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].id.toString() === id) {
        index = i;
        break;
      }
    }

    return index;
  }

}
