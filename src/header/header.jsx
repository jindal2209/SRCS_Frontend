import './header.css'
import { Link } from 'react-router-dom';

function header() {
	return (
		<div>
			<nav className="navbar navbar-expand-md sticky-top bg-white navbar-light">
				<Link to={{
					pathname: '/',
					state: {refresh: true}
				}} className="navbar-brand mr-auto">
					<img src="https://img.icons8.com/plasticine/100/000000/mixer-logo.png" width="50px" alt="" /><b>SRCS IPU</b>
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse navbar-default" id="collapsibleNavbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={{
								pathname: '/',
								state: {refresh: true}
							}} className="nav-link ac" >Home</Link>
						</li>
						<li className="nav-item dropdown">
							<a href="#top" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Colleges Wise
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a href='#top' className="nav-link ac">College Rank</a>
								{/* <a className="nav-link ac" [routerLink]="['/collegeWise']">College Rank</a> */}
								<div className="dropdown-divider"></div>
								<a href='#top' className="nav-link ac">College Avg. Marks</a>
								{/* <a className="nav-link ac" [routerLink]="['/collegeWiseGraph']">College Avg. Marks</a> */}
							</div>
						</li>
						<li className="nav-item dropdown">
							<a href="#top" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							University Wise
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a href='#top' className="nav-link ac">University Rank</a>
								{/* <a className="nav-link ac" [routerLink]="['/universityWise']">University Rank</a> */}
								<div className="dropdown-divider"></div>
								<a href='#top' className="nav-link ac">College Compare</a>
								{/* <a className="nav-link ac" [routerLink]="['/collegeCompare']">College Compare</a> */}
							</div>
						</li>
						<li className="nav-item">
							<a href='#top' className="nav-link ac" data-toggle="modal" data-target="#exampleModalCenter">Disclaimer</a>
							{/* <a className="nav-link ac" (click)="disclaimer()">Disclaimer</a> */}
						</li>
					</ul>
				</div>
			</nav>
			<br />
			<br /><br />
			<div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div className="modal-content bg-light">
						<div className="modal-body p-3">
							<h2><b>Disclamer</b></h2>
							<br />
							<h6>All Results have been compiled from Result files available at IPU website.Results are compiled automatically using scripts due to which some results may not have been compiled.Please confirm your results from ipu website or marksheets before using it for any purpose.</h6>
							<br />
							<button type="button" className="btn btn-primary" data-dismiss="modal" aria-label="Close">
								OK
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default header;