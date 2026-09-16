import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    name?: string;
    type?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
    title = "Abdullah | Professional Full-Stack Developer Portfolio",
    description = "Explore the professional portfolio of Abdullah, a skilled Full-Stack Developer specializing in MERN stack, Next.js, and high-end digital experiences.",
    name = "Abdullah",
    type = "website",
    keywords = "Abdullah, Full-Stack Developer, Web Developer, MERN Stack, React Developer, Node.js Expert, Portfolio, Pakistan Developer",
    canonical = "https://1xcoder.me",
    ogImage = "https://1xcoder.me/fullstackdev.png",
    noindex = false,
}) => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": type === "article" ? "Article" : "WebPage",
        "name": title,
        "description": description,
        "url": canonical,
        "author": {
            "@type": "Person",
            "name": name,
            "url": "https://1xcoder.me"
        }
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Robots Indexing Control */}
            {noindex ? (
                <meta name="robots" content="noindex, follow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}

            {/* Facebook / Open Graph tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
