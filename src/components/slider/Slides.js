import React, { useState } from 'react';
import Swipper from '../swipper/Swipper';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/Sliding-reno4.png'
  },
  {
    src: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/Joy_4_690x300.png'
  },
  {
    src: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/HOTSALE_S20_SLIDING.png'
  },
  {
    src: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/Joy_4_690x300.png'
  },
  {
    src: 'https://cdn.cellphones.com.vn/media/ltsoft/promotion/HOTSALE_S20_SLIDING.png'
  }
];

const Slides = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" height="320px" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        <Swipper/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      
     
      {slides}
      
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      
    </Carousel>
  );
}

export default Slides;