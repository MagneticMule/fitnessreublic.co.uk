export default {
  title: "Hero",
  name: "hero",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      descrition: `The title will be displayed in large type in the first setion of the hero box. THis text could be the name of yuour business or a statement or question of some sort e.g. "Are you ready to get fit in 2021?" The idea is you want to capture the visitors attention early on.`
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: `Put a few lines here`,
      validation: Rule => [
        Rule.max(200).error('Body text must be shorter than 200 characters')
      ]
    },
    {
      title: "Background",
      name: "background",
      type: "image",
      description: `You can put an image here as the background to the hero item. It will be dimmed so that the text is easily readable. If you don't put an image here the news will be displayed on a plain, coloured background.`,
      options: {
        hotspot: true // Make the image editable
      },
    },

  ],
}