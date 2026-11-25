import { MAX_RATING } from '../const';

export function getRatingWidth(rating: number): string {
  return `${Math.round(rating) * (100 / MAX_RATING)}%`;
}
