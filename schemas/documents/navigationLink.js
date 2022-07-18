export default {
  name: "navigationLink",
  title: "Navigation Link",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          {
            title: "Internal",
            value: "int",
          },
          {
            title: "External",
            value: "ext",
          },
        ],
      },
      layout: "radio",
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ relativeOnly: true, allowRelative: true }),
    },
    {
      name: "highlight",
      title: "Highlight",
      type: "boolean",
      initialValue: false,
      description: "Show link with yellow highlight applied",
    },
    {
      name: "highlightWithNew",
      title: "Highlight with New",
      type: "boolean",
      initialValue: false,
      description: "Add prefix 'new' to the link",
    },
    {
      name: "openInNewTab",
      title: "Open in New Tab",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "linkText",
      subtitle: "url",
    },
  },
};
