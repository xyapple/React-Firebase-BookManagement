import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img src={image.gif.images.downsized.url} />
    </li>
  )
};

export default GifItem;
