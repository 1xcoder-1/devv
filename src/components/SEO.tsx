import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    keywords?: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Abdullah | Professional Full-Stack Developer Portfolio",
    description = "Explore the professional portfolio of Abdullah, a skilled Full-Stack Developer specializing in MERN stack, Next.js, and high-end digital experiences.",
    name = "Abdullah",
    type = "website",
    keywords = "Abdullah, Full-Stack Developer, Web Developer, MERN Stack, React Developer, Node.js Expert, Portfolio, Pakistan Developer",
    canonical = "https://1xcoder.me" // Assuming a professional domain
}) => {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Facebook / Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content="https://1xcoder.me/og-image.png" /> {/* Recommended: create an OG image */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
