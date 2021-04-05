import './home.css'
import {useState} from 'react' ;
import axios from 'axios';
import StudentResult from './StudentResult/studentresult';


function Home(){
	var [rollno,setRollno] = useState(null);
	var [showLoader,setLoader] = useState(false);
	var [showForm,setForm] = useState(true);
	var [studentresult,setStudentResult] = useState({
		show: false,
		data: <div></div>
	});
	var [showError,setErr] = useState({
		show: false,
		message: ''
	});

	function ErrorMsg(){
		return (
			<div className="alert alert-warning alert-dismissible fade show" role="alert">
				{showError.message}
				<button 
					type="button" 
					className="close" 
					data-dismiss="alert" 
					aria-label="Close" 
					onClick={() => {
						setErr({
							show:  false,
							message: ""
						})
					}}
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	}
	
	function handleSubmit(event){
		if(rollno.length!==11){
			event.preventDefault();
			setLoader(false);
			setForm(true);
			setErr({
				show:  true,
				message: "Enter Valid 11 digit IPU Roll Number"
			})
		}
		else{
			setForm(false);
			setLoader(true);
			setErr({
				show:  false,
				message: ""
			})
			axios.get('getrollnumdata/?enrollment_number='+parseInt(rollno))
			.then(response => {
				setLoader(false);
				setStudentResult({
					show: true,
					data: response.data
				})
			})
			.catch((error) => {
				setLoader(false);
				setForm(true);
				setErr({
					show:  true,
					message: error.response.data['error']
				})
			})
		}
	}

	function Loader(){
		return (
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}

	return (
		<div className="container">
			<div className="title">
			{/* <div className="title" *ngIf="textContent"> */}
				<h1>Student Result Consolidation System</h1>
				<h5 className="text2">
					GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY B.TE`CH RESULTS FOR AFFILIATED INSTITUTES
				</h5>
				<br />
				<img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/220px-GGSIU_logo.svg.png" alt="" />
				
			</div>
			
			{showError.show ? <ErrorMsg /> : null}

			{showForm ? 
			
				<div id="searchBar">
					<form>
						{/* <form [formGroup]="searchForm" (ngSubmit)="OnSearch()"> */}
						<input 
							className="search" 
							type="text" 
							placeholder="IPU Roll Number" 
							value={rollno} 
							onChange = {
								(e) => {
									setRollno(e.target.value);
								}
							}
						/>
						<br /><br />
						<button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}><b>Search</b></button>

						{/* <button className="btn btn-success" [disabled]="searchForm.invalid" type="submit">Search</button> */}
					</form>
					<div className="title">
						<br />
						<p> CS, IT, EEE, ECE, MAE results</p>
						<br />
						<p className="text1">Check your all semester results along with College wise and University wise ranks, total marks and backlogs.Know where
							you stand in the rankings and also check out other student's results.
						</p>
					</div>
				</div>

			 : null}

			{studentresult.show ? <StudentResult data={studentresult.data} /> : null}

			{showLoader ? <Loader /> : null}

		</div>
	)
}



export default Home;