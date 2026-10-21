# Vivek Kamath – Interactive Personal Profile
 
A responsive, single-page personal website that presents my academic background, projects, blog, activities, achievements and social profiles. It was built for the **Human-Computer Interaction (R5CO3005T)** course at VJTI, Mumbai, with the aim of applying established HCI principles to a real interface and evaluating its usability.
 
**Live site:** https://vivek77-portfolio-ashy-three.vercel.app/?_vercel_share=wupGQ7FMCh4eCbL6HHAKNYWy10TkdMjv#home
 
 
---
 
## Features
 
- **Continuous scrolling page** with ten sections: Home, About, Education, Skills, Projects, Blog, Activities, Achievements, Social and Contact.
- **Fixed left sidebar** with grouped links (About me, My work, Connect). The link for the section you are reading is highlighted as you scroll.
- **Full-screen landing section** with a large name, a one-line tagline and a small diagram of the model → backend → interface layers.
- **Light and dark themes** with a sun/moon icon toggle. The site follows the system setting by default and remembers your choice.
- **Project search and filters** (All, AI / ML, Web, Mobile) so projects can be found quickly.
- **Blog section** linking to articles on Blogger, with tags and source-code links.
- **Progress line and tab title** that update as you scroll. The scrollbar is hidden for a cleaner look, so these show where you are.
- **Responsive layout:** below 62 rem the sidebar becomes a slide-in menu opened by a "Menu" button.
- **No dependencies or build step:** plain HTML, CSS and JavaScript.
## HCI principles applied
 
| Principle | How it appears in the site |
|---|---|
| Shneiderman: consistency | One style for buttons, cards, headings and tags across every section |
| Shneiderman: informative feedback | Highlighted current section, scroll progress line, pressed state on filter buttons |
| Shneiderman: reduce short-term memory load | The menu is always visible and shows your place |
| Shneiderman: easy reversal | Scroll back, use the menu, press the browser Back button or "Back to top" |
| Norman: visibility and signifiers | Buttons look clickable, links name their destination, a "Scroll to explore" cue on the landing screen |
| Norman: feedback | Hover, focus and pressed states respond instantly |
| Nielsen: visibility of system status | Active menu item, progress line, page title that follows the section |
| Nielsen: match with the real world | Plain-language labels such as "Explore my projects" |
| Nielsen: recognition over recall | Grouped menu always on screen |
| Nielsen: flexibility and efficiency | Search and filter on projects; scrolling and menu jumps both work |
| Nielsen: minimalist design | One accent colour, no decorative clutter |
| Fitts' law | Buttons and links are at least 44 × 44 px; the menu sits at a fixed screen edge |
| Hick's law | Ten sections split into three labelled groups; each section has one main action |
| Accessibility | Skip link, visible keyboard focus, ARIA labels, focus moves to the section heading after a menu jump, reduced-motion support |
 

 

 
## Project structure
 
```
.
├── index.html   # page structure and all content
├── style.css    # layout, themes, responsive rules
├── script.js    # scroll-spy, theme toggle, mobile menu, project search/filter
└── README.md
```
 
## Live demo
 
The site is deployed at: **[PLACEHOLDER: add your deployed link here]**
 
It is a static site, so it can be hosted for free on GitHub Pages, Vercel or Netlify.
 
## Customize
 
- **Content:** edit the text, links and dates in `index.html`. To add a project, copy an `<article class="item">` block inside `#projList`.
- **Filter categories:** each project has a `data-cat` attribute (`ai`, `web`, `mobile`). Use the same words on the filter buttons.
- **Colours:** change the CSS variables at the top of `style.css` (`:root` for light mode, `:root[data-theme=dark]` for dark mode).
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), loaded from Google Fonts with system-font fallbacks.
## Browser support
 
Current versions of Chrome, Edge, Firefox and Safari, on desktop and mobile.
 
## Tech stack
 
HTML5 · CSS3 (custom properties, grid, flexbox) · Vanilla JavaScript (IntersectionObserver, localStorage)
 
## Author
 
**Vivek Kamath**, B.Tech Computer Science, Veermata Jijabai Technological Institute (VJTI), Mumbai
 
- GitHub: [Vivekkamath17](https://github.com/Vivekkamath17)
- LinkedIn: [vivek-kamath](https://www.linkedin.com/in/vivek-kamath-880a47317)
- LeetCode: [kamathvivek77](https://leetcode.com/u/kamathvivek77/)
- Codeforces: [Vivek0077](https://codeforces.com/profile/Vivek0077)
- CodeChef: [vivek0077](https://www.codechef.com/users/vivek0077)
- Blog: [vivekkamath777.blogspot.com](https://vivekkamath777.blogspot.com/)
- Email: kamathvivek91@gmail.com
## Acknowledgements
 
- Course: Human-Computer Interaction (R5CO3005T), B.Tech Computer Engineering, VJTI.
- Design references: Shneiderman's eight golden rules, Norman's principles, Nielsen's ten heuristics, Fitts' law and Hick's law.
- Layout inspiration: the sidebar-and-continuous-scroll pattern used on other student portfolios.

 
