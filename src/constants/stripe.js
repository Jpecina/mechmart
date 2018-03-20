const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'

export default STRIPE_PUBLISHABLE;