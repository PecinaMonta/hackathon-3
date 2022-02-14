import React, {useState} from 'react';
import data from '../Context/data.json';
import Modal from './Modal';
import './lightbox.css';

const Lightbox = () => {

const [clickedImg, setClickedImg] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);

const handleClick = (item, index) => {
  setCurrentIndex(index);
  setClickedImg(item.link);
};

const handleRotationRight = () => {
  const totalLength = data.data.length;
  if(currentIndex + 1 >= totalLength) {
    setCurrentIndex(0);
    const newUrl = data.data[0].link;
    setClickedImg(newUrl);
    return;
  }
  const newIndex = currentIndex + 1;
  const newUrl = data.data.filter((item) => {
    return data.data.indexOf(item) === newIndex;
  });
  const newItem = newUrl[0].link;
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};

const handleRotationLeft = () => {
  const totalLength = data.data.length;

  if(currentIndex === 0) {
    setCurrentIndex(totalLength-1);
    const newUrl = data.data[totalLength - 1].link;
    setClickedImg(newUrl);
    return;
  }

  const newIndex = currentIndex - 1;
  const newUrl = data.data.filter((item) => {
    return data.data.indexOf(item) === newIndex;
  });

  const newItem = newUrl[0].link;
  setClickedImg(newItem);
  setCurrentIndex(newIndex);
};


  return (
    <div className='wrapper'>
{data.data.map((item, index) => (
  <div key={index} className="wrapper-images">
    <img className='img-fluid' src={item.link} alt={item.name} onClick={() => handleClick(item, index)} />
  </div>
))}
{ clickedImg && 
  <Modal clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handleRotationLeft={handleRotationLeft}/>
}

      </div>
  )
}

export default Lightbox