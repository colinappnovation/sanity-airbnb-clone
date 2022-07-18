export default {
  name: "hero",
  title: "Hero",
  type: "document",
  groups: [
    {
      name: "main",
      title: "Main Details",
    },
    {
      name: "options",
      title: "Options",
    },
  ],
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      group: "main",
      options: {
        hotspot: true,
      },
    },
    {
      name: "subTitle",
      title: "Sub-title",
      type: "string",
      group: "main",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "main",
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
      group: "main",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navigationLink" }] }],
      validation: (Rule) => Rule.min(1).max(2),
      group: "main",
    },
    {
      name: "topHero",
      title: "Top Hero",
      type: "boolean",
      group: "options",
      initialValue: false,
    },
    {
      name: "reverse",
      title: "Reverse",
      type: "boolean",
      description: "Flip the image and text",
      group: "options",
      initialValue: false,
    },
    {
      name: "inset",
      title: "Inset",
      type: "boolean",
      description:
        "When YES will stop image rendering as primary with 8:9 / 3:2 / 1:1 aspect ratios",
      group: "options",
      initialValue: false,
    },
    {
      name: "reverseFullImage",
      title: "Reverse Full Image",
      type: "boolean",
      description:
        "This field works only for 'half' variant with reverse set to 'true'.",
      group: "options",
      initialValue: false,
      hidden: ({document}) => document?.variant != 'half'
    },
    {
      name: "baseLayout",
      title: "Base Layout",
      type: "string",
      initialValue: "standardLg",
      options: {
        list: [
          { title: "Full Bleed", value: "fullBleed" },
          { title: "Standard Large", value: "standardLg" },
        ],
      },
      group: "options",
    },
    {
      name: "variant",
      title: "Variant",
      type: "string",
      initialValue: "half",
      options: {
        list: [
          { title: "PWA", value: "pwa" },
          { title: "Button Card", value: "buttonCard" },
          { title: "Splash", value: "splash" },
          { title: "Extra", value: "extra" },
          { title: "Half", value: "half" },
          { title: "Stage Image", value: "stageImage" },
          { title: "Stage Illustration", value: "stageIllustration" },
          { title: "Case Study", value: "caseStudy" },
          { title: "Tabbed", value: "tabbed" },
          { title: "PWA Primary", value: "pwaPrimary" },
        ],
      },
      group: "options",
    },
    {
      name: "bgColor",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "Grau", value: "grau" },
          { title: "Hintergrund-Grau", value: "hintergrund-grau" },
          { title: "Karten-Blau", value: "karten-blau" },
          { title: "Support PWA Green", value: "support-pwa-green" },
          { title: "Weib", value: "weib" },
          { title: "PWA Green", value: "pwa-green" },
        ],
      },
      group: "options",
    },
  ],
};
