
import { defineField, defineType, useDateTimeFormat } from "sanity"


export const Restaurants = defineType({
    name: 'Restaurants',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            description: 'Identifier for this particular piece of content.'
        })
    ],
  
})
