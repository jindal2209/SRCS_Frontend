import React, { useEffect } from 'react';

function SemResult({ data, id, fetchSubTotal, fetchTotal, fetchTotalBacklogs }) {
	var totalMarks = 0;
	var maxMarks = 0;
	// var totalCredits = 0;
	var totalBacklogs = 0;

	useEffect(() => {
		fetchTotal(totalMarks);
		fetchSubTotal(maxMarks);
		fetchTotalBacklogs(totalBacklogs)
	}, [fetchTotal, fetchSubTotal, totalMarks, maxMarks, totalBacklogs, fetchTotalBacklogs])

	return (
		<div className="mb-5">
			<div>
				<p className="btn btn-success btn-lg btn-block" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="false" aria-controls="collapseExample">
					Semester {data[0]}
					{/* - + button */}
				</p>
			</div>

			<div className="collapse" id={`collapse${id}`}>
				<div className="card">
					<table className='table table-bordered table-striped table-sm table-responsive-lg'>
						<thead className="thead-dark">
							<tr>
								<th scope="col">S.No.</th>
								<th scope="col">Subject</th>
								<th scope="col">Subject Code</th>
								<th scope="col">Grade</th>
								<th scope="col">Internal Marks</th>
								<th scope="col">External Marks</th>
								<th scope="col">Total Marks</th>
							</tr>
						</thead>
						<tbody>
							{
								data[1].map((s, idx) => {
									totalMarks = totalMarks + s[5];
									maxMarks = maxMarks + 1;
									totalBacklogs += s[5]<40 ? 1 : 0;
									return (
										<tr key={idx} className={s[5] < 40 ? 'table-danger' : ''}>
											<th scope="row">{idx + 1}. </th>
											{
												s.map((tdata, key) => <td key={key} >{tdata}</td>)
											}
										</tr>
									)
								})
							}
						</tbody>
					</table>
					<div>
						<p>
							<span>Total Marks: {totalMarks}/{maxMarks * 100}</span>
							<br></br>
							<span>Percentage: {(totalMarks / maxMarks).toFixed(2)}%</span>
							<br></br>
							{/* <span>Total Credits: {totalCredits}</span>
							<br></br> */}
							<span>Backlogs: {totalBacklogs}</span>

						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SemResult;