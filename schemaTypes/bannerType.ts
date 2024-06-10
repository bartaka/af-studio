import { defineField, defineType } from 'sanity';
import { ImageIcon } from '@sanity/icons'

export const bannerType = defineType({
    name: 'banners',
    title: 'Banners',
    type: 'document',
    icon: ImageIcon,
    fields: [
        defineField({
            name: 'desktopImage',
            description: 'px and ration and size...',
            type: 'image',
            validation: rule => rule.required()
        })
    ]
});