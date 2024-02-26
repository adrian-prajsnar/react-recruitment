import { API_BASE_URL } from '../utilities/constants';
import { ItemType } from '../components/ListContainer/ListContainer.types';

export async function getFruits(): Promise<ItemType[]> {
  const res: Response = await fetch(`${API_BASE_URL}/fruits`, {
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Something went wrong while fetching fruits');

  const data = (await res.json()) as ItemType[];

  if (!data) throw new Error('Unexpected server response');

  return data;
}
