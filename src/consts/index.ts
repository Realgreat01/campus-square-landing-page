export const metaTitle = "CampuzSquare";
export const metaTagline = "Campus life, served.";
export const metaDesc =
  "CampuzSquare brings campus dining, a student marketplace, and everyday services together in one student-verified account. Order ahead, buy and sell nearby, and book trusted help — all from one profile.";
export const metaKeywords = [
  "CampuzSquare",
  "Campus Chow",
  "Campus food ordering",
  "Student marketplace",
  "Campus services",
  "Market Square",
  "Service Square",
  "College app",
  "Student platform",
  "Order ahead",
  "Campus dining",
  "Buy and sell on campus",
];

export const SITE_ROUTES = ["", "/features", "/waitlist"] as const;

export const ogSize = {
  width: 1600,
  height: 800,
};

export const ogImageProps = {
  ...ogSize,
  alt: "CampuzSquare — food, finds, and favors for campus life",
  contentType: "image/png",
};

export const defaultOpenGraph = {
  siteName: "CampuzSquare",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
  locale: "en_US",
  type: "website",
};

export const defaultTwitter = {
  card: "summary_large_image",
  images: [
    {
      url: "/images/og.png",
      ...ogImageProps,
    },
  ],
};

export const currentYear = new Date().getFullYear();
