import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ 
      name: 'thumbnail', 
      title: 'Thumbnail', 
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ 
      name: 'bgImage', 
      title: 'Background Image', 
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({ name: 'description', title: 'Short Description', type: 'text' }),
    defineField({ name: 'fullDescription', title: 'Full Description', type: 'text' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'link', title: 'Project Link', type: 'url' }),
    defineField({ name: 'isNDA', title: 'Is NDA?', type: 'boolean', initialValue: false }),
    defineField({ 
      name: 'techStack', 
      title: 'Tech Stack', 
      type: 'array', 
      of: [{type: 'string'}] 
    }),
  ],
})