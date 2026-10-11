# SCOM

Interactive teaching materials for MSB255 Supply Chain and Operations Management,
University of Stavanger, School of Business and Law. Published with GitHub Pages and
embedded in Canvas.

## Structure

```
index.html            Shell page (keeps full screen across pages). Canvas embeds this.
home.html             Landing page with the simulation cards.
formula-sheet/        Course formula sheet (study aid).
formula-sheet.html    Redirect to formula-sheet/ (keeps the old Canvas link working).
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
