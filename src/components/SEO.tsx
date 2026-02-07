import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
    const location = useLocation();
    const baseUrl = "https://www.grapevinecottage.online";
    const url = canonical || `${baseUrl}${location.pathname}`;

    useEffect(() => {
        document.title = `${title} | Grapevine Cottage`;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute("href", url);
        }

        // Update OG tags too
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute("content", description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", url);

    }, [title, description, url]);

    return null;
};

export default SEO;
