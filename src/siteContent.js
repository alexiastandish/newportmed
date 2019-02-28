import sectionbg from './img/home/sectionbg.png'
import moneyicon from './img/home/serviceicons/moneyicon.png'
import cloudicon from './img/home/serviceicons/cloudicon.png'
import gears from './img/home/serviceicons/gears.png'
import medicalicon from './img/home/serviceicons/medicalicon.png'
import ourprocessgears from './img/home/ourprocess/ourprocessgears.png'

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
      className: 'link-btn btn',
    },
  ],
  homePage: {
    children: true,
    aboutUs: {
      next: null,
      opacity: 0,
      header: 'Ensuring the financial health of the practices we serve.',
      desc: 'The last RCM company you will ever have to partner with.',
      button: 'Check us out',
      param: '/about-us',
      alt: 'about-us',
      background: sectionbg,
      progress: 0,
      imageClassName: 'circleImage',
    },

    services: [
      {
        child: true,
        header: 'Revenue Cycle Management',
        desc:
          'Financial expectations drive our processes and IT platforms, including feedback + client education.',
        button: 'Learn More',
        icon: moneyicon,
        param: '/services',
        hash: '#medical',
      },
      {
        child: true,
        header: 'Cloud Based Services',
        desc: 'Our offerings are global, 24/7, HIPAA Compliant on the cloud.',
        button: 'Learn More',
        icon: cloudicon,
        param: '/services',
        hash: '#cloud',
      },
      {
        child: true,
        header: 'Solutions Integration',
        desc:
          'Revenue focused IT solutions. Home-grown Analytics Dashboard. Robotic process automation (Bot’s).',
        button: 'Learn More',
        icon: gears,
        param: '/services',
        hash: '#training',
      },
      {
        child: true,
        header: 'Practice Advocates',
        desc: ' Though our services are comprehensive and complex, we make them simple for you.',
        button: 'Learn More',
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
      imageUrl: ourprocessgears,
    },
    testimonials: {
      header: 'Testimonials',
      desc: 'Hear from your peers that know us best',
      button: 'Button Text Here',
      param: '/testimonials',
      testimonials: [
        {
          testimonial: `"NewportMed’s passion for healthcare and attention to detail cannot be overestimated. We are very pleased with our working relationship and continue to use them to improve our efficiencies and revenue cycle."`,
          person: 'James T. Caillouette, M.D. of Newport Orthopedic Institute in Newport Beach, CA',
          child: true,
        },
        {
          testimonial: `“NewportMed has done a terrific job and we are very pleased with their collaboration. Their education services and custom charge ticket development has had a direct impact on our bottom line.”`,
          person: 'Cara M. Waller, C.E.O. of Newport Orthopedic Institute in Newport Beach, CA',
          child: true,
        },
        {
          testimonial:
            '"With your help, we made a smooth transition to electronic medical records (EMR) and achieved our goal of satisfying the criteria for Phase I of Meaningful Use for 100% of our physicians.  I feel confident that SOCO and NMS have set in motion our plans for SOCO to continue onto Phase II of Meaningful Use."',
          person:
            'Michael J. Fitzpatrick, M.D., President of South Orange County Orthopedics in Mission Viejo, CA',
          child: true,
        },
        {
          testimonial:
            '"We made the change to Newport Medical Services back in February 2018. This decision came after an enormous amount of frustration and lost revenue from our previous billing company. Since we have made the change, our monthly revenue has continued to increase! We are averaging almost 35-40% more than in previous years under our old system."',
          person: 'Ian Corland, Administrator of Expert Spine Care in Nashville, TN',
          child: true,
        },
        {
          testimonial:
            '“I have been extremely happy using NewportMed as our billing company. In all my years of experience, I have never been as satisfied as I am with them.”',
          person: 'Michael Gillman, M.D. of Restore Orthopedic and Spine Center in Orange, CA',
          child: true,
        },
        {
          testimonial:
            '"NewportMed’s services are second-to-none. Your coding knowledge and documentation reviews of the sub-specialty services I provide has enabled me to have a level of financial satisfaction I did not have prior to working with you. Your partnership with my practice has also enabled me to focus more time on surgeries and services I specialize in."',
          person:
            'Christopher Duma, M.D. of Brain & Spine Surgeons of Orange County in Newport Beach, CA',
          child: true,
        },
        {
          testimonial:
            '"I’ve been extremely impressed with your knowledge of my specialty and expertise in the coding nuances. In addition, your understanding and direct involvement in credentialing and proper dictation has been invaluable."',
          person: 'Richard Kim, M.D., M.S. of DISC Sports and Spine Center in Newport Beach, CA',
          child: true,
        },
      ],
    },
    newPortMedEffect: {
      header: 'The NewportMed Effect',
      newPortMedEffectSquares: [
        {
          header: 'effect One',
          desc: 'effect one desc',
          button: 'Button Text Here',
          icon: cloudicon,
          param: '/effects',
          hash: '#one',
          child: true,
        },
        {
          header: 'effect two',
          desc: 'effect two desc',
          button: 'Button Text Here',
          icon: cloudicon,
          param: '/effects',
          hash: '#two',
          child: true,
        },
        {
          header: 'effect three',
          desc: 'effect three desc',
          button: 'Button Text Here',
          icon: cloudicon,
          param: '/effects',
          hash: '#three',
          child: true,
        },
        {
          header: 'effect four',
          desc: 'effect four desc',
          button: 'Button Text Here',
          icon: cloudicon,
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
