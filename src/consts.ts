// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// N.B. THIS FILE IS IMPORTED IN BOTH SERVER- AND CLIENT-SIDE CODE.
// THINK TWICE BEFORE ADDING STUFF AS IT WILL GET SHIPPED TO THE CLIENT.

import { slugify } from './js/slugify';

export const SITE_TITLE = 'NVD Astro Starterkit';
export const SITE_DESCRIPTION = 'This is the default description of this website. Nice!';
export const SITE_URL = 'https://example.com/';
export const SITE_EMAIL = 'webmaster@newvistadigital.com';
export const SITE_PHONE = '(719) 639-1470'
export const SITE_PHONE_HREF = 'tel:7196391470'
export const SITE_DEFAULT_IMAGE = '/blog-placeholder-1.jpg';
export const SITE_UTM_SOURCE = slugify(SITE_TITLE);

export const UI_THEME = 'system'; // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

export const ANALYTICS_GA4 = null;