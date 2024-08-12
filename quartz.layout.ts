import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"



// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ammar-k",
      X: "https://x.com/Ammar_Alkhaldi",
      LinkedIn: "https://www.linkedin.com/in/ammaralkhaldi/",
      Website: "https://ammaralkhaldi.com",
    },
  }),
}




// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  right: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(Component.Search()),
    Component.DesktopOnly(Component.Darkmode()),
    Component.DesktopOnly(Component.Explorer()),
    Component.MobileOnly(Component.Graph()),
    Component.MobileOnly(Component.Backlinks()),

  ],
  left: [
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(Component.Graph()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Search()),
    Component.MobileOnly(Component.Darkmode()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  right: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  left: [],
}


