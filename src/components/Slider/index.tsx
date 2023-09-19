import React from 'react';
import './index.scss';

interface SliderData {
  data: Array<{ img: string }>;
  dots: boolean;
  width: string;
  height: string;
}

const Index: React.FC<SliderData> = ({ height, width, dots, data }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='slider_container' style={{ width: width, height:height }}>
      <button
        className='slider_button'
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        {'<'}
      </button>
      <div>
        <div className='slider_content'>
          {data.map((item, ind) => (
            <img
              key={ind}
              src={item.img}
              alt='slider_image'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            />
          ))}
        </div>
        {dots && (
          <div className='slider_dots'>
            {data.map((item, ind) => (
              <span
                key={ind}
                className={ind === currentIndex ? 'active' : ''}
                onClick={() => setCurrentIndex(ind)}
              />
            ))}
          </div>
        )}
      </div>

      <button
        className='slider_button'
        onClick={handleNext}
        disabled={currentIndex === data.length - 1}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Index;
