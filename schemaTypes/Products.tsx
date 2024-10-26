
import { defineField, defineType, useDateTimeFormat } from "sanity"


export const Products = defineType({
    name: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'Name',
            type: 'string',
            description: 'The name of the Restaurant.'
        }),
        defineField({
            name: 'Image', 
            type: 'image',
            description: 'Image of the Restaurant.'
        }),
        defineField({
            name: 'Location',
            type: 'geopoint',
            description: 'The location of the Restaurant.',
        }),
        defineField({
            name: 'Cost',
            type: 'number',
            description: 'How relatively expensive the user thinks the restaurant is.',
            options: {
                list: [
                    {value: 1, title: 'One'}, 
                    {value: 2, title: 'Two'}, 
                    {value: 3, title: 'Three'},
                    {value: 4, title: 'Four'},
                    {value: 5, title: 'Five'},
                ]
            },
        }),
        defineField({
            name: 'Quality',
            type: 'number',
            description: 'What relative quality does the user think the restaurant has.',
            options: {
                list: [
                    {value: 1, title: 'One'}, 
                    {value: 2, title: 'Two'}, 
                    {value: 3, title: 'Three'},
                    {value: 4, title: 'Four'},
                    {value: 5, title: 'Five'},
                ]
            },
        }),
        defineField({
            name: 'Safety',
            type: 'number',
            // Score 3 - Certified Gluten Free
            // Score 2 - Accommodates GF, but not dedicated or certified
            // Score 1 - Contains 'Modified Food Starch', 'Manufactured on shared equipment', 'May contain wheat'
            options: {
                list: [
                    {value: 1, title: 'One'}, 
                    {value: 2, title: 'Two'}, 
                    {value: 3, title: 'Three'},
                ]
            },
        }),
    ]})  

