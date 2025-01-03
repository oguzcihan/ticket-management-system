import {UserModel} from "../../../core/models/user.model";

export interface TicketModel{
  id?: number;
  user?: string; // todo: UserModel gelecek
  title?: string;
  priority?: string;
  category?: string;
  date?: Date;
  status?: string;
  assignedTo?: string; // todo: UserModel gelecek
}
