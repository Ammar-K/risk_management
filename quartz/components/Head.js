import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "preact/jsx-runtime";
import { i18n } from "../i18n";
import { joinSegments, pathToRoot } from "../util/path";
import { JSResourceToScriptElement } from "../util/resources";
import { googleFontHref } from "../util/theme";
export default (() => {
    const Head = ({ cfg, fileData, externalResources }) => {
        const title = fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title;
        const description = fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description;
        const { css, js } = externalResources;
        const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
        const path = url.pathname;
        const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug);
        const iconPath = joinSegments(baseDir, "static/icon.png");
        const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`;
        return (_jsxs("head", { children: [_jsx("script", { src: "https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/quizdown.js" }), _jsx("script", { src: "https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/extensions/quizdownKatex.js" }), _jsx("script", { src: "https://cdn.jsdelivr.net/npm/quizdown@latest/public/build/extensions/quizdownHighlight.js" }), _jsx("script", { children: "quizdown.register(quizdownHighlight).register(quizdownKatex).init()" }), _jsx("title", { children: title }), _jsx("meta", { charSet: "utf-8" }), cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (_jsxs(_Fragment, { children: [_jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }), _jsx("link", { rel: "stylesheet", href: googleFontHref(cfg.theme) })] })), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:description", content: description }), cfg.baseUrl && _jsx("meta", { property: "og:image", content: ogImagePath }), _jsx("meta", { property: "og:width", content: "1200" }), _jsx("meta", { property: "og:height", content: "675" }), _jsx("link", { rel: "icon", href: iconPath }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "generator", content: "Quartz" }), css.map((href) => (_jsx("link", { href: href, rel: "stylesheet", type: "text/css", "spa-preserve": true }, href))), js
                    .filter((resource) => resource.loadTime === "beforeDOMReady")
                    .map((res) => JSResourceToScriptElement(res, true))] }));
    };
    return Head;
});
