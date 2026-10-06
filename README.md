# Taresh Guleria — personal site

Eleven static pages. No build step, no framework, no dependencies.
Double-click index.html and it works.

    index.html          home (LPBF video loop + the graded ring)
    about.html          about
    work.html           project index
    work-01..05.html    the five project pages
    publications.html   9 papers, full author lists, DOIs
    capabilities.html   skills
    contact.html        details + enquiry box
    resume.pdf          Resume_Taresh_Guleria_2026.pdf
    cv.pdf              academic CV
    img/                all media, already web-optimised
    favicon.svg         tab icon

About 3.1 MB in total, which loads fast anywhere.

## Media

    hero-lpbf.mp4            10 s silent loop, 1280x1008, 206 KB  (home)
    graded-ring.jpg          the heat-tinted graded ring          (home, work-01)
    hand-actuation.mp4       12 s silent loop, 854x480, 280 KB    (work-01)
    printability-map.jpg     power vs speed process window        (work-01)
    single-tracks.jpg        four single-track cases              (work-01)
    portrait.jpg             you at the ProX 200                  (about)
    sealing-ring-designs.jpg two FG ring designs, 2-step and 7-step (work-02)
    sealing-ring.jpg         three-stage engagement render        (work-02)
    metasurface-model.jpg    CAD model of one interlocking face   (work-03)
    metasurfaces.jpg         two as-built interlocking elements   (work-03)
    meltpool-maps.jpg        melt pool width/depth contour grid   (work-04)
    adaptive-parameters.jpg  fixed vs adaptive build comparison   (work-04)

Your original `pritabilitymap.png` was one wide image holding two different
things. It is now split into two figures: the process window on its own, and
the four single-track cases on their own. Both read better at page width than
the combined version did, and each gets its own caption.

Both videos were re-encoded from your originals: cropped to 16:9 where needed,
audio stripped, scaled down and compressed. The LPBF original was 50 MB. It is
now 206 KB. Your originals are untouched.

## The typeface

Apple's own stack:

    -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
    "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif

Real SF Pro on any Mac, iPhone or iPad. Apple doesn't license SF Pro as a
webfont, so Windows and Android fall back to Inter.

## Colour

Two variables near the top of the style block in each page:

    --accent:#7D5E15        light tiles
    --accent-dark:#C9A14A   dark tiles

Both sampled from the heat tint on the graded ring. Contrast 5.5:1 and 8:1.

## Contact page

Current role, street address, phone and email, plus an enquiry box. The box has
no server behind it: it builds a pre-filled mailto link and hands it to the
visitor's email app. Nothing is sent or stored by the page, which is the only
honest option on static hosting.

A public page carrying a street address and phone number will get scraped. Both
sit in one block in contact.html if you ever want them out.

## Publishing

New public GitHub repo named yourusername.github.io, drag the files from
inside this folder into it (the files, not the folder, but keep img as a
folder), commit, then Settings > Pages > deploy from main, root.

## Still open

- GitHub URL, if you want one in the footer
- The EOS page (work-05) is worth an NDA check before this goes public
