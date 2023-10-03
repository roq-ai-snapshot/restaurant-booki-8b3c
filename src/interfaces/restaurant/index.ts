import { EmployeeInterface } from 'interfaces/employee';
import { MenuInterface } from 'interfaces/menu';
import { TableReservationInterface } from 'interfaces/table-reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  menu?: MenuInterface[];
  table_reservation?: TableReservationInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    menu?: number;
    table_reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone_number?: string;
  opening_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
