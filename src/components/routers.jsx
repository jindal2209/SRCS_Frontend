import {
	HashRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';
import Home from './home/home';
import StudentResult from './home/StudentResult/studentresult';
import CollegeWiseResult from './home/CollegeWise/collegewise';
import UniversityWiseResult from './home/UniversityWise/universitywise';

export function Routers() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'><Home /></Route>
				<Route exact path='/student-result'><StudentResult /></Route>
				<Route exact path='/college-wise-result'><CollegeWiseResult /> </Route>
				<Route exact path='/university-wise-result'><UniversityWiseResult /> </Route>
			</Switch>
			<Footer />
		</Router>
	);
}