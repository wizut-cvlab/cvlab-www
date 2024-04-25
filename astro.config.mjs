import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'WI ZUT CVLab',
    // logo: {
    //   src: './src/assets/cvlab.webp',
    // },
    description: 'CVLab, hosted by the Faculty of Computer Science and Information Technology at ZUT, offers a platform for sharing research data on computer vision for academic research.',
    social: {
      github: 'https://github.com/wizut-cvlab'
    },
    sidebar: [{
      label: 'Project description',
	  autogenerate: {
        directory: 'descriptions'
      }
    //   items: [{
    //     label: 'Example Guide',
    //     link: '/descriptions/example/'
    //   }]
    }, {
      label: 'Data download',
      collapsed: true,
      autogenerate: {
        directory: 'data'
      }
    }, {
      label: 'Faculty of Computer Science and Information technology website',
      link: 'https://www.wi.zut.edu.pl/',
      attrs: {
        target: '_blank',
        style: 'font-style: italic; font-weight: normal'
      }
    }, {
      label: 'West Pomeranian University of Technology website',
      link: 'https://www.zut.edu.pl/EN/university.html',
      attrs: {
        target: '_blank',
        style: 'font-style: italic; font-weight: normal'
      }
    }]
  }), react()],
  site: 'https://cvlab.zut.edu.pl'
});