import { jsx as _jsx } from "preact/jsx-runtime";
import { classNames } from "../util/lang";
const ArticleTitle = ({ fileData, displayClass }) => {
    const title = fileData.frontmatter?.title;
    if (title) {
        return _jsx("h1", { class: classNames(displayClass, "article-title"), children: title });
    }
    else {
        return null;
    }
};
ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`;
export default (() => ArticleTitle);
