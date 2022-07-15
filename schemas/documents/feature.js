import { FaProjectDiagram } from 'react-icons/fa'

export default {
    name: "feature",
    title: "Feature",
    type: "document",
    icon: FaProjectDiagram,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        // add a unique slug field for queries, permalinks etc
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                // auto generates a slug from the title field
                source: 'title',
                auto: true
            }
        }
    ]
}