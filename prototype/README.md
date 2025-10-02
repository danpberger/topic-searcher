# Summit Navigator Prototype

This prototype explores a calmer, more structured alternative to the current APS schedule experience. It focuses on reducing overwhelm through three strategies:

1. **Progressive disclosure.** Filters are chunked into digestible cards, with heavy lists (like the 500-topic taxonomy) hidden behind a searchable modal. Chips, swimlanes, and saved filter presets surface the most common actions while keeping the rest tucked away.
2. **Spatial wayfinding.** A sticky timeline with anchored times, day swimlane, and "at a glance" sidebar help visitors orient themselves quickly. The floating filter bar keeps active constraints visible without pinning users to the top of the page.
3. **Flexible browsing modes.** A timeline mode emphasizes sequence and clashes, while the alternate card grid supports scanning by content. Interactive affordances (chips, pills, modal selections) hint at future integration with real data.

The layout is responsive and keeps important context (active filters, current day, quick filter toggles) available on both desktop and tablet widths. The topic browser modal illustrates how a large taxonomy can be chunked into clusters, alphabetical navigation, and inline search.

## Running the prototype

Serve the `prototype/` directory with any static server. For example:

```bash
cd prototype
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser to explore the interactions.
