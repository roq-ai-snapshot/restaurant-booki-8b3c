import queryString from 'query-string';
import { TableReservationInterface, TableReservationGetQueryInterface } from 'interfaces/table-reservation';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTableReservations = async (
  query?: TableReservationGetQueryInterface,
): Promise<PaginatedInterface<TableReservationInterface>> => {
  return fetcher('/api/table-reservations', {}, query);
};

export const createTableReservation = async (tableReservation: TableReservationInterface) => {
  return fetcher('/api/table-reservations', { method: 'POST', body: JSON.stringify(tableReservation) });
};

export const updateTableReservationById = async (id: string, tableReservation: TableReservationInterface) => {
  return fetcher(`/api/table-reservations/${id}`, { method: 'PUT', body: JSON.stringify(tableReservation) });
};

export const getTableReservationById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/table-reservations/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTableReservationById = async (id: string) => {
  return fetcher(`/api/table-reservations/${id}`, { method: 'DELETE' });
};
