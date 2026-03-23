import { pathToRoot, joinSegments } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const logoLightPath = joinSegments(baseDir, "static/logo-light.png")
  const logoDarkPath = joinSegments(baseDir, "static/logo-dark.png")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <img src={logoLightPath} alt="OneMind" class="page-logo page-logo-light" width="52" height="52" />
        <img src={logoDarkPath} alt="OneMind" class="page-logo page-logo-dark" width="52" height="52" />
        <span>{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.page-logo {
  height: 52px;
  width: auto;
  flex-shrink: 0;
  object-fit: contain;
}

/* Default: show light logo, hide dark */
.page-logo-dark { display: none; }
.page-logo-light { display: block; }

:root[saved-theme="dark"] .page-logo-light { display: none; }
:root[saved-theme="dark"] .page-logo-dark { display: block; }
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
