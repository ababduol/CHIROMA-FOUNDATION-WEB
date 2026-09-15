/* global React */
// Content/data for Chiroma Empowerment Foundation site.

const CONTENT = {
  brand: {
    name: "Chiroma",
    full: "Chiroma Empowerment Foundation",
    tagline: "EMPOWERING COMMUNITIES",
    mission:
      "To build healthier, empowered, and resilient communities by expanding access to health services and education, strengthening community-based health capacity, and supporting vulnerable populations to achieve dignity, self-reliance, and sustainable well-being.",
    vision:
      "Empowering lives. Building healthier and resilient communities.",
    address: "Metro Command Estate, Life Camp, Abuja, Nigeria",
    phone: "+234 812 526 2405",
    email: "chiromafoundation@gmail.com",
  },

  intro: {
    eyebrow: "Who we are",
    title: "Introduction",
    body:
      "Chiroma Empowerment Foundation is a humanitarian and development-focused non-profit initiative dedicated to building healthier, empowered, and resilient communities across Nigeria, with a particular focus on women, children, internally displaced persons (IDPs), and underserved, hard-to-reach, and vulnerable populations.",
    photos: [
      "photos/01-hepatitis-outreach.jpeg",
      "photos/02-school-outreach.jpeg",
      "photos/03-hygiene-children.jpeg",
      "photos/04-handwashing-demo.jpeg",
      "photos/05-2sure-volunteers.jpeg",
      "photos/06-hepatitis-testing.jpeg",
      "photos/07-vaccination.jpeg",
      "photos/08-hepatitis-screening.jpeg",
      "photos/09-hepatitis-awareness.jpeg",
      "photos/10-idp-support.jpeg",
    ],
  },

  coreValues: [
    { code: "I", title: "Integrity", body: "Operating with honesty, transparency, and accountability." },
    { code: "C", title: "Compassion", body: "Serving with empathy and respect." },
    { code: "E", title: "Equity", body: "Ensuring inclusive and fair access to opportunities and services." },
    { code: "E", title: "Evidence-Based Impact", body: "Grounding every decision, intervention, and claim of success in data, research, and community insight — and holding ourselves accountable to measurable outcomes." },
  ],

  heroStats: [
    { num: "1,800+", lbl: "Lives reached in our first months" },
    { num: "6",      lbl: "Active community programmes" },
    { num: "2026",   lbl: "Founded in Bauchi" },
  ],

  causes: [
    {
      num: "01",
      title: "Community Health & Empowerment",
      body:
        "Strengthen the knowledge, skills, agency and participation of individuals and communities while building the capacity of community-based frontline actors to promote health and deliver essential services in underserved, hard-to-reach and vulnerable communities.",
      icon: "users",
      objectives: [
        "Improve health literacy, healthy behaviours and informed health-seeking among individuals, families and communities, particularly in underserved and vulnerable settings.",
        "Strengthen the competencies and effectiveness of community-based frontline actors — including traditional birth attendants, community health officers, volunteers and other community health providers — to promote health and deliver appropriate, safe and timely services.",
        "Increase meaningful community participation and ownership in health promotion, disease prevention and local health initiatives.",
        "Strengthen community linkages with formal health services to improve referral, continuity of care and access to essential health support.",
      ],
    },
    {
      num: "02",
      title: "Health Security & Community Resilience",
      body:
        "Strengthen community and local-level capacity to prevent, anticipate, detect, prepare for, respond to and recover from public health threats and emergencies, while supporting national health-security priorities through collaboration with NCDC and other relevant government and development partners.",
      icon: "shield",
      objectives: [
        "Strengthen community and local-level capacity for prevention, preparedness, early detection, risk communication and response to public health threats and emergencies.",
        "Support communities and frontline actors to contribute effectively to disease surveillance, early warning, reporting and response systems in collaboration with NCDC and relevant government institutions.",
        "Strengthen community resilience and continuity of essential health and social support services during outbreaks, disasters, displacement and other shocks.",
        "Promote community understanding and ownership of One Health, zoonotic disease prevention, antimicrobial resistance and other emerging health-security priorities.",
      ],
    },
    {
      num: "03",
      title: "Digital Health, Technology & AI Innovation",
      body:
        "Harness digital technologies, artificial intelligence, data and innovative approaches to improve health information, community-based service delivery, surveillance, decision-making and access to solutions for underserved populations.",
      icon: "chip",
      objectives: [
        "Apply appropriate digital technologies and AI to expand access to reliable health information, education and community-based health support, particularly in hard-to-reach settings.",
        "Develop and support technology-enabled solutions that strengthen the capacity, connectivity and effectiveness of community-based frontline health actors.",
        "Promote the responsible use of data, analytics and AI to strengthen surveillance, programme planning, risk assessment and decision-making.",
        "Identify, test, evaluate and scale innovative, ethical, affordable and locally appropriate technology solutions that address priority health challenges.",
      ],
    },
    {
      num: "04",
      title: "Partnerships, Resource Mobilisation & Sustainable Impact",
      body:
        "Build strategic partnerships and mobilise financial, technical and institutional resources to strengthen programmes, scale effective solutions and achieve sustainable, measurable community impact.",
      icon: "handshake",
      objectives: [
        "Establish strategic partnerships with government, development partners, academia, civil society, communities and the private sector to advance the Foundation's mission.",
        "Mobilise diversified financial, technical and institutional resources to expand the Foundation's reach and sustainability.",
        "Track and report on partnership performance and resource utilisation to funders and stakeholders, in support of transparency and accountability.",
        "Develop, document and scale effective, locally led and cost-conscious interventions that can be sustained, replicated and adapted across communities.",
      ],
    },
    {
      num: "05",
      title: "Evidence-Based Interventions & Learning",
      body:
        "Generate, apply, and share rigorous evidence — through research, monitoring, evaluation, and community insight — to design effective interventions, demonstrate impact, and continuously strengthen the Foundation's programmes.",
      icon: "check",
      objectives: [
        "Strengthen the Foundation's monitoring, evaluation, research and learning (MERL) systems to generate credible, timely evidence on programme reach, quality and impact.",
        "Ensure interventions are designed, tested and adapted based on evidence, data and community insight rather than assumption.",
        "Document, package and disseminate lessons, evidence and best practices to inform programming, policy dialogue and sector-wide learning.",
        "Institutionalise a culture of reflection, adaptive management and continuous improvement across all programmes.",
      ],
    },
  ],

  impactStats: [
    { n: "1.8",  unit: "K",   lbl: "Direct beneficiaries reached in our first months", tag: "PEOPLE" },
    { n: "2,400", unit: "",  lbl: "Free hepatitis tests run in a single outreach day", tag: "HEALTHCARE" },
    { n: "1.2",  unit: "K",   lbl: "Schoolchildren trained in Be2Sure hygiene programme", tag: "HYGIENE" },
    { n: "98",   unit: "%",   lbl: "Of funds reach programmes on the ground", tag: "TRANSPARENCY" },
  ],

  stories: {
    feature: {
      title: "Hepatitis screening reaches 2,400 in a single day",
      body:
        "Working with the Bauchi State Ministry of Health, we set up free hepatitis B and C testing under one tent — mothers, daughters, and grandmothers shoulder to shoulder. By sundown the lab had run 2,400 tests, and 380 women started on care the same week.",
      name: "Faizu Ahmad",
      meta: "Founder · Bauchi Outreach Day",
      badge: "HEALTHCARE · 2026",
      img: "photos/01-hepatitis-outreach.jpeg",
    },
    items: [
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
    ],
  },

  pullQuote:
    "Every Naira given is a hand extended — into a clinic, a classroom, a market stall. We don't aim to give people a future; we walk alongside them while they build one.",
  pullAttrib: "Faizu Ahmad · Founder",

  donateAmounts: [
    { v: "₦5,000",   impact: "Two months of school supplies for a child" },
    { v: "₦10,000",  impact: "Antenatal kit for one expecting mother" },
    { v: "₦25,000",  impact: "One week of mobile clinic outreach", popular: true },
    { v: "₦50,000",  impact: "Sewing kit + 6-week vocational training" },
    { v: "₦100,000", impact: "Term scholarship for a displaced girl" },
    { v: "Custom",   impact: "Choose your own amount" },
  ],

  involve: [
    {
      n: "01",
      title: "Volunteer your time",
      body: "Join outreach weekends, tutor at our learning centres, or contribute a professional skill.",
      link: "Apply to volunteer",
    },
    {
      n: "02",
      title: "Partner with us",
      body: "We work with corporates, NGOs, and government agencies on co-funded community programmes.",
      link: "Start a conversation",
    },
    {
      n: "03",
      title: "Fundraise in your community",
      body: "Run a campaign at your school, mosque, church, or workplace and we'll provide the toolkit.",
      link: "Get the fundraising kit",
    },
  ],

  timeline: [
    { year: "Jan 2026",  title: "Founded in Bauchi",            body: "Chiroma Empowerment Foundation is registered as a community-based non-profit serving women, children, and underserved communities." },
    { year: "Feb 2026",  title: "First outreach weekend",       body: "Free hepatitis B and C screening for 2,400 community members in partnership with the Bauchi State Ministry of Health." },
    { year: "Mar 2026",  title: "Be2Sure hygiene campaign",     body: "Handwashing and hygiene education programme rolled out across 3 primary schools, training 1,200 children." },
    { year: "Apr 2026",  title: "Out-of-school outreach",       body: "Education and vaccination outreach reaches 600 out-of-school children across rural Bauchi." },
    { year: "2026\u201327", title: "What's next",               body: "Expanding mobile clinics across Bauchi LGAs and launching a girls' scholarship pilot for the new academic year." },
  ],

  team: [
    { name: "Nasir Ahmed Omar",     role: "Lead, Health Security & Technical Strategy",              img: "photos/team-1.jpg" },
    { name: "Fatima Bello",         role: "Lead, Partnerships, Grants and Resource Mobilisation",     img: "photos/team-2.jpg" },
    { name: "Faizu Ahmad",      role: "Lead, Operations, Finance and Administration",             img: "photos/team-3.jpg" },
    { name: "Abdulhalim Abdullahi", role: "Lead, Community Programmes, Empowerment and Communications", img: "photos/team-4.jpg" },
  ],

  gallery: [
    { cls: "gi-1", src: "photos/07-vaccination.jpeg",        label: "VACCINATION OUTREACH" },
    { cls: "gi-2", src: "photos/02-school-outreach.jpeg",    label: "SCHOOL VISIT \u00b7 BAUCHI" },
    { cls: "gi-3", src: "photos/05-2sure-volunteers.jpeg",   label: "VOLUNTEERS" },
    { cls: "gi-4", src: "photos/06-hepatitis-testing.jpeg",  label: "HEPATITIS TESTING" },
    { cls: "gi-5", src: "photos/04-handwashing-demo.jpeg",   label: "HYGIENE PROGRAMME" },
    { cls: "gi-6", src: "photos/03-hygiene-children.jpeg",   label: "COMMUNITY EDUCATION" },
    { cls: "gi-7", src: "photos/09-hepatitis-awareness.jpeg", label: "HEPATITIS AWARENESS EVENT" },
    { cls: "gi-8", src: "photos/02-school-outreach.jpeg",    label: "OUT-OF-SCHOOL OUTREACH" },
    { cls: "gi-9", src: "photos/10-idp-support.jpeg",        label: "INTERNALLY DISPLACED PERSONS" },
  ],
};

window.CONTENT = CONTENT;
