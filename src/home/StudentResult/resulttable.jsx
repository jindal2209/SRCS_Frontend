import React from 'react';

function SemResult({ data,id }) {
	var totalMarks = 0;
	var maxMarks = 0;

	return (
		<div className="my-3">
			<div>
				<h3 className="btn btn-success btn-lg btn-block" data-toggle="collapse" data-target={`#collapse${id}`} aria-expanded="false" aria-controls="collapseExample">
					Semester {data[0]} 
					{/* - + button */}
				</h3>
			</div>
			
			<div className="collapse" id={`collapse${id}`}>
				<div className="card">
					<table className='table table-bordered table-striped'>
						<thead className="thead-dark">
							<th scope="col">S.No.</th>
							<th scope="col">Subject</th>
							<th scope="col">Subject Code</th>
							<th scope="col">Credits</th>
							<th scope="col">Internal Marks</th>
							<th scope="col">External Marks</th>
							<th scope="col">Total Marks</th>
						</thead>
						<tbody>
							{
								data[1].map((s, idx) => {
									totalMarks = totalMarks+s[3]+s[4];
									maxMarks = maxMarks + 1;
									return (
										<tr key={idx}>
											<th scope="row">{idx+1}. </th>
											{
												s.map((tdata, key) => <td key={key} >{tdata}</td>)
											}
											<td>{s[3] + s[4]}</td>
										</tr>
									)
								})
							}
						</tbody>
					</table>
					<div>
						<p>
							<span>Total: {totalMarks}/{maxMarks*100}</span>
							<br></br>
							<span>Percentage: {totalMarks/maxMarks}%</span>
						</p>
					</div>			
				</div>
			</div>
		</div>
	)
}

export default SemResult;