type FontPreloadLink = {
  rel: "preload";
  as: "font";
  href: string;
  type: "font/woff2";
  crossorigin?: "anonymous" | "use-credentials";
};

export const fontPreload: FontPreloadLink[] = [
  {
    rel: "preload",
    as: "font",
    href: "/fonts/museum/PPLettraMono-Ultralight.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/museum/PPLettraMono-Regular.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/museum/PPLettraMono-Medium.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/museum/PPLettraMono-Ultrabold.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },

  // PPRadioGrotesk
  {
    rel: "preload",
    as: "font",
    href: "/fonts/radio/PPRadioGrotesk-Ultralight.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/radio/PPRadioGrotesk-Light.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/radio/PPRadioGrotesk-Regular.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/radio/PPRadioGrotesk-Bold.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
  {
    rel: "preload",
    as: "font",
    href: "/fonts/radio/PPRadioGrotesk-Black.woff2",
    type: "font/woff2",
    crossorigin: "anonymous",
  },
];
