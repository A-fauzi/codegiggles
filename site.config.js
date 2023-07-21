const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Akhmad Fauzi",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Android Developer",
    bio: "Memberikan sedikit edukasi programming, jangan malas untuk membaca guys!.",
    email: "akhmadfauzi9797@gmail.com",
    linkedin: "https://www.linkedin.com/in/afauzi97",
    github: "https://github.com/A-fauzi",
    instagram: "https://instagram.com/codegiggles?igshid=MzNlNGNkZWQ4Mg==",
  },
  projects: [
    {
      name: `zi-movie`,
      href: "",
    },
  ],
  // blog setting (required)
  blog: {
    title: "codegiggles",
    description: "welcome to codegiggles!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://codegiggles.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Tutorial", "Coding", "Programming"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,


    config: {

      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",


    },

  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "c442d417-af1d-498f-b539-08f20eac5d5b", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
