import { Navbar, Footer, Slider } from '@/components';
import { sliderData } from '@/utils';

const index = () => {
  return (
    <div>
      <Navbar />
      <Slider width='100%' height='500px' dots={false} data={sliderData} />
      <Footer />
    </div>
  );
};

export default index;
