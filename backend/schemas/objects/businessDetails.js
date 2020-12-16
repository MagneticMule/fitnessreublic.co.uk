export default {
  title: "Business Details",
  name: "businessDetails",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required().min(2).warning('Name should be longer than 2 characters'),
      description: `This is the name of your business and will be used throughout the site. In this case it is Fitness Republic but you could change it to something like FitnessRepublic.co.uk.`
    },
    {
      title: "Address",
      name: "address",
      type: 'array',
      of: [{ type: 'block' }],
      description: `The physical address of your business.`,
      validation: Rule => Rule.required().error(`Address can't be blank you silly goose!`),
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
      of: [{ type: 'block' }],
      description: `This is the number you want your clients to call.`,
      validation: Rule => [
        Rule.required(),
          Rule.max(200).error('Body text must be shorter than 200 characters')
      ]
    },
    {
      title: 'Mobile Number',
      name: 'mobileNumber',
      type: 'string',
      of: [{ type: 'block' }],
      description: `This is the mobile number you want your clients to call.`,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: `The contact email for Fitness Republic. This is where customers will contact you directly`,
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: "email", // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          }
        ),
    },
  ]
}