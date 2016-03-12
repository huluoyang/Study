##webpack����

###webpack������Զ�ˢ��

```
entry: [
	'webpack/hot/dev-server',
	'webpack-dev-server/client?http://localhost:8080',
	path.resolve(__dirname, 'app/main.js')
],
```

###�����ļ�

####ģ��

- ES6ģ��: `import module from './module.js';`
- CommonJS: `var module = require('./module.js';`
- AMD: `define(['./module.js'], function (module) {});`

####����ļ�·��

*���·������Ե�ǰĿ¼, ����·�����������ļ�.*

##React

React��key���Կ��Ա�֤DOM���˳��

```
<ul>
{
	todoItems.map((todoItem, i) =>
		<li key={'todoitem' + i}><TodoItem owner={todoItem.owner} task={todoItem.task} /></li>
	)
}
</ul>
```

�������key����, React���������

*React�ṩ��ReactLink��֧��˫�����ݰ�*

ʹ��Mixinʵ������˫���

```
// ReactLink ��һ�����������������Ҫ�������롣
var React = require('react/addons');

...

module.exports = React.createClass({
    mixins: [React.addons.LinkedStateMixin],

    ...

    render() {
        var todoItems = this.state.todoItems;

        return <div>
            <div className='ChangeOwner'>
                <input type='text' valueLink={this.linkState('owner')} />// *�˴�������ҪonChange����*
            </div>

            <div className='TodoItems'>
                <ul>{todoItems.map((todoItem, i) =>
                    <li key={'todoitem' + i}>
                        <TodoItem owner={owner} task={todoItem.task} />
                    </li>
                )}</ul>
            </div>
        </div>;
    },
});
```

###����React

####�ڴ�����ʹ��React

```
import React from 'react';

export default class Hello extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

###�Ż��غϲ�

####�ڿ���������ʹ��ѹ���ļ�

Ϊ�˲���webpackȥ����react������������, ������ڿ�������д������Ϊ

```
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    resolve: {
        alias: {
          'react': pathToReact
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel'
        }],
        noParse: [pathToReact]
    }
};

module.exports = config;
```

#####����������������

- ÿ��react�ڴ����б�����, ����ʹ��ѹ�����react�ļ�, �����ǵ�node_modules����;
- ÿ��webpack����֧�����Ǹ�ѹ������ļ�, ������ֹ��, ��Ϊ�ⲻ��Ҫ.

####Flow

##CSS Fonts and Images

###����CSS

####CSS����׼��
- ��װ������: `npm install css-loader style-loader --save-dev`
- �޸�����:

```
{// ����css-loader
	test: /\.css$/, // Only .css files
	loader: 'style!css' // Run both loaders
}
```

####����CSS�ļ�

`import './style.css';`

*��CommonJS��AMD�ж�������import����CSS�ļ�*

####CSS���ز���

- ����CSS����ϲ���һ���ļ�
- ������: ��ÿ����ڵ�������Ե�CSS�ļ�, ���Ӷ�������ļ�������.

####ʹ��������ʽȡ��CSS�ļ�

```
import React from 'react';

var style = {
  backgroundColor: '#EEE'
};

export default React.createClass({
  render: function () {
    return (
      <div style={style}>
        <h1>Hello world</h1>
      </div>
    )
  }
});
```

###�Զ�ˢ��CSS
###����LESS��SASS
###����images
###����fonts
