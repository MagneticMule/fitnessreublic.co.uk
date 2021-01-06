export default {
  title: "Excercise",
  name: "excercise",
  type: "document",
  fields: [
    {
      title:"Active",
      name:"isActive",
      type:"boolean",
      description: `Will this excercise be shown to the client app?`,
      validation: Rule=>Rule.required(),
    },

    {
      title: "Excercise Name",
      name: "excerciseName",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Excercise names should be longer than 2 characters'),
    },
    {
      title: "Descriptione",
      name: "description",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Second names should be longer than 2 characters'),
    },
    {
      title:"Illustration or Video",
      name:"video",
      type:"image",
      description: `Put an image or video here demonstrating to the client how to perform the excercise.`,
      options: {
        hotspot: true // Make the image editable
      },
    },
    {
      title: 'Repetitions',
      name: 'repetitions',
      type: 'number',
    }
  ],
  initialValue: {
    isActive: true
  }
}