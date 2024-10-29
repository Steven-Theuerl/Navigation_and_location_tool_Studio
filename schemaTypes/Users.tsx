
import { defineField, defineType, useDateTimeFormat } from "sanity"


export const Users = defineType({
    name: 'Users',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            description: 'Identifier for this particular piece of content.'
        }),
        defineField({
            name: 'location',
            type: 'object',
                fields: [
                    {name: 'latitude', type: 'string'},
                    {name: 'longitude', type: 'string'}
                ]
        }),
    ],
  
})
