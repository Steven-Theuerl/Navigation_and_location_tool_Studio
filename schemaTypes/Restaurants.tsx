
import { defineField, defineType, useDateTimeFormat } from "sanity"


export const Restaurants = defineType({
    name: 'Restaurants',
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
        defineField({
            name: 'Item1',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?',
                    options: {
                        list: [
                            { value: 1, title: 'One' },
                            { value: 2, title: 'Two' },
                            { value: 3, title: 'Three' },
                            { value: 4, title: 'Four' },
                            { value: 5, title: 'Five' }
                        ]
                    }
                },  
                {name: 'Quality', type: 'number', title: 'How good is it?',
                    options: {
                        list: [
                            { value: 1, title: 'One' },
                            { value: 2, title: 'Two' },
                            { value: 3, title: 'Three' },
                            { value: 4, title: 'Four' },
                            { value: 5, title: 'Five' }
                        ]
                    }
                },
                {name: 'Safety', type: 'number', title: 'How safe is it?',
                    options: {
                        list: [
                            { value: 1, title: 'One' },
                            { value: 2, title: 'Two' },
                            { value: 3, title: 'Three' },
                        ]
                    }
                }
            ],
        }),
        defineField({
            name: 'Item2',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item1 == null
        }),
        defineField({
            name: 'Item3',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item2 == null
        }),
        defineField({
            name: 'Item4',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item3 == null
        }),
        defineField({
            name: 'Item5',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item4 == null
        }),
        defineField({
            name: 'Item6',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item5 == null
        }),
        defineField({
            name: 'Item7',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item6 == null
        }),
        defineField({
            name: 'Item8',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item7 == null
        }),
        defineField({
            name: 'Item9',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item8 == null
        }),
        defineField({
            name: 'Item10',
            type: 'object',
            fields: [
                {name: 'Name', type: 'string', description: 'Name of the food item.'},
                {name: 'Image', type: 'image', description: 'Image of the item.'},
                {name: 'Cost', type: 'number', title: 'How expensive is it?'},
                {name: 'Quality', type: 'number', title: 'How good is it?'},
                {name: 'Safety', type: 'number', title: 'How safe is it?'}
            ],
            hidden: ({document}) => document?.Item9 == null
        }),
    ]})  

