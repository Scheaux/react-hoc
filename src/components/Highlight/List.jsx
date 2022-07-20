import React from 'react';
import { v4 } from 'uuid';
import Video from './Video';
import Article from './Article';
import New from './New';
import Popular from './Popular';

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
    if (item.views <= 100) return <New key={v4()}>{switcher(item)}</New>;
    if (item.views >= 1000)
      return <Popular key={v4()}>{switcher(item)}</Popular>;
    return switcher(item);
  });
}

export default List;
