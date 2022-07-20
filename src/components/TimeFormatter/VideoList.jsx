import React from 'react';
import { v4 } from 'uuid';
import Video from './Video';

function VideoList({ list }) {
  return list.map((item) => (
    <Video key={v4()} url={item.url} date={item.date} />
  ));
}

export default VideoList;
