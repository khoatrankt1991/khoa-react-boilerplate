import React from 'react';
import KCarousel from '../components/carousel';
const items = [
  {
    src: 'https://picsum.photos/1000/500?image=0',
    alt: 'Slide 1',
    caption: {
      title: 'Slide 1',
      desc: 'Has description'
    }
  },
  {
    src: 'https://picsum.photos/1000/500?image=1',
    alt: 'Slide 2',
    caption: {
      title: 'Slide 1 No desc',
      desc: ''
    }
  },
  {
    src: 'https://picsum.photos/1000/500?image=2',
    alt: 'Slide 3',
    caption: {
      title: 'Slide 3',
      desc: 'Has description'
    }
  },
  {
    src: 'https://picsum.photos/1000/500?image=4',
    alt: 'Slide 4',
    caption: {
      title: 'Slide 4',
      desc: 'Has description'
    }
  }
];
const Home = () => (<div>
  <KCarousel items={items}/>
  <h1>hello</h1>
</div>);

export default Home;