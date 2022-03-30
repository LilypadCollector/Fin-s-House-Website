import ImageGallery from 'react-image-gallery'
import veggierolldf from './../images/veggierolldf.jpg';
import philadelphia from './../images/philadelphia.jpg';
import garlicedamame from './../images/garlicedamame.jpg';
import handrollveggierolldf from './../images/handroll-veggierolldf.jpg';
import veggierolldf2 from './../images/veggierolldf2.jpg';
import veggierolldf3 from './../images/veggierolldf3.jpg';

import Header from './header'
import Footer from './footer'

// const photos = [
//     {
//       original: garlicedamame,
//       // alt: "Garlic edamame",
//     },
//     {
//       original: handrollveggierolldf,
//       // alt: "Handroll and Deepfried Veggie Roll",
//     },
// ];
const photos = [
  {
    original: veggierolldf2,
    thumbnail: veggierolldf2,
  },
  {
    original: philadelphia,
    thumbnail: philadelphia,
  },
  {
    original: handrollveggierolldf,
    thumbnail: handrollveggierolldf,
  },
  {
    original: garlicedamame,
    thumbnail: garlicedamame,
  },
  {
    original: veggierolldf,
    thumbnail: veggierolldf,
  },
  {
    original: veggierolldf3,
    thumbnail: veggierolldf3,
  },
];


const Photos = () => {
    return (
        <div className="page" id="photos-page">
          <Header />
          <ImageGallery items={photos} className="image-gallery"
            showPlayButton={false}
            showFullscreenButton={false} />
          <Footer />
        </div>
    )
}

export default Photos