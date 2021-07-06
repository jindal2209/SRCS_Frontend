import { useEffect, useState } from 'react';
import axios from 'axios';

function UniversityWiseResult() {
	var [branch, setBranch] = useState('');
	var [batch, setBatch] = useState('');
	var [semester, setSemester] = useState('');
	var showForm = true;
	var showLoader = false;
	var [studentresult, setStudentResult] = useState({
		show: false,
		data: <div></div>
	});
	var [showError, setErr] = useState({
		show: false,
		message: ''
	});
	var [batch_list, setBatchList] = useState([]);

	useEffect(() => {
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
		getBatchList();
	}, [])


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

	function handleSubmit(e, linkurl) {
		e.preventDefault();
		var url = `getuniversitylist/?branch_code='${branch}'&semester=${semester}&batch=${batch}`;
		if (linkurl)
			url = linkurl
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
				<br />
				<br />
				<h4 className="center">Branch : {props.results.branch}</h4>
				<h4 className="center">Batch : {props.results.batch} &nbsp;</h4>
				{
					props.results.clg_data.length ?
						<>
							<table className='table table-bordered table-striped table-sm table-responsive-lg'>
								<thead className="thead-dark">
									<tr>
										<th>Rank</th>
										<th>Student Name</th>
										<th>Enrollment number</th>
										<th>Aggregate</th>
										<th>Institute</th>
									</tr>
								</thead>
								<tbody>
									{
										props.results.clg_data.map((student, idx) => {
											return (
												<tr key={idx}>
													<td>{student.rank}</td>
													<td>{student.student_name}</td>
													<td>{student.enrollment_number}</td>
													<td>{student.aggregate}</td>
													<td>{student.college_name}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
							<div>
								<span>
									Page{' '}
									<strong>
										{/* {pageIndex + 1} of {pageOptions.length} */}
									</strong>{'  '}
								</span>
								<button className="btn btn-success btn-sm" onClick={(e) => handleSubmit(e, props.previous)} disabled={!props.previous ? true : false} >Previous</button>
								<button className="btn btn-success btn-sm" onClick={(e) => handleSubmit(e, props.next)} disabled={!props.next ? true : false} >Next</button>
							</div>
						</>
						: <h4>No data found</h4>}
			</div >
		)
	}

	return (
		<div className="container">
			<div className="title">
				<h1 className='textheader'>University Ranks</h1>
			</div>


			{showError.show ? <ErrorMsg /> : null}

			{showForm ?

				<div>
					<form>
						<div className='form-group row'>
							<div className='col-sm-4'>
								<label className='col-form-label' htmlFor='batch'>Batch</label>
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
							<div className='col-sm-4'>
								<label className='col-form-label' htmlFor='semester'>Semester</label>
								<div className='col-sm-12'>
									<select className='form-control form-control-sm' name='semester' value={semester} onChange={(e) => setSemester(e.target.value)} >
										<option >Choose...</option>
										<option value="2">One</option>
										<option value="1">Two</option>
										<option value="3">Three</option>
									</select>
								</div>
							</div>
							<div className='col-sm-4'>
								<label className='col-form-label' htmlFor='branch' >Branch</label>
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
						<button className="btn btn-success btn-md" type="submit" onClick={(e) => handleSubmit(e)}><b>Search</b></button>
					</form>
				</div>

				: null}

			{studentresult.show ? studentresult.data : null}

			{showLoader ? <Loader /> : null}

		</div>
	)
}

export default UniversityWiseResult;