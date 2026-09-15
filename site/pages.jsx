/* global React, Icon, CONTENT */
const { useState: useStateP, useEffect: useEffectP } = React;

/* ============================================================
   About page
   ============================================================ */
const ABOUT_ACCORDION_ITEMS = [
  {
    title: "Our Mission",
    render: () => (
      <>
        <p>{CONTENT.brand.mission}</p>
        <p style={{ marginTop: 12 }}>
          We work in integrated cohorts — a mother enrolled in our antenatal programme is invited to vocational training; her daughter is offered a school scholarship. Health, education, and livelihood, braided together.
        </p>
      </>
    ),
  },
  {
    title: "Our Vision",
    render: () => (
      <>
        <p>{CONTENT.brand.vision}</p>
        <p style={{ marginTop: 12 }}>
          We measure our work not in headcount but in second visits: people who return, who bring a neighbour, who eventually outgrow us. That's the metric that matters.
        </p>
      </>
    ),
  },
  {
    title: "Core Values",
    render: () => (
      <div className="acc-values">
        {CONTENT.coreValues.map((v) => (
          <div className="acc-value" key={v.title}>
            <span className="code">{v.code}</span>
            <div>
              <h4>{v.title}</h4>
              <p>{v.body}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Strategic Pillars",
    render: () => (
      <div className="causes acc-causes">
        {CONTENT.causes.map((c) => (
          <div className="cause" key={c.num}>
            <div className="num">{c.num}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <div className="glyph"><Icon name={c.icon} size={28} /></div>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutAccordion = () => {
  const [open, setOpen] = useStateP(-1);
  const photos = CONTENT.intro.photos || [];
  const [photoIdx, setPhotoIdx] = useStateP(0);
  useEffectP(() => {
    if (photos.length < 2) return undefined;
    const id = setInterval(() => {
      setPhotoIdx((i) => (i + 1) % photos.length);
    }, 3800);
    return () => clearInterval(id);
  }, [photos.length]);
  return (
    <section className="section about-accordion">
      <div className="container">
        <div className="about-grid-2col">
          <div className="acc-list">
            {ABOUT_ACCORDION_ITEMS.map((it, i) => (
              <div className={"acc-item" + (open === i ? " open" : "")} key={it.title}>
                <button
                  type="button"
                  className="acc-head"
                  onClick={() => setOpen(open === i ? -1 : i)}
                  aria-expanded={open === i}
                >
                  <span>{it.title}</span>
                  <span className="acc-plus" aria-hidden="true">{open === i ? "\u2212" : "+"}</span>
                </button>
                {open === i && <div className="acc-body">{it.render()}</div>}
              </div>
            ))}
          </div>

          <article className="story-feature about-quote">
            <div className="img">
              <img key={photoIdx} src={photos[photoIdx]} alt="Chiroma Empowerment Foundation community outreach" className="intro-shuffle-img" />
            </div>
            <p className="body" style={{ fontStyle: "italic", fontSize: 17, lineHeight: 1.6, color: "var(--ink)" }}>
              "Our work is integrated by design — a girl's education depends on her mother's livelihood, which depends on her family's health. We invest in all four, together."
            </p>
            <div className="person">
              <div className="avatar">F</div>
              <div>
                <div className="name">Faizu Ahmad</div>
                <div className="meta">Founder, Chiroma Empowerment Foundation</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const AboutPage = ({ go }) => (
  <main>
    <AboutAccordion />

    <section className="section">
      <div className="container">
        <div style={{ marginBottom: 40 }}>
          <span className="eyebrow heading-lg"><span className="bullet" /> Meet Our Team</span>
        </div>
        <div className="team-grid">
          {CONTENT.team.map((m) => (
            <div className="member" key={m.name}>
              <div className="avatar"><img src={m.img} alt={m.name} /></div>
              <div className="info">
                <h4>{m.name}</h4>
                <div className="role">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

/* ============================================================
   Donate page
   ============================================================ */
const DonatePage = () => {
  const [freq, setFreq] = useStateP("once");
  const [amountIdx, setAmountIdx] = useStateP(2);
  const [custom, setCustom] = useStateP("");
  const [pay, setPay] = useStateP("card");

  const amounts = CONTENT.donateAmounts.slice(0, 5); // exclude "Custom"
  const customMode = amountIdx === 5;

  const display = customMode
    ? (custom ? "₦" + Number(custom).toLocaleString() : "₦—")
    : amounts[amountIdx]?.v || "₦25,000";

  return (
    <main className="donate-page">
      <div className="container">
        <div className="donate-page-grid">
          <div>
            <span className="eyebrow"><span className="bullet" /> Support our work</span>
            <h1 style={{ marginTop: 20 }}>
              A donation is a<br />programme on the<br /><em>ground</em>.
            </h1>
            <p className="lead">
              Your gift directly funds maternal healthcare, girls' education, vocational training, and humanitarian relief for displaced families in northern Nigeria.
            </p>
            <div className="badges">
              <span className="badge"><span className="dot" /> Tax-deductible receipt</span>
              <span className="badge"><span className="dot" /> 98% to programmes</span>
              <span className="badge"><span className="dot" /> Quarterly impact report</span>
              <span className="badge"><span className="dot" /> 256-bit SSL secure</span>
            </div>

            <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--rule)" }}>
              <span className="eyebrow"><span className="bullet" /> Where your money goes</span>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Healthcare programmes", 38],
                  ["Education & scholarships", 28],
                  ["Livelihoods training", 18],
                  ["Humanitarian relief", 14],
                  ["Operations & overhead", 2],
                ].map(([lbl, pct]) => (
                  <div key={lbl}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                      <span>{lbl}</span>
                      <span style={{ fontFamily: "var(--mono)", color: "var(--ink-3)", fontSize: 11, letterSpacing: ".08em" }}>{pct}%</span>
                    </div>
                    <div style={{ height: 6, background: "var(--bg-2)", borderRadius: 999, overflow: "hidden" }}>
                      <div style={{ width: pct + "%", height: "100%", background: lbl === "Operations & overhead" ? "var(--ink-3)" : "var(--brand)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="donate-form">
            <div className="seg">
              <button className={freq === "once" ? "active" : ""} onClick={() => setFreq("once")}>Give once</button>
              <button className={freq === "monthly" ? "active" : ""} onClick={() => setFreq("monthly")}>Monthly</button>
            </div>

            <div className="label">
              <span className="a">Select an amount (₦)</span>
              <span className="b">Tap to see impact</span>
            </div>
            <div className="amount-grid">
              {CONTENT.donateAmounts.map((a, i) => (
                <button
                  key={i}
                  className={"amount" + (amountIdx === i ? " active" : "")}
                  onClick={() => setAmountIdx(i)}
                  type="button"
                >
                  {a.popular && <span className="ribbon">Popular</span>}
                  <div className="v">{a.v}</div>
                  <div className="impact-line">{a.impact}</div>
                </button>
              ))}
            </div>

            {customMode && (
              <div className="custom-row">
                <span className="symb">₦</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                />
              </div>
            )}

            <div className="label" style={{ marginTop: 28 }}>
              <span className="a">Payment method</span>
            </div>
            <div className="pay-methods">
              {[
                { k: "card", name: "Card", meta: "Visa, Mastercard, Verve" },
                { k: "bank", name: "Bank transfer", meta: "NGN account" },
                { k: "ussd", name: "USSD", meta: "Mobile bank short code" },
              ].map((p) => (
                <button
                  key={p.k}
                  className={"pay" + (pay === p.k ? " active" : "")}
                  onClick={() => setPay(p.k)}
                  type="button"
                >
                  <span className="pname">{p.name}</span>
                  <span className="pmeta">{p.meta}</span>
                </button>
              ))}
            </div>

            <div className="summary">
              <div>
                <div className="total">{display}</div>
                <div className="freq">{freq === "monthly" ? "every month, recurring" : "one-time donation"}</div>
              </div>
              <Icon name="heart" size={28} />
            </div>
            <button className="submit" type="button">
              Donate {display} {freq === "monthly" ? "monthly" : "now"}
            </button>
            <div className="secure">
              <Icon name="lock" size={14} /> Secure 256-bit SSL encrypted payment
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* ============================================================
   Causes / Programs page (deep dive)
   ============================================================ */
const CausesPage = ({ go }) => {
  const all = [
    {
      meta: "HEALTHCARE · MAR 2026",
      title: "Free hepatitis B and C testing: 2,400 in one outreach day.",
      img: "photos/06-hepatitis-testing.jpeg",
    },
    {
      meta: "EDUCATION · FEB 2026",
      title: "Out-of-school programme reaches 600 children in rural Bauchi.",
      img: "photos/02-school-outreach.jpeg",
    },
    {
      meta: "HYGIENE · JAN 2026",
      title: "Be2Sure handwashing campaign trains 1,200 schoolchildren.",
      img: "photos/04-handwashing-demo.jpeg",
    },
    {
      meta: "HEALTHCARE · DEC 2025",
      title: "Vaccination drive reaches 1,500 women in a single afternoon.",
      img: "photos/07-vaccination.jpeg",
    },
    {
      meta: "COMMUNITY · NOV 2025",
      title: "Volunteers gather for the largest community outreach yet.",
      img: "photos/05-2sure-volunteers.jpeg",
    },
    {
      meta: "EDUCATION · OCT 2025",
      title: "Hygiene education programme expands to three new schools.",
      img: "photos/03-hygiene-children.jpeg",
    },
  ];
  return (
    <main>
      <section className="section causes-projects-section">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <span className="eyebrow heading-lg"><span className="bullet" /> Our Projects</span>
          </div>
          <div className="story-list" style={{ maxWidth: 920 }}>
            {all.map((s, i) => (
              <article className="story-item" key={i}>
                <div className="thumb"><img src={s.img} alt="" /></div>
                <div>
                  <div className="meta">{s.meta}</div>
                  <h4>{s.title}</h4>
                </div>
                <div className="read"><Icon name="arrow-ur" size={14} /></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

/* ============================================================
   Stories page
   ============================================================ */
const StoriesPage = () => (
  <main>
    <section className="about-hero">
      <div className="container" style={{ minHeight: "50vh" }}>
        <span className="eyebrow"><span className="bullet" /> Resources</span>
        <h1 style={{ marginTop: 18 }}>
          Coming soon.
        </h1>
      </div>
    </section>
  </main>
);

/* ============================================================
   Gallery page
   ============================================================ */
const GalleryPage = () => (
  <main className="gallery-page">
    <div className="container">
      <span className="eyebrow"><span className="bullet" /> Field gallery</span>
      <h1 style={{ marginTop: 18, fontFamily: "var(--serif)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1.0, marginBottom: 16 }}>
        From the field,<br />on the ground.
      </h1>
      <p style={{ fontSize: 17, color: "var(--ink-2)", maxWidth: 640, marginBottom: 48 }}>
        Photographs from outreach weekends, classrooms, training centres, and graduations across Bauchi, Gombe, and surrounding states.
      </p>

      <div className="gallery-grid">
        {CONTENT.gallery.map((g, i) => (
          <div className={"gallery-item " + g.cls} key={i}>
            <img src={g.src} alt={g.label} loading="lazy" />
            <span className="label">{g.label}</span>
          </div>
        ))}
      </div>
    </div>
  </main>
);

/* ============================================================
   Contact page
   ============================================================ */
// ⚠️ STEP 1: Replace "YOUR_FORM_ID" below with your real Formspree form ID.
// You get this after creating a form at https://formspree.io — it looks like
// "https://formspree.io/f/abcdwxyz". Just swap the ID part in the string below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojggddv";

const ContactPage = () => {
  const [status, setStatus] = useStateP("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="eyebrow"><span className="bullet" /> Get in touch</span>
            <p className="lead" style={{ marginTop: 18 }}>
              Whether you'd like to volunteer, partner, fundraise, or simply learn more about our work — we'd love to hear from you.
            </p>

            <div className="contact-info">
              <div className="info-row">
                <div className="lbl"><Icon name="pin" size={12} /> &nbsp;Address</div>
                <div className="val">{CONTENT.brand.address}</div>
              </div>
              <div className="info-row">
                <div className="lbl"><Icon name="phone" size={12} /> &nbsp;Phone</div>
                <div className="val">{CONTENT.brand.phone}</div>
              </div>
              <div className="info-row">
                <div className="lbl"><Icon name="mail" size={12} /> &nbsp;Email</div>
                <div className="val">{CONTENT.brand.email}</div>
              </div>
              <div className="info-row">
                <div className="lbl">Office hours</div>
                <div className="val">Monday — Friday · 9:00 to 17:00 WAT</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="row2">
              <div className="field">
                <label>First name</label>
                <input type="text" name="first_name" placeholder="Aisha" required />
              </div>
              <div className="field">
                <label>Last name</label>
                <input type="text" name="last_name" placeholder="Mohammed" required />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="you@email.com" required />
            </div>
            <div className="field">
              <label>I'd like to</label>
              <select name="reason" defaultValue="volunteer">
                <option value="volunteer">Volunteer my time</option>
                <option value="partner">Partner with the foundation</option>
                <option value="fundraise">Run a fundraiser</option>
                <option value="learn">Learn about your programmes</option>
                <option value="other">Something else</option>
              </select>
            </div>
            <div className="field">
              <label>Message</label>
              <textarea rows={4} name="message" placeholder="Tell us a little about why you're getting in touch..." required />
            </div>
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : <>Send message <Icon name="arrow-right" size={14} /></>}
            </button>
            {status === "success" && (
              <p style={{ marginTop: 12, color: "green" }}>Thanks — your message has been sent. We'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p style={{ marginTop: 12, color: "crimson" }}>Something went wrong sending your message. Please try again or email us directly.</p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

Object.assign(window, {
  AboutPage, DonatePage, CausesPage, StoriesPage, GalleryPage, ContactPage,
});