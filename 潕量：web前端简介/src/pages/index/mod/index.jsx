'use strict';

import React from 'react';
import {Button} from '@alifd/next';

class Index extends React.Component {
  render() {
    return React.createElement(
      'div',
      {className: 'home-page'},
      [
        React.createElement(
          'div',
          {className:'big-text'},
          '这里可以是整站的首页，一个带layout的独立页面',
          [
            React.createElement(
              'button',
              {className:'next-btn next-large next-btn-normal', type:'button'},
              [
                React.createElement(
                  'span',
                  {className:'next-btn-helper'},
                  '这是通过直接修改webpack编译文件build/pages/index.js添加的'
                )
              ]
            )
          ]
        )
      ]
    )
  }
}
export default Index;
