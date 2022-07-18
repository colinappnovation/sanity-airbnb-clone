// icon
// icon size
// icon background color
// image
// body - rich text
// vertical - boolean


export default {
    name: 'listingBlock',
    title: 'Listing Block',
    type: 'document',
    fields: [{
        name: "icon",
        title: "Icon",
        type: "string",
        options: {
            list: [{ title: '', value: '' }]
        }
    },
    {
        name: "iconSize",
        title: "Icon Size",
        type: "string",
        optons: {
            list: [{ title: 'Base', value: 'base' },
            { title: 'Large', value: 'large' },
            { title: 'Small', value: 'small' },
            { title: 'Meduim', value: 'meduim' }]
        }
    },
    {
        name: "iconBackgroundColor",
        title: "Icon Background Color",
        type: "string",
        options: {
            list: [{ title: "None", value: "none" }, { title: "Weib", value: "weib" }, { title: "Marker-Blau", value: "marker-blau" }]
        }
    }, {
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot: true
        },
    }, {
        name: "body",
        title: "Body",
        type: "array",
        of: [{ type: "block" }]
    }, {
        name: "vertical",
        title: "Vertical display",
        type: "boolean",
        description: "Overrides the horizontal display to be vertical rather"
    }]
}