import React from 'react';
import { v4 } from 'uuid';
import Video from './Video';
import Article from './Article';
import HighlightHOC from './HighlightHOC';

function List(props) {
  function switcher(item) {
    switch (item.type) {
      case 'video':
        return <Video key={v4()} {...item} />;
      case 'article':
        return <Article key={v4()} {...item} />;
    }
  }
  return props.list.map((item) => {
    return (
      <HighlightHOC key={v4()} views={item.views}>
        {switcher(item)}
      </HighlightHOC>
    );
  });
}

export default List;
