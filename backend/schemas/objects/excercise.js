import { GiWeightLiftingUp as icon} from 'react-icons/gi';
export default {
  title: "Excercise",
  name: "excercise",
  type: "document",
  icon,
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
      title: "Instructions",
      name: "instructions",
      description: `Add any tips for doing the excercise here`,
      type: "string",
      validation: Rule => Rule.min(10).warning('Descriptions should be longer than ten characters'),
    },
    {
      title:"Video",
      name:"video",
      type:"string",
      description: `Put a link to a YouTube video here demonstrating how to perform the excercise.`,
      validation: Rule => Rule.required().warning('A video should have a link to a YouTube video'),
    },
    {
      title: 'Repetitions',
      name: 'repetitions',
      type: 'number',
    }
  ],
  initialValue: {
    isActive: true,
    repetitions: 1
  }
}