import { format } from 'date-fns';

/
 * Utility functions for CleanSSR application.
 * This file contains helper functions that are relevant for CleanSSR's technology-driven cleaning services.
 */

// Define a type for the review structure
export interface Review {
  id: number;
  name: string;
  rating: number; // Scale of 1-5
  comment: string;
  date: Date;
}

// Function to concatenate class names conditionally
export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

// Function to format a review date
export function formatReviewDate(date: Date): string {
  return format(date, 'MMMM dd, yyyy');
}

// Function to validate review rating
export function isValidRating(rating: number): boolean {
  return rating >= 1 && rating <= 5;
}

// Example reviews data for CleanSSR
export const reviews: Review[] = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'CleanSSR transformed my office space into a tech haven! Highly recommend!',
    date: new Date('2023-10-01'),
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Great service with a modern touch. The staff was professional and efficient.',
    date: new Date('2023-09-15'),
  },
  {
    id: 3,
    name: 'Alice Johnson',
    rating: 5,
    comment: 'I love how CleanSSR integrates technology into their services. A game changer!',
    date: new Date('2023-08-20'),
  },
];

// Exporting utility functions and data for use in the CleanSSR application
export { cn, formatReviewDate, isValidRating };