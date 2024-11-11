export const Currency = {
    JPY: 'JPY',
    GBP: 'GBP',
    EUR: 'EUR',
    USD: 'USD',
} as const;

export type Currency = typeof Currency[keyof typeof Currency];