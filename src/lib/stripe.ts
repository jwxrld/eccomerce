import { loadStripe } from '@stripe/stripe-js';

// Use Vite's environment variables syntax
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');