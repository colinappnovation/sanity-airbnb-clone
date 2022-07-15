export default {
    name: "galleryImage",
    title: "Gallery Image",
    type: "object",
    fields: [
        {
            name: "galleryImage",
            title: "Gallery Image",
            type: "image",
            options: {
                hotspot: true
            },
        },
        {
            name: "caption",
            title: "Caption",
            type: "string",
            validation: Rule => Rule.required(),
            options: {
                isHighlighted: true
            }
        }, {
            name: "description",
            title: "Description",
            type: "string",
            validation: Rule => Rule.required()
        }],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'description',
            image: 'galleryImage'
        },
        prepare(selection) {
            const { title, subtitle, image } = selection;
            return {
                title: title,
                subtitle: subtitle,
                media: image
            }
        }
    }
}