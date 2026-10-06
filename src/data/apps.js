// Apps shown in the grey logo strip under the hero.
// Each logo is built from up to two parts:
//   icon      a small image before the name (in public/logos/)
//   wordmark  the app's name as an image, when it has a designed one
//   label     the app's name as plain text (used when there is no wordmark)
//   mark      a built-in drawn icon, for apps without a logo file
// Logos show in grey and get their real colours back on hover.
export const apps = [
  { name: "Kaalagune", icon: "/logos/kaalagune.webp", label: "Kaalagune" },
  { name: "PopcornPicks", icon: "/logos/popcornpicks.webp", label: "PopcornPicks" },
  { name: "Forge", icon: "/logos/forge-icon.webp", wordmark: "/logos/forge-name.webp" },
  { name: "POP Cosmetics", wordmark: "/logos/pop.webp", label: "Cosmetics" },
  { name: "ASH. portfolio", ash: true },
  { name: "Wellness Portal", mark: "leaf", label: "Wellness Portal" },
];
