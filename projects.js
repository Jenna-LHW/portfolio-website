const PROJECTS = [
  {
    id: "unifind",
    title: "UniFind",
    tag: "Full-Stack",
    date: "2026",
    thumbnail: "assets/unifind-thumbnail.jpeg",
    gradient: "linear-gradient(135deg,#1c2b3d,#3D3AFE)",
    pitch: "A full-stack Lost &amp; Found platform for university students and staff to report, search, and recover lost or found items.",
    role: "Solo — extended from a group university assignment",
    timeline: "2026",
    stack: "Django · Django REST Framework · JWT · SQLite · Pillow",
    links: {
      demo: "https://www.youtube.com/watch?v=TUS9zCClP84",
      source: "https://github.com/Jenna-LHW/UniFind"
    },
    problem: "University lost-and-found processes are usually informal — noticeboards, WhatsApp groups, word of mouth — which makes it hard to verify a claim is legitimate or track what's actually happened to an item. I wanted a structured system built specifically for university students and staff.",
    approach: "UniFind is built with Django and Django REST Framework, exposing a full JWT-secured REST API alongside a server-rendered UI. Users report lost or found items with photos, and any claim submitted goes through an admin-verified recovery flow before it's marked resolved — so ownership is checked by a person, not just a form.",
    features: [
      { title: "Verified claim flow", body: "Claims trigger an in-app notification to the item's owner and require admin approval before the item is marked resolved, guarding against false claims." },
      { title: "University-only accounts", body: "Registration is restricted to @uom.ac.mu email addresses, keeping the platform limited to actual students and staff." },
      { title: "Reviews &amp; admin tools", body: "A star-rated review system with likes and admin replies, plus a full admin panel for managing listings, claims, and contact messages." }
    ],
    gallery: [
      "assets/unifind-homepage.png",
      "assets/unifind-lostitem.png",
      "assets/unifind-notificationpage.png"
    ],
    results: [
      { num: "3", label: "user roles supported: student, staff, and admin" }, 
      { num: "6", label: "core features: item reporting, claims, notifications, reviews, contact system and role-based access control" },
      { num: "20+", label: "API endpoints across lost items, found items, claims, notifications, reviews and contact messages" }      
    ],
    reflection: "The recent-items list on the home page isn't clickable yet, and the claim submission page could use a cleaner, more guided UI. I'd also like to swap the static campus map for something interactive, and let users edit a review after submitting it instead of being locked in."
  }
];