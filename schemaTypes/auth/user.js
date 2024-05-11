// user - required

import { defineField } from 'sanity'

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'isAdmin',
      title: 'Admin User',
      description: 'Give this user admin rights?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'string',
      description: 'Brief description or notes about user. ',
    }),
    defineField({
      // this is only if you use credentials provider
      name: 'password',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    }),
  ],
}
