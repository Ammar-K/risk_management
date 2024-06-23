import { jsx as _jsx } from "preact/jsx-runtime";
import { pathToRoot } from "../util/path";
import { classNames } from "../util/lang";
import { i18n } from "../i18n";
const PageTitle = ({ fileData, cfg, displayClass }) => {
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title;
    const baseDir = pathToRoot(fileData.slug);
    return (_jsx("h1", { class: classNames(displayClass, "page-title"), children: _jsx("a", { href: baseDir, children: title }) }));
};
PageTitle.css = `
.page-title {
  margin: 0;
}
`;
export default (() => PageTitle);
