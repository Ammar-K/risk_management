import { jsx as _jsx } from "preact/jsx-runtime";
import { formatDate, getDate } from "./Date";
import readingTime from "reading-time";
import { classNames } from "../util/lang";
import { i18n } from "../i18n";
import style from "./styles/contentMeta.scss";
const defaultOptions = {
    showReadingTime: true,
    showComma: true,
};
export default ((opts) => {
    // Merge options with defaults
    const options = { ...defaultOptions, ...opts };
    function ContentMetadata({ cfg, fileData, displayClass }) {
        const text = fileData.text;
        if (text) {
            const segments = [];
            if (fileData.dates) {
                segments.push(formatDate(getDate(cfg, fileData), cfg.locale));
            }
            // Display reading time if enabled
            if (options.showReadingTime) {
                const { minutes, words: _words } = readingTime(text);
                const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
                    minutes: Math.ceil(minutes),
                });
                segments.push(displayedTime);
            }
            const segmentsElements = segments.map((segment) => _jsx("span", { children: segment }));
            return (_jsx("p", { "show-comma": options.showComma, class: classNames(displayClass, "content-meta"), children: segmentsElements }));
        }
        else {
            return null;
        }
    }
    ContentMetadata.css = style;
    return ContentMetadata;
});
