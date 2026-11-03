# SCOM

Interactive teaching materials for MSB255 Supply Chain and Operations Management,
University of Stavanger, School of Business and Law. Published with GitHub Pages and
embedded in Canvas.

## Structure

```
index.html            Shell page (keeps full screen across pages). Canvas embeds this.
home.html             Landing page with the simulation cards.
shared/               Code used by every page (fullscreen.js).
<topic>/              One folder per course topic, e.g. inventory/.
  <name>.html           Simulation
  <name>-guide.html     Learner guide
  pdf/                  PDF versions of the guides
  img/                  Images used by the guides
```

Topic folders, created when they get their first file: productivity, product-design,
forecasting, supply-chain, capacity, linear-programming, location, layout,
transportation, inventory, aggregate-planning, scheduling, quality, lean.

Pages inside a topic folder link to `../home.html` and load `../shared/fullscreen.js`.
Do not put slides or textbook material here: the repository is public.

## Licence

© 2026 Ali Türkyılmaz, University of Stavanger. The materials in this repository are
licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/): you may
share and adapt them for non-commercial purposes with attribution. See [LICENSE](LICENSE).
