// Role versions of the site. Headline differs, case order is filtered by tag.
export const roles = {
  product: { label: 'Product Designer', headline: 'Senior product designer who makes dense information easy to absorb.' },
  ux: { label: 'UX/UI Designer', headline: 'Senior UX/UI designer who makes dense information easy to absorb.' },
  data: { label: 'Information / Data Designer', headline: 'Senior information designer who makes dense data easy to absorb.' },
} as const;
export type Role = keyof typeof roles;
export const defaultHeadline = 'Senior designer who makes dense information easy to absorb.';
