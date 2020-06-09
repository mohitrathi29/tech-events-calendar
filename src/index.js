import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';


//Import components
import { Header } from './js/partials/header.js';
import { App } from './js/partials/app.js';
import { Footer } from './js/partials/footer.js';

//Resources
import './scss/global.scss';

class Main extends React.Component {
	render() {
		return (
			<Fragment>
				<header id="header">{<Header />}</header>
				<div id="main" className="main">{<App />}</div>
				<footer id="footer">{<Footer />}</footer>
			</Fragment>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));