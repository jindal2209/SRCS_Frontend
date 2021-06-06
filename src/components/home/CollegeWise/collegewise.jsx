import { useEffect, useState } from 'react';
import axios from 'axios';
import { PaginationTable } from './PaginationTable'

function CollegeWiseResult() {
	var [collegeCode, setCollegeCode] = useState('');
	var [branch, setBranch] = useState('');
	var [batch, setBatch] = useState('');
	var [semester, setSemester] = useState('');
	var showForm = true;
	var showLoader = false;
	// var [showLoader, setLoader] = useState(false);
	// var [showForm, setForm] = useState(true);
	// var [rank, setRank] = useState(0);
	var [studentresult, setStudentResult] = useState({
		show: false,
		data: <div></div>
	});
	var [showError, setErr] = useState({
		show: false,
		message: ''
	});
	var [college_list, setCollegeList] = useState([]);
	var [batch_list, setBatchList] = useState([]);
	// var [branch_list, setBranchList] = useState([]);
	// var [semester_list, setSemesterList] = useState([]);

	useEffect(() => {
		function getCollegeList() {
			axios.get('getcollegelist/')
				.then(response => {
					setCollegeList(response.data)
				})
				.catch(error => {
					console.log(error)
				})
		}

		function getBatchList() {
			var curryear = new Date().getFullYear()
			var years = []
			var a = 2014
			while (a <= curryear) {
				years.push(a);
				a += 1;
			}
			setBatchList([...years])
		}

		getCollegeList();
		getBatchList();


	}, [])


	function ErrorMsg() {
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
							show: false,
							message: ""
						})
					}}
				>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	}

	function handleSubmit() {
		var url = `getcollegewisedata/?college_code=${collegeCode}&branch_code='${branch}'&semester=${semester}&batch='${batch}'`;
		axios.get(url)
			.then(res => {
				setStudentResult({
					show: true,
					data: CollegeTable(res.data)
				});
			})
			.catch(err => {
				console.log(err);
			})

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

	function CollegeTable(props) {
		return (
			<div>
				<h4 className="center">Institute Name : {props['college_name']}</h4>
				<PaginationTable MOCK_DATA={props.clg_data[0]} />
			</div>
		)
	}

	return (
		<div className="container">
			<div className="title">
				<h1 className='textheader'>College Wise Result</h1>
			</div>


			{showError.show ? <ErrorMsg /> : null}

			{showForm ?

				<div>
					<form>
						<div className='form-group row'>
							<div className='col-sm-3'>
								<label className='col-form-label' for='college'>College</label>
								<div className='col-sm-12'>
									<select className='form-control form-control-sm' id='college' onChange={(e) => setCollegeCode(e.target.value)} >
										<option>Choose...</option>
										{
											college_list.map((row, ridx) => (
												<option key={ridx} value={row.college_code}>{row.college_name} ({row.college_code})</option>
											))
										}
									</select>
								</div>
							</div>
							<div className='col-sm-3'>
								<label className='col-form-label' for='batch'>Batch</label>
								<div className='col-sm-12'>
									<select className='form-control form-control-sm' name='batch' value={batch} onChange={(e) => setBatch(e.target.value)} >
										<option>Choose...</option>
										{
											batch_list.map((batch, batchidx) => (
												<option key={batchidx} value={batch}>{batch}</option>
											))
										}
									</select>
								</div>
							</div>
							<div className='col-sm-3'>
								<label className='col-form-label' for='semester'>Semester</label>
								<div className='col-sm-12'>
									<select className='form-control form-control-sm' name='semester' value={semester} onChange={(e) => setSemester(e.target.value)} >
										<option >Choose...</option>
										<option value="2">One</option>
										<option value="1">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
							<div className='col-sm-3'>
								<label className='col-form-label' for='branch' >Branch</label>
								<div className='col-sm-12'>
									<select className='form-control form-control-sm' value={branch} onChange={(e) => setBranch(e.target.value)} >
										<option >Choose...</option>
										<option value="027">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
						</div>
						{/* <br /> */}
						<button className="btn btn-success btn-md" type="submit" onClick={() => handleSubmit()}><b>Search</b></button>
					</form>
				</div>

				: null}

			{studentresult.show ? studentresult.data : null}

			{showLoader ? <Loader /> : null}

		</div>
	)
}

export default CollegeWiseResult;