import { format } from 'date-fns';

export const today = format(new Date(), 'yyyy-MM-dd');

export const currentYear = new Date().getFullYear();

export const firstVisibleMonth = new Date(currentYear - 2, 0);
export const lastVisibleMonth = new Date(currentYear + 7, 11);
