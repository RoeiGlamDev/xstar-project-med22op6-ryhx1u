import { Review } from './review';

/
 * Interface representing a service offered by CleanSSR.
 */
export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
}

/
 * Interface representing a customer for CleanSSR.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
}

/
 * Interface representing the CleanSSR business.
 */
export interface CleanSSRBusiness {
    name: string; // Business name
    services: Service[]; // List of services offered
    reviews: Review[]; // Customer reviews
    contact: {
        email: string; // Contact email
        phone: string; // Contact phone number
    };
}

/
 * Example of CleanSSR business data.
 */
export const cleanSSR: CleanSSRBusiness = {
    name: 'CleanSSR',
    services: [
        {
            id: '1',
            name: 'Basic Cleaning',
            description: 'A thorough cleaning service for your home or office.',
            price: 99.99,
        },
        {
            id: '2',
            name: 'Deep Cleaning',
            description: 'An extensive cleaning service that covers all areas in detail.',
            price: 199.99,
        },
        {
            id: '3',
            name: 'Post-Construction Cleaning',
            description: 'Specialized cleaning service after construction or renovation.',
            price: 299.99,
        },
    ],
    reviews: [
        {
            id: '1',
            customerId: '101',
            rating: 5,
            comment: 'CleanSSR transformed my office space! Highly recommend.',
        },
        {
            id: '2',
            customerId: '102',
            rating: 4,
            comment: 'Great service, very professional. Will use again.',
        },
        {
            id: '3',
            customerId: '103',
            rating: 5,
            comment: 'The deep cleaning service exceeded my expectations!',
        },
    ],
    contact: {
        email: 'support@cleanSSR.com',
        phone: '+1234567890',
    },
};