import { FaHome, FaCamera, FaPoundSign, FaFilter, FaMap, FaWrench } from 'react-icons/fa'

export default {
    name: "property",
    title: "Property",
    description: "Property for AirBNB clone",
    type: "document",
    icon: FaHome,
    groups: [{
        name: "imagery",
        title: "Imagery",
        icon: FaCamera
    },
    {
        name: "pricing-and-beds",
        title: "Pricing & Beds",
        icon: FaPoundSign
    }, {
        title: "Categorisation & Features",
        name: "categorisation-and-features",
        icon: FaFilter
    },
    {
        name: "locality",
        title: "Locality Information",
        icon: FaMap
    },
    {
        name: "maintenance",
        title: "Maintenance Info",
        icon: FaWrench
    }],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Used for searching by clients",
            validation: Rule => Rule.required().max(100),
        },
        {
            name: "desc",
            title: "Description",
            type: 'array',
            of: [{ type: 'block' }, { type: 'image' }, { type: 'galleryImage' }, { type: 'category' }],
            description: "Sell your property with this paragraph"
        },
        {
            title: 'Categories',
            name: 'categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'category' },
                    ]
                }
            ],
            group: "categorisation-and-features",
            validation: Rule => Rule.required().unique().min(1).max(5),
        },
        {
            title: 'Features',
            name: 'features',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'feature' },
                    ]
                }
            ],
            group: "categorisation-and-features",
            validation: Rule => Rule.required().unique().min(1).max(5)
        },
        {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: {
                hotspot: true
            },
            description: "Used to promote your property in listings view",
            group: "imagery"
        },
        {
            name: "gallery",
            title: "Gallery",
            type: "array",
            of: [
                {
                    type: "galleryImage",
                }
            ],
            description: "Promotional images for your property",
            validation: Rule => Rule.required().min(3).max(10),
            group: "imagery"

        },
        {
            name: "price",
            title: "Price per night",
            type: "number",
            description: "Price per night in £",
            group: "pricing-and-beds"
        },
        {
            name: "bedrooms",
            title: "No. of bedrooms",
            type: "number",
            options: {
                list: [
                    { title: "1", value: 1 },
                    { title: "2", value: 2 },
                    { title: "3", value: 3 },
                    { title: "4", value: 4 },
                    { title: "5", value: 5 }
                ]
            },
            group: "pricing-and-beds"
        },
        {
            name: "beds",
            title: "No. of beds",
            type: "number",
            description: "Number of beds in the property",
            group: "pricing-and-beds"
        },
        {
            name: "bedsDescription",
            title: "Beds Description",
            description: "Please provide details on all beds for the property",
            type: "array",
            of: [{ type: "block" }],
            group: "pricing-and-beds"
        },
        {
            name: "location",
            title: "Location (lat/lon/alt)",
            type: "geopoint",
            group: "locality"
        },
        {
            name: "locationDescription",
            title: "Location Description",
            type: "array",
            of: [{ type: "block" }],
            group: "locality"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: 'title',
                slugify: input => `/property/${input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)}`
            }
        },
        {
            name: "underMaintenance",
            title: "Under Maintenance",
            type: "boolean",
            group: "maintenance"
        },
        {
            name: "underMaintenanceAdditionalInfo",
            title: "Under Maintenance Additional Info",
            type: "array",
            of: [{ type: "block" }],
            group: "maintenance",
            hidden: ({ document }) => !document?.underMaintenance,
            validation: Rule => Rule.custom((current, context) => {

                if (!context.document?.underMaintenance) {
                    return true;
                }

                return context.document?.underMaintenance === true && context.document?.underMaintenanceAdditionalInfo?.length > 0 ? true : {
                    message: "Please provide under maintenance additional information",
                }
            })
        }
    ],
    preview: {
        select: {
            title: 'title',
            price: 'price',
            image: 'mainImage',
            beds: 'beds',
            bedrooms: 'bedrooms',
            maintenance: 'underMaintenance'
        },
        prepare(selection) {
            const { title, price, image, beds, bedrooms, maintenance } = selection
            return {
                title: title,
                subtitle: `£${price} p/night | Beds: ${beds} | Bedrooms: ${bedrooms} | Under Maintenance: ${maintenance}`,
                media: image
            }
        }
    }
}