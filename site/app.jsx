/* global React, ReactDOM,
   TopBar, Hero, Strip, Intro, Causes, Impact, Stories, Pull, DonateCTA, Involve, Footer,
   AboutPage, DonatePage, CausesPage, StoriesPage, GalleryPage, ContactPage,
   TweaksPanel, useTweaks, TweakSection, TweakRadio, TweakSelect */

const { useState: useS, useEffect: useE } = React;

/* ============================================================
   Routing
   ============================================================ */
const ROUTES = ["home", "about", "causes", "stories", "gallery", "donate", "contact"];

function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "");
  if (!h) return "home";
  const r = h.split("/")[0];
  return ROUTES.includes(r) ? r : "home";
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "default",
  "heroVariant": "split",
  "fontPair": "bricolage"
}/*EDITMODE-END*/;

/* ============================================================
   App
   ============================================================ */
function App() {
  const [route, setRoute] = useS(parseHash());
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useE(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Scroll-reveal: tag common candidates with .reveal, then observe.
  useE(() => {
    const selectors = [
      ".section-head",
      ".cause",
      ".stat",
      ".story-feature",
      ".story-item",
      ".donate-card",
      ".donate-tiers",
      ".inv-card",
      ".tier",
      ".member",
      ".timeline-row",
      ".gallery-item",
      ".pull blockquote",
      ".pull .attrib",
      ".footer-megaword",
      ".about-hero h1",
      ".about-hero .lead",
      ".donate-page h1",
      ".donate-page .lead",
      ".contact-grid h1",
      ".contact-grid .lead",
    ];
    let rafId = 0;
    let io = null;
    // Defer one frame so React has committed the new route's DOM
    rafId = requestAnimationFrame(() => {
      const els = document.querySelectorAll(selectors.join(","));
      els.forEach((el) => {
        el.classList.add("reveal");
        if (el.matches(".cause, .stat, .story-item, .inv-card, .tier, .member, .gallery-item, .timeline-row")) {
          const idx = [...el.parentElement.children].indexOf(el);
          el.style.setProperty("--reveal-delay", (idx * 60) + "ms");
        }
      });
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -5% 0px", threshold: 0 });
      // observe both newly-tagged and any pre-tagged (.reveal on hero)
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));

      // Safety net: anything that's already on-screen at this moment should
      // reveal immediately (IO can miss some edge cases on route change).
      requestAnimationFrame(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add("in");
            io && io.unobserve(el);
          }
        });
      });
    });
    return () => {
      cancelAnimationFrame(rafId);
      io && io.disconnect();
    };
  }, [route]);

  const go = (r) => {
    window.location.hash = "#/" + r;
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // apply palette class to root
  const paletteClass =
    t.palette === "earth" ? "palette-earth" :
    t.palette === "night" ? "palette-night" :
    t.palette === "bone"  ? "palette-bone"  : "";

  // apply font pair to root via inline style
  const fontVars = (() => {
    switch (t.fontPair) {
      case "modern-sans":
        return {
          "--display": "'Manrope', system-ui, sans-serif",
          "--serif":   "'Instrument Serif', serif",
          "--sans":    "'Manrope', system-ui, sans-serif",
        };
      case "editorial":
        return {
          "--display": "'Instrument Serif', serif",
          "--serif":   "'Instrument Serif', serif",
          "--sans":    "'Manrope', system-ui, sans-serif",
        };
      case "bricolage":
      default:
        return {
          "--display": "'Bricolage Grotesque', system-ui, sans-serif",
          "--serif":   "'Instrument Serif', serif",
          "--sans":    "'Manrope', system-ui, sans-serif",
        };
    }
  })();

  return (
    <div className={"page " + paletteClass} style={fontVars}>
      <TopBar route={route} go={go} />

      {route === "home" && (
        <main>
          <Intro />
          <Hero go={go} variant={t.heroVariant} />
          <Strip />
        </main>
      )}
      {route === "about"   && <AboutPage   go={go} />}
      {route === "causes"  && <CausesPage  go={go} />}
      {route === "stories" && <StoriesPage go={go} />}
      {route === "donate"  && <DonatePage  go={go} />}
      {route === "gallery" && <GalleryPage go={go} />}
      {route === "contact" && <ContactPage go={go} />}

      <Footer go={go} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Palette">
          <TweakSelect
            label="Color palette"
            value={t.palette}
            onChange={(v) => setTweak("palette", v)}
            options={[
              { value: "default", label: "Bone + Forest + Amber (default)" },
              { value: "earth",   label: "Warm earth — Clay + Teal" },
              { value: "bone",    label: "Editorial bone — Cream + Forest + Clay" },
              { value: "night",   label: "Night + Gold (dark)" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Hero layout">
          <TweakRadio
            label="Hero variant"
            value={t.heroVariant}
            onChange={(v) => setTweak("heroVariant", v)}
            options={[
              { value: "split",     label: "Split" },
              { value: "stacked",   label: "Stacked" },
              { value: "statement", label: "Statement" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Type pairing">
          <TweakSelect
            label="Font pair"
            value={t.fontPair}
            onChange={(v) => setTweak("fontPair", v)}
            options={[
              { value: "bricolage",   label: "Bricolage Grotesque + Instrument Serif" },
              { value: "modern-sans", label: "Manrope only (modern sans)" },
              { value: "editorial",   label: "Instrument Serif only (full editorial)" },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
