import {
	HashRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Home from './home/home';
import StudentResult from './home/StudentResult/studentresult'

function Routers() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'><Home /></Route>
				<Route exact path='/student-result'><StudentResult /></Route>

			</Switch>
			<Footer />
		</Router>
	);
}

export default Routers;