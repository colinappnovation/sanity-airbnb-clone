export default {
    name: 'listingBlock',
    title: 'Listing Block',
    type: 'document',
    fields: [{
        name: "icon",
        title: "Icon",
        type: "string",
        options: {
            list: [
                { title: 'Bullet', value: 'Bullet' },
                { title: 'Bullhorn', value: 'Bullhorn' },
                { title: 'Check', value: 'Check' },
                { title: 'Check Circle', value: 'CheckCircle' },
                { title: 'Check Squre', value: 'CheckSquare' },
                { title: 'Chevron Circle Down', value: 'ChevronCircleDown' },
                { title: 'Chevron Circle Right', value: 'ChevronCircleRight' },
                { title: 'Comment', value: 'Comment' },
            ]
        }
    },
    {
        name: "iconSize",
        title: "Icon Size",
        type: "string",
        options: {
            list: [{ title: 'Base', value: 'base' },
            { title: 'Small', value: 'small' },
            { title: 'Meduim', value: 'meduim' },
            { title: 'Large', value: 'large' },
            ]
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