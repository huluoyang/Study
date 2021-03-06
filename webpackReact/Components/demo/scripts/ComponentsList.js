import React from 'react';
import ReactDOM from 'react-dom';

import Loading from '../../loading/Loading';
import NavMenu from '../../navMenu/NavMenu';
import Dropdown from '../../dropdown/dropdown';
import SaveLoading from '../../saveLoadingButton';
import CanvasUpload from '../../CanvasUpload/CanvasUpload';


export default class ComponentsList extends React.Component {
	render () {
		return (
			<div className='component-container'>
				<nav className='component-nav'>
					<a href='#loading'>React Loading</a>
				</nav>
				<div className='component-list'>
					<div className='item' id='saveLoading'>
						<h2>(2016/08/26)React Save Loading Button</h2>
						<SaveLoading />
					</div>
					<div className='item' id='loading'>
						<h2>(2016/03/31)React Loading</h2>
						<Loading/>
					</div>
					<div className='item' id='navMenu'>
						<h2>(2016/04/07)React Nav Menu</h2>
						<NavMenu imageSrc='dist/image/time_relative_default.png'
							transitionName={{
								enter: 'enter',
								leave: 'leave',
								appear: 'appear'
							}}
						/>
					</div>
					<div className='item' id='dropdown'>
						<h2>(2016/04/18)React Dropdown</h2>
						<Dropdown options={[
								{key: 'ibm', value: 'IBM'},
								{key: 'google', value: 'Google'},
								{key: 'microsoft', value: 'Microsoft'}
							]}
							defaultOption={0}
						/>
						<Dropdown options={[
								{key: 'lenovo', value: 'Lenovo'},
								{key: 'baidu', value: 'Baidu'},
								{key: 'huawei', value: 'Huawei'}
							]}
							defaultOption={0}
						/>
					</div>
					<div className='item' id='canvas-update'>
						<CanvasUpload />
					</div>
				</div>
			</div>
		);
	};
}
