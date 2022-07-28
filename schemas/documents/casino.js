// Casino Review Title
// Casino Review Text

import { FaCamera, FaGamepad, FaInfoCircle, FaMapPin, FaMobile } from "react-icons/fa";

export default {
    title: "Casino",
    name: "casino",
    type: "document",
    icon: FaGamepad,
    groups: [
        {
            title: "Opening Hours and Contact Information",
            name: "location",
            icon: FaMapPin
        },
        {
            title: "Imagery",
            name: "imagery",
            icon: FaCamera
        },
        {
            title: "Games Offered",
            name: "games",
            icon: FaGamepad
        },
        {
            title: "Additional Information",
            name: "info",
            icon: FaInfoCircle
        },

    ],
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Hero Image",
            name: "heroImage",
            type: "image",
            options: {
                hotspot: true
            },
            group: "imagery",
            validation: Rule => Rule.required()
        },
        {
            title: "Rating",
            name: "rating",
            type: "number",
            validation: Rule => Rule.required().max(5),
            description: "Rating out of five"
        },
        {
            title: "Review Description",
            name: "reviewDescription",
            type: "text",
            rows: 5
        },
        {
            title: "Reviewer",
            name: "reviwer",
            type: "string"
        },
        {
            title: "Offers",
            name: "offers",
            type: "array",
            of: [
                {
                    type: "string",
                    title: "Offer Description",
                    name: "offerDesc"
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            type: "array",
            name: "Gallery",
            title: "Gallery",
            of: [
                {
                    type: "image",
                    name: "galleryImage",
                    title: "Gallery Image"
                }
            ],
            group: "imagery",
        },
        {
            title: "Opening/Closing Information",
            type: "object",
            name: "openingClosingDetails",
            description: "Provide full opening/closing information for the Casino",
            group: "location",
            options: {
                collapsible: true
            },
            fields: [
                {
                    type: "text",
                    name: "ocIntro",
                    title: "Opening/Closing Introduction",
                    rows: 5
                },
                {
                    type: "array",
                    name: "ocSections",
                    title: "Section Timings",
                    of: [
                        {
                            type: "object",
                            title: "Section Details",
                            name: "sectionDetail",
                            fields: [
                                {
                                    type: "string",
                                    title: "Section Title",
                                    name: "sectionTitle",
                                },
                                {
                                    type: "array",
                                    title: "Section Desc",
                                    name: "sectionDesc",
                                    of: [
                                        {
                                            type: "block"
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                },
            ]
        },
        {
            title: "Location Information",
            name: "contactInfo",
            type: "object",
            group: "location",
            options: {
                collapsible: true
            },
            fields: [
                {
                    title: "Address",
                    name: "address",
                    type: "string"
                },
                {
                    title: "Telephone",
                    name: "tel",
                    type: "string"
                },
                {
                    title: "Email",
                    name: "email",
                    type: "string"
                },
                {
                    title: "Website",
                    name: "website",
                    type: "url"
                },

            ]
        },
        {
            title: "Directions",
            name: "directions",
            type: "text",
            group: "location"
        },
        {
            title: "Games Offered",
            name: "gamesOffered",
            type: "array",
            group: "games",
            of: [
                {
                    title: "Game",
                    name: "game",
                    type: "object",
                    fields: [
                        {
                            title: "Type",
                            name: "type",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Roulette", value: "roulette" },
                                    { title: "Blackjack", value: "blackjack" },
                                    { title: "Punto Banco", value: "punto_banco" },
                                    { title: "Poker", value: "poker" },
                                    { title: "Spielautomaten", value: "spielautomaten" },
                                ]
                            }

                        },
                        {
                            title: "Description",
                            name: "desc",
                            type: "array",
                            of: [
                                {
                                    type: "block"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Additional Information",
            name: "additionalInformation",
            type: "array",
            group: "info",
            of: [
                { type: "block" }
            ]
        }
    ]
}