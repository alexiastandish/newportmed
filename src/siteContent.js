const siteContent = {
  navLinks: [
    {
      displayName: 'About',
      param: '/about',
      navChildren: [
        { displayName: 'About 1', param: '/about-one' },
        { displayName: 'About 2', param: '/about-two' },
        // { displayName: 'About 3', param: '/about-three' },
        // { displayName: 'About 4', param: '/about-four' },
      ],
    },
    {
      displayName: 'Services',
      param: '/services',
      navChildren: [
        { displayName: 'services 1', param: '/services-one' },
        { displayName: 'services 2', param: '/services-two' },
        { displayName: 'services 3', param: '/services-three' },
        { displayName: 'services 4', param: '/services-four' },
      ],
    },
    {
      displayName: 'Our Process',
      param: '/our-process',
      navChildren: [
        { displayName: 'Our Process 1', param: '/process-one' },
        { displayName: 'Our Process 2', param: '/process-two' },
      ],
    },
    {
      displayName: 'Testimonials',
      param: '/testimonials',
    },
    {
      displayName: 'Contact Us',
      param: '/contact-us',
      className: 'link-btn',
    },
  ],
  homePage: {
    children: true,
    aboutUs: {
      next: null,
      header: 'About',
      desc: 'About description will go here. Description will go here. Description will go here.',
      button: 'About Text Here',
      param: '/about-us',
      alt: 'about-us',
      imageUrl:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },

    services: [
      {
        child: true,
        header: 'Medical',
        desc: 'service one desc',
        button: 'Medical Button',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services',
        hash: '#medical',
      },
      {
        child: true,
        header: 'Cloud',
        desc: 'service two desc',
        button: 'Cloud Button',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services',
        hash: '#cloud',
      },
      {
        child: true,
        header: 'Training',
        desc: 'service three desc',
        button: 'Training Button',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services',
        hash: '#training',
      },
      {
        child: true,
        header: 'Money',
        desc: 'service four desc',
        button: 'Money Button',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services',
        hash: '#money',
      },
    ],
    ourProcess: {
      child: true,
      header: 'No Surprises!',
      desc: 'description will go here',
      button: 'Button Text Here',
      param: '/our-process',
      imageUrl:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },
    testimonials: {
      header: 'Testimonials',
      button: 'Button Text Here',
      param: '/testimonials',
      testimonials: [
        { testimonial1: 'testimonial one here...', person: 'John Doe 1', child: true },
        { testimonial2: 'testimonial two here...', person: 'John Doe 2', child: true },
        { testimonial3: 'testimonial three here...', person: 'John Doe 3', child: true },
        { testimonial4: 'testimonial four here...', person: 'John Doe 4', child: true },
      ],
    },
    newPortMedEffect: [
      {
        header: 'effect One',
        desc: 'effect one desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects',
        hash: '#one',
        child: true,
      },
      {
        header: 'effect two',
        desc: 'effect two desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects',
        hash: '#two',
        child: true,
      },
      {
        header: 'effect three',
        desc: 'effect three desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects',
        hash: '#three',
        child: true,
      },
      {
        header: 'effect four',
        desc: 'effect four desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects',
        hash: '#four',
        child: true,
      },
    ],
    contactUs: {
      header: 'Contact Us',
      desc: 'contact us synopsis...',
      child: true,
    },
    next: null,
  },
}

export default siteContent
