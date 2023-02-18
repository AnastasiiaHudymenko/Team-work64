import { formatDistanceToNow } from 'date-fns';

export const getData = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
