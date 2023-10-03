import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  name: string;
  position: string;
  salary: number;
  hire_date: any;
  user_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  position?: string;
  user_id?: string;
  restaurant_id?: string;
}
