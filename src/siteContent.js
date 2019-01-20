const siteContent = {
  homePage: {
    children: true,
    aboutUs: {
      next: null,
      header: 'Header Here',
      desc: 'description will go here',
      button: 'Button Text Here',
      param: '/about-us',
      alt: 'about-us',
      imageUrl:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    },

    services: [
      {
        child: true,
        header: 'Service One',
        desc: 'service one desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services/medical',
      },
      {
        child: true,
        header: 'Service Two',
        desc: 'service two desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services/cloud',
      },
      {
        child: true,
        header: 'Service Three',
        desc: 'service three desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services/training',
      },
      {
        child: true,
        header: 'Service Four',
        desc: 'service four desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/services/profit',
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
        param: '/effects/one',
        child: true,
      },
      {
        header: 'effect two',
        desc: 'effect two desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects/two',
        child: true,
      },
      {
        header: 'effect three',
        desc: 'effect three desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects/three',
        child: true,
      },
      {
        header: 'effect four',
        desc: 'effect four desc',
        button: 'Button Text Here',
        icon: 'https://i.imgur.com/hejiuLu.png',
        param: '/effects/four',
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
