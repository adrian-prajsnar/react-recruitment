import { useQuery } from '@tanstack/react-query';

import { getFruits } from '../services/apiFruits';

export function useFruits() {
  const {
    isPending: isLoadingFruits,
    error: isErrorFruits,
    data: fruits,
  } = useQuery({
    queryKey: ['fruits'],
    queryFn: getFruits,
  });

  return { isLoadingFruits, fruits, isErrorFruits };
}
