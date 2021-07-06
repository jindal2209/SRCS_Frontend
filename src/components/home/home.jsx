import './home.css'
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Home() {
	var [rollno, setRollno] = useState("");
	var [showLoader, setLoader] = useState(false);
	var history = useHistory();
	var [showError, setErr] = useState({ show: false, message: '' });

	function ErrorMsg() {
		return (
			<div className="alert alert-warning alert-dismissible fade show" role="alert">
				{showError.message}
				<button type="button" className="close" data-dismiss="alert" aria-label="Close"
					onClick={() => {
						setErr({ show: false, message: "" })
					}}
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (rollno.length !== 11) {
			setLoader(false);
			setErr({ show: true, message: "Enter Valid 11 digit IPU Roll Number" })
		}
		else {
			setLoader(true);
			setErr({ show: false, message: "" })
			axios.get('getrollnumdata/?enrollment_number=' + parseInt(rollno))
				.then(response => {
					history.push({
						pathname: '/student-result',
						state: { data: response.data }
					})
				})
				.catch((error) => {
					setLoader(false);
					setErr({ show: true, message: error.response.data['error'] })
				})
		}
	}

	function Loader() {
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
				<h1 className='textheader'>Student Result Consolidation System</h1>
				<h5 className="text2">
					GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY B.TECH RESULTS FOR AFFILIATED INSTITUTES
				</h5>
				<br />
				<img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/GGSIU_logo.svg/220px-GGSIU_logo.svg.png" alt="" />

			</div>

			{showError.show ? <ErrorMsg /> : null}

			<div id="searchBar">
				<form>
					<input
						className="search"
						type="text"
						placeholder="IPU Roll Number"
						value={rollno}
						onChange={
							(e) => {
								setRollno(() => e.target.value);
							}
						}
					/>
					<br /><br />
					<button className="btn btn-success btn-md" type="submit" onClick={(e) => handleSubmit(e)}><b>Search</b></button>

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

			{showLoader ? <Loader /> : null}

		</div>
	)
}



export default Home;