# CSS Organization - Jekyll Blog

## Overview
The CSS has been reorganized into modular SCSS partials for better maintainability. Jekyll will automatically compile these into a single CSS file at build time.

## File Structure

```
assets/css/
├── style.scss                          # Main file (imports everything)
├── _variables.scss                     # Design tokens & CSS custom properties
├── _base.scss                          # Reset & base element styles  
├── _typography.scss                    # Typography (headings, paragraphs, links)
├── _layout.scss                        # Layout containers (wrapper, page-content)
├── components/
│   ├── _header.scss                    # Header & navigation
│   ├── _footer.scss                    # Footer
│   ├── _breadcrumbs.scss               # Breadcrumb navigation
│   ├── _buttons.scss                   # Buttons & icon buttons
│   ├── _code.scss                      # Code blocks & copy button
│   ├── _posts.scss                     # All blog post styles
│   ├── _landing.scss                   # Landing page
│   ├── _projects.scss                  # Projects grid & cards
│   ├── _tags.scss                      # Tag styles
│   └── _comments.scss                  # Comments section (Giscus)
├── _syntax-highlighting-imports.scss   # Syntax highlighting colors
├── _utilities.scss                     # Animations & utility classes
└── _responsive.scss                    # Mobile & tablet styles

```

## Import Order (in style.scss)

1. **Foundation**: Variables → Base → Typography → Layout
2. **Components**: Header → Footer → Breadcrumbs → Buttons → Code → Posts → Landing → Projects → Tags → Comments
3. **Finishing**: Syntax Highlighting → Utilities → Responsive
