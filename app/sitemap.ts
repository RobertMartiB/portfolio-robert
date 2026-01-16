import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://robertmarti.com'; // Replace with actual domain if known, or keeping as placeholder that user should update
    // Since I don't know the final domain, I'll use a placeholder or localhost if mostly dev, but for SEO production domain is needed. 
    // The user mentioned "Robert Martí". I will assume a generic placeholder or ask user. 
    // Wait, I should probably check if there is a domain mentioned. 
    // User didn't specify domain. good practice is to put a placeholder or use a variable.
    // I will use `https://robert-marti.com` as a placeholder or just `https://example.com` and add a comment.
    // actually, let's use a relative URL if allowed? No, sitemaps need absolute.
    // I'll stick to a placeholder and mention it to user.

    return [
        {
            url: 'https://robertmarti.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add more routes here if there are subpages like /projects, /blog etc.
        // Given the current structure, it's mostly a one-page portfolio with sections.
    ];
}
