import './header.css'

function Disclaimer(){
	return (
		<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				...
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
			</div>
		</div>
		</div>
	)
}
function header() {
	return (
		<div>
			<nav className="navbar navbar-expand-md  sticky-top bg-white navbar-light">
				<a className="navbar-brand mr-auto">
					<img src="https://img.icons8.com/plasticine/100/000000/mixer-logo.png" width="50px" /><b>SRCS IPU</b>
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse navbar-default" id="collapsibleNavbar">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link ac" >Home</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Colleges Wise
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="nav-link ac">College Rank</a>
								{/* <a className="nav-link ac" [routerLink]="['/collegeWise']">College Rank</a> */}
								<div className="dropdown-divider"></div>
								<a className="nav-link ac">College Avg. Marks</a>
								{/* <a className="nav-link ac" [routerLink]="['/collegeWiseGraph']">College Avg. Marks</a> */}
							</div>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							University Wise
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="nav-link ac">University Rank</a>
								{/* <a className="nav-link ac" [routerLink]="['/universityWise']">University Rank</a> */}
								<div className="dropdown-divider"></div>
								<a className="nav-link ac">College Compare</a>
								{/* <a className="nav-link ac" [routerLink]="['/collegeCompare']">College Compare</a> */}
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link ac">Disclaimer</a>
							
							{/* <a className="nav-link ac" (click)="disclaimer()">Disclaimer</a> */}
						</li>
					</ul>
				</div>
			</nav>
			<br />
			<br /><br />
		</div>


	)
}

export default header;