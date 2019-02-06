import sectionbg from './img/home/sectionbg.png'
// import aboutuscircle from './img/home/aboutuscircle.png'
// import Circle from '../src/img/home/Circle'
import moneyicon from './img/home/serviceicons/moneyicon.png'
import cloudicon from './img/home/serviceicons/cloudicon.png'
import gears from './img/home/serviceicons/gears.png'
import medicalicon from './img/home/serviceicons/medicalicon.png'

const siteContent = {
  navLinks: [
    {
      displayName: 'About',
      param: '/about',
      navChildren: [
        { displayName: 'About 1', param: '/about-one' },
        { displayName: 'About 2', param: '/about-two' },
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
      opacity: 0,
      header: 'Ensuring the financial health of the practices we serve.',
      desc: 'The last RCM company you will ever have to partner with.',
      button: 'About Text Here',
      param: '/about-us',
      alt: 'about-us',
      // imageUrl: <Circle />,
      background: sectionbg,
      progress: 0,
      imageClassName: 'circleImage',
    },

    services: [
      {
        child: true,
        header: 'Revenue Cycle Management',
        desc:
          'The latest technology and proprietary processes are used to insure all charges are captured, documented, submitted and paid. ',
        button: 'Medical Button',
        icon: moneyicon,
        param: '/services',
        hash: '#medical',
      },
      {
        child: true,
        header: 'Cloud Based Services',
        desc: 'Our offerings are global, 24/7, HIPAA Compliant on the cloud. ',
        button: 'Cloud Button',
        icon: cloudicon,
        param: '/services',
        hash: '#cloud',
      },
      {
        child: true,
        header: 'Solutions Integration',
        desc:
          'We bring all the benefits of the best processes and information technology platforms, as well as home-grown Analytics platform and robotic process automation.',
        button: 'Training Button',
        icon: gears,
        param: '/services',
        hash: '#training',
      },
      {
        child: true,
        header: 'Practice Advocates',
        desc:
          'Though our services are comprehensive and complex, NewportMed makes its offering simple: Our aspiration is to be your partner for the life of your practice',
        button: 'Money Button',
        icon: medicalicon,
        param: '/services',
        hash: '#money',
      },
    ],
    ourProcess: {
      child: true,
      header: 'No Surprises!',
      desc: 'Our Process: The NewportMed Way',
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
        {
          testimonial: `"ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni."`,
          person: 'John Doe 1',
          child: true,
        },
        {
          testimonial: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque."`,
          person: 'John Doe 2',
          child: true,
        },
        { testimonial: 'testimonial three here...', person: 'John Doe 3', child: true },
      ],
    },
    newPortMedEffect: {
      header: 'The NewportMed Effect',
      newPortMedEffectSquares: [
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
    },
    contactUs: {
      header: 'Contact Us',
      desc: 'contact us synopsis...',
      child: true,
    },
    next: null,
  },
}

export default siteContent
