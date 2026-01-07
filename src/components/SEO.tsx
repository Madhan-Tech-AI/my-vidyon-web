import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    article?: boolean;
}

const SEO = ({
    title,
    description,
    keywords,
    image = '/og-image.png',
    article = false
}: SEOProps) => {
    const location = useLocation();
    const siteUrl = 'https://my-vidyon-web.vercel.app'; // Production URL
    const currentUrl = `${siteUrl}${location.pathname}`;
    const defaultKeywords = "school ERP, educational software, student management system, attendance tracking, school administration, education technology";

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title} | My Vidyon</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}${image}`} />
            <meta property="og:site_name" content="My Vidyon" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${image}`} />
            <meta name="twitter:site" content="@MyVidyon" />
            <meta name="twitter:creator" content="@MyVidyon" />

            {/* Structured Data (BreadcrumbList) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": siteUrl
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": title,
                            "item": currentUrl
                        }
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
