
import { defineField, defineType, useDateTimeFormat } from "sanity"


export const Products = defineType({
    name: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            description: 'Identifier for this particular piece of content.'
        })
    ],
  
})
