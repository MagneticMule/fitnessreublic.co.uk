// staff.js

export default {

  // Setup a 'document' type to house the page builder field
  title: "Staff",
  name: "staff",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Name should be longer than 2 characters'),
      description: `This is the title of the staff section. For example you could simply call it "Staff" or "The Team".`
    },
    {
      name: 'staffBuilder',
      type: 'array',
      title: 'Staff builder',
      of: [
        { type: 'staffMember' },
      ]
    }
  ]
}