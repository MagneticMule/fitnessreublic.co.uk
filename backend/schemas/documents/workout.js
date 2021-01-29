import { BsSun as icon} from 'react-icons/bs';
export default {

  // Setup a 'document' type to house the page builder field
  title: "Workout",
  name: "workout",
  type: "document",
  icon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      description: `The title will be displayed in large type at the top of the page`
    },
    {
      title: "Background",
      name: "background",
      type: "image",
      description: `You can put an image here as the background to the title. If you don't put an image here the news will be displayed on a plain, coloured background.`,
      options: {
        hotspot: true // Make the image editable
      },
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
      description: `You can introduce the workout here and describe some of the excercises and benefits of the workout.`,
      validation: Rule => [
        Rule.max(200).error('Body text must be shorter than 200 characters')
      ]
    },
    {
      title: 'Set Builder',
      name: 'workoutBuilder',
      type: 'array',
      editModal: 'fullscreen',
      of: [
        { type: 'set'}
      ]
    }
  ]
}