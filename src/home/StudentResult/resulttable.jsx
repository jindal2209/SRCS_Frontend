import React from 'react';

function SemResult({ data }) {
	var totalMarks = 0;
	var maxMarks = 0;

	return (
		<div>
			<h3>Semester {data[0]} </h3>
			<table>
				<thead>
					<td>S.No.</td>
					<td>Subject</td>
					<td>Subject Code</td>
					<td>Credits</td>
					<td>Internal Marks</td>
					<td>External Marks</td>
					<td>Total Marks</td>
				</thead>
				<tbody>
					{
						data[1].map((s, idx) => {
							totalMarks = totalMarks+s[3]+s[4]
							maxMarks = maxMarks + 1;
							return (
								<tr key={idx}>
									<td>{idx+1}. </td>
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
				<p>Total: {totalMarks}/{maxMarks*100}</p>
				<p>Percentage: {totalMarks/maxMarks}%</p>
			</div>


		</div>
	)
}

export default SemResult;