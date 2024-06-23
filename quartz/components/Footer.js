import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import style from "./styles/footer.scss";
import { version } from "../../package.json";
import { i18n } from "../i18n";
export default ((opts) => {
    const Footer = ({ displayClass, cfg }) => {
        const year = new Date().getFullYear();
        const links = opts?.links ?? [];
        return (_jsxs("footer", { class: `${displayClass ?? ""}`, children: [_jsx("hr", {}), _jsxs("p", { children: [i18n(cfg.locale).components.footer.createdWith, " ", _jsxs("a", { href: "https://quartz.jzhao.xyz/", children: ["Quartz v", version] }), " \u00A9 ", year] }), _jsx("ul", { children: Object.entries(links).map(([text, link]) => (_jsx("li", { children: _jsx("a", { href: link, children: text }) }))) })] }));
    };
    Footer.css = style;
    return Footer;
});
