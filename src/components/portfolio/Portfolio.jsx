import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.jpg';
import IMG6 from '../../assets/portfolio6.jpg';


const data = [
  {
    id:1,
    image: IMG1,
    title: 'i-gym fitness Guide',
    github: 'https://github.com/Paulinesoledad/igym_app.git',
    demo: 'https://igymfitnessapp.netlify.app/'
  },

  {
    id:2,
    image: IMG2,
    title: 'The Nail Lab Hub',
    github: 'https://github.com/Paulinesoledad/Bootstrap-Project.git',
    demo: 'https://nail-lab.netlify.app/'
  },

  {
    id:3,
    image: IMG3,
    title: 'User List Manual',
    github: 'https://github.com/Paulinesoledad/USERLIST-MANUAL.git',
    demo: 'https://userlistmanual.netlify.app/'
  },

  {
    id:4,
    image: IMG4,
    title: 'Quote Generator Timer',
    github: 'https://github.com/Paulinesoledad/Quote-Generator.git',
    demo: 'https://quotetimerproject.netlify.app/'
  },

  {
    id:5,
    image: IMG5,
    title: 'To-Do List Manual',
    github: 'https://github.com/Paulinesoledad/TO-DO-LIST.git',
    demo: 'https://todolistmanual.netlify.app/'
  },

  {
    id:6,
    image: IMG6,
    title: 'Manual Calculator ',
    github: 'https://github.com/Paulinesoledad/Calculator.git',
    demo: 'https://jscalculatorprojectp.netlify.app/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>

            )
          })
        }
      </div>
    </section>
  )
};

export default Portfolio;
