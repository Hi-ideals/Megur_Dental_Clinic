// ============================================================
// DENTAL CLINIC WEBSITE — EDITABLE CONTENT CONFIGURATION
// Edit ANY value below to change website text, images, videos,
// links, colors, and more. No coding knowledge required.
// ============================================================

const SITE_CONTENT = {

  // ── GENERAL SETTINGS ──────────────────────────────────────
  siteName: "Megur Dental Clinic",
  tagline: "Where Smiles Meet Excellence",
  logo: {
    // Use a URL or local path: "./assets/images/logo.png"
    src: "./assets/images/logo.png",
    alt: "Megur Dental Care Logo",
    useText: false, // set true to show text logo instead of image
  },
  favicon: "", // URL or local path to favicon

  // ── COLORS (Change theme here) ────────────────────────────
  colors: {
    primary: "#0A2647",       // Deep navy
    primaryLight: "#1B4D6E",  // Rich teal
    accent: "#C9A96E",        // Gold
    accentHover: "#D4AF37",   // Bright gold
    background: "#FAFAF8",    // Warm off-white
    backgroundAlt: "#F5F1EB", // Cream
    text: "#1A1A2E",          // Near-black
    textMuted: "#6B7280",     // Muted gray
    white: "#FFFFFF",
    success: "#2D8B75",       // Teal-green
    danger: "#DC2626",
  },

  // ── NOTIFICATION BANNER ───────────────────────────────────
  notification: {
    enabled: true,
    text: "🎉 Welcome to Megur Dental Care   — Book Today!",
    link: "#booking",
    linkText: "Book Now",
    autoDismissSeconds: 15,
  },

  // ── HERO SECTION ──────────────────────────────────────────
  hero: {
    // Video: URL (YouTube/Vimeo embed or direct mp4) or local path
    video: {
      enabled: true,
      // For YouTube: use embed URL like "https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID"
      // For direct mp4: use URL or local path like "./assets/videos/hero.mp4"
      src: "assets/vdos/1.mp4",
      type: "mp4", // "mp4", "youtube", or "vimeo"
      fallbackImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
    },
    headline: "Your Smile, Our Passion",
    subheadline: "Experience world-class dental care with cutting-edge technology and a gentle, personalized touch.",
    ctaPrimary: { text: "Book Appointment", link: "#booking" },
    ctaSecondary: { text: "Call Now", link: "tel:+911234567890" },
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "13K+", label: "Happy Patients" },
      { number: "5+", label: "Expert Dentists" },
      { number: "12000+", label: "Treatments" },
    ],
  },

  // ── ABOUT SECTION ─────────────────────────────────────────
  about: {
    sectionTag: "About Us",
    headline: "A Legacy of Exceptional Dental Care",
    description: `At Megur Dental Care, we combine decades of expertise with state-of-the-art technology to deliver dental experiences that exceed expectations. Our team of highly qualified specialists is dedicated to providing personalized, comfortable, and effective treatments in a warm and welcoming environment.`,
    highlights: [
      { icon: "shield-check", title: "Certified Experts", desc: "Board-certified specialists with international training" },
      { icon: "sparkles", title: "Latest Technology", desc: "Digital X-rays, 3D scanning, laser dentistry" },
      { icon: "heart", title: "Patient-First", desc: "Gentle care in a comfortable, anxiety-free setting" },
      { icon: "clock", title: "Flexible Hours", desc: "Early morning, evening & weekend appointments" },
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    // Can also use local: "./assets/images/about.jpg"
    videoTour: {
      enabled: true,
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      buttonText: "Take a Virtual Tour",
    },
  },

  // ── TREATMENTS / SERVICES ─────────────────────────────────
  treatments: {
    sectionTag: "Our Treatments",
    headline: "Comprehensive Dental Solutions",
    subheadline: "From routine checkups to advanced cosmetic procedures, we offer a full spectrum of dental services.",
    items: [
      {
        icon: "tooth",
        title: "General Dentistry",
        description: "Comprehensive exams, cleanings, fillings, and preventive care for the whole family.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
        
      },
      {
        icon: "sparkle-tooth",
        title: "Teeth Whitening",
        description: "Professional in-office and take-home whitening for a brighter, more confident smile.",
        image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
        
      },
      {
        icon: "crown",
        title: "Dental Implants",
        description: "Permanent tooth replacement with titanium implants — natural look and feel.",
        image: "Dental Clinic/Dental Clinik/dental implant3.png",
        
      },
      {
        icon: "braces",
        title: "Orthodontics",
        description: "Traditional braces, clear aligners, and Invisalign for perfectly aligned teeth.",
        image: "Dental Clinic/Dental Clinik/orthodontic1.jpg",
        
      },
      {
        icon: "smile",
        title: "Cosmetic Dentistry",
        description: "Veneers, bonding, smile makeovers — transform your smile with artistry.",
        image: "Dental Clinic/Dental Clinik/FRACTURED TOOTH4.jpg",
        
      },
      {
        icon: "child",
        title: "Pediatric Dentistry",
        description: "Gentle, fun dental care specially designed for children of all ages.",
        image: "Dental Clinic/Dental Clinik/Pediatric Dentistry1.jpg",
        
      },
      {
        icon: "surgery",
        title: "Oral Surgery",
        description: "Wisdom teeth extraction, jaw surgery, and complex dental procedures.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
        
      },
      {
        icon: "root-canal",
        title: "Root Canal Treatment",
        description: "Pain-free root canal therapy to save and restore damaged teeth.",
        image: "Dental Clinic/Dental Clinik/Root Canal5.jpg",
        
      },
    ],
  },

  // ── BEFORE & AFTER GALLERY ────────────────────────────────
  gallery: {
    sectionTag: "Transformations",
    headline: "See the Difference",
    subheadline: "Real results from our patients — drag the slider to compare.",
    items: [
      {
        before: "assets/images/2.jpeg",
        after: "assets/images/1.jpeg",
        treatment: "Teeth Whitening",
      },
      {
        before: "assets/images/3a.jpeg",
        after: "assets/images/3b.jpeg",
        treatment: "Smile Makeover",
      },
      {
        before: "assets/images/4b.jpeg",
        after: "assets/images/4a.jpeg",
        treatment: "Dental Implants",
      },
    ],
  },

  // ── OFFERS / PROMOTIONS ───────────────────────────────────
  /*
  offers: {
    sectionTag: "Special Offers",
    headline: "Exclusive Deals for You",
    items: [
      {
        title: "Free First Consultation",
        description: "New patients get a complimentary dental checkup and treatment plan.",
        badge: "NEW PATIENT",
        icon: "gift",
        validUntil: "2026-12-31",
      },
      {
        title: "20% Off Teeth Whitening",
        description: "Professional whitening at a special price. Limited time offer.",
        badge: "LIMITED",
        icon: "percent",
        validUntil: "2026-08-31",
      },
      {
        title: "Family Package",
        description: "Bring your family — get 30% off on dental checkups for 4+ members.",
        badge: "FAMILY",
        icon: "users",
        validUntil: "2026-12-31",
      },
    ],
  },
  */

  // ── TESTIMONIALS ──────────────────────────────────────────
  testimonials: {
    sectionTag: "Testimonials",
    headline: "What Our Patients Say",
    items: [
      {
        name: "Priya Sharma",
        role: "Business Owner",
        text: "The best dental experience I've ever had. The team made me feel so comfortable, and my smile has never looked better!",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
      },
      {
        name: "Rajesh Kumar",
        role: "Software Engineer",
        text: "I was terrified of dentists, but Megur Dental Care changed that completely. Professional, gentle, and truly caring.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
      },
      {
        name: "Anita Desai",
        role: "Teacher",
        text: "My kids actually look forward to their dental visits now! The pediatric team is absolutely wonderful.",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5,
      },
      {
        name: "Vikram Singh",
        role: "Retired Colonel",
        text: "Got dental implants done here. The precision and care was military-grade. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
      },
    ],
  },

  // ── TEAM / DOCTORS ────────────────────────────────────────
  team: {
    sectionTag: "Our Team",
    headline: "Meet Our Expert Dentists",
    members: [
      {
        name: "Dr. Shwetha Megur",
        role: "Chief Dental Surgeon",
        specialization: "Implantology & Oral Surgery",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        experience: "15+ Years",
      },
      {
        name: "Dr. Sneha Patel",
        role: "Cosmetic Dentist",
        specialization: "Smile Design & Veneers",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        experience: "15+ Years",
      },
      {
        name: "Dr. Rohan Gupta",
        role: "Orthodontist",
        specialization: "Braces & Aligners",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        experience: "12+ Years",
      },
      {
        name: "Dr. Kavita Reddy",
        role: "Pediatric Dentist",
        specialization: "Children's Dentistry",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        experience: "10+ Years",
      },
    ],
  },

  // ── BOOKING / APPOINTMENT FORM ────────────────────────────
  booking: {
    sectionTag: "Book Appointment",
    headline: "Schedule Your Visit",
    subheadline: "Fill in the form below and we'll get back to you within 24 hours.",
    treatmentOptions: [
      "General Checkup",
      "Teeth Whitening",
      "Dental Implants",
      "Orthodontics / Braces",
      "Cosmetic Dentistry",
      "Root Canal Treatment",
      "Oral Surgery",
      "Pediatric Dentistry",
      "Emergency Dental Care",
      "Other",
    ],
    formAction: "", // URL for form submission (e.g., Google Forms, Formspree, etc.)
    successMessage: "Thank you! We'll contact you shortly to confirm your appointment.",
  },

  // ── CONTACT INFORMATION ───────────────────────────────────
  contact: {
    sectionTag: "Contact Us",
    headline: "Get In Touch",
    phone: "+91 7019902273",
    phoneDisplay: "+91 7019902273",
    email: "shwethamegur79@gmail.com",
    address: "8-11-57/1, Megur arcade, near forest office K.E.B Road Bidar",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.985594604085!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNCJF!5e0!3m2!1sen!2sin!4v1234567890",
    workingHours: [
      { day: "Monday – Saturday", time: "11:00 AM – 6:00 PM" },
      { day: "Sunday", time: "Only on appointment" },
    ],
    whatsapp: {
      enabled: true,
      number: "917019902273", // without + prefix
      message: "Hi! I'd like to book a dental appointment.",
      pulseOnLoad: true,
    },
  },

  // ── SOCIAL MEDIA LINKS ────────────────────────────────────
  social: {
    facebook: "https://facebook.com/royaldentalcare",
    instagram: "https://instagram.com/royaldentalcare",
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    copyright: "© 2026 Megur Dental Care. All Rights Reserved.",
    developer: { name: "Hiideals Technologies", link: "https://hiideals.com" },
    quickLinks: [
      { text: "Home", link: "#home" },
      { text: "About", link: "#about" },
      { text: "Treatments", link: "#treatments" },
      { text: "Gallery", link: "#gallery" },
      { text: "Team", link: "#team" },
      { text: "Book Appointment", link: "#booking" },
      { text: "Contact", link: "#contact" },
    ],
  },

  // ── FORM SUBMISSION (Web3Forms — free email service) ───────
  // Get your FREE access key from https://web3forms.com (no signup needed)
  // 1. Go to web3forms.com → enter your email → get access key
  // 2. Paste the key below — all form submissions will go to that email
  formService: {
    enabled: true,
    accessKey: "YOUR_ACCESS_KEY_HERE", // Replace with your Web3Forms access key
    successMessage: "Thank you! We'll get back to you within 24 hours.",
    errorMessage: "Oops! Something went wrong. Please try again or call us directly.",
  },

  // ── BACKGROUND MUSIC / AUDIO ──────────────────────────────
  audio: {
    enabled: true,
    // URL or local path to background music (calm ambient/spa music)
    src: "assets/audio/Demo a1.mp3",
    volume: 0.15, // 0 to 1
    showControl: true, // show music toggle button
    autoplayOnInteraction: true, // start music on first user click
  },

  // ── POPUP AD (shows on website launch) ─────────────────────
  popupAd: {
    enabled: true,
    delayMs: 4000, // delay after page load before showing
    headline: "✨ Get a Free Smile Assessment!",
    subtext: "Book your complimentary consultation today and get a personalized treatment plan worth ₹2,000 — absolutely FREE.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80",
    formFields: {
      name: true,
      phone: true,
      email: false, // set true to show email field
    },
    submitText: "Claim My Free Consultation",
    successMessage: "🎉 Thank you! We'll call you within 24 hours.",
    badge: "LIMITED TIME OFFER",
  },

  // ── LOADING SCREEN ────────────────────────────────────────
  loader: {
    enabled: true,
    text: "Megur Dental Care",
    minDurationMs: 2500,
  },

  // ── SCROLL MUSIC CLIPS (play on section entry) ────────────
  scrollSounds: {
    enabled: true, // plays a subtle whoosh/chime when scrolling into sections
    // Use short audio clips (1-3 sec). URL or local path.
    clips: {
      about: "https://actions.google.com/sounds/v1/cartoon/pop.ogg",
      treatments: "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
      gallery: "https://actions.google.com/sounds/v1/cartoon/cartoon_boing.ogg",
      offers: "https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg",
      booking: "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg",
    },
    volume: 0.2,
  },

  // ── SEO / META ────────────────────────────────────────────
  seo: {
    title: "Megur Dental Care — Premium Dental Clinic",
    description: "Experience world-class dental care at Megur Dental Care. Expert dentists, advanced technology, and a gentle touch. Book your appointment today!",
    keywords: "dental clinic, dentist, teeth whitening, dental implants, orthodontics, cosmetic dentistry, Bidar, Karnataka",
    ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
  },
};
