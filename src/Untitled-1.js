<div>
					<form>
					<div className="row">
						<div className="col-md-3">
							<label>
								<b>College</b>
								<select className="form-control">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</label>
						</div>
						<div className="col-md-3">
							<label>
								<b>Batch</b>
								<select className="form-control">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</label>
						</div>
						<div className="col-md-3">
							<label>
								<b>Semester</b>
								<select className="form-control">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</label>
						</div>
						<div className="col-md-3">
							<label>
								<b>Branch</b>
								<select className="form-control">
									<option selected>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</label>
						</div>
					</div>
					<br /><br />
					<button className="btn btn-success" type="submit"><b>Search</b></button>
					{/* <button className="btn btn-success" type="submit" onClick={(e) => handleSubmit(e)}><b>Search</b></button> */}

					{/* <button className="btn btn-success" [disabled]="searchForm.invalid" type="submit">Search</button> */}
					</form>
				</div>


<h4 className="center">Institute Name : {props['college_name']}</h4>
{/* <h4 className="center">Programme Name : {props.data['branch']} ({props.data['branch_code']})</h4> */ }
{/* <h4 className="center">Programme Name : {props.data['branch']} ({props.data['branch_code']})</h4> */ }
{/* <h4 className="center">Programme Name : {props.data['branch']} ({props.data['branch_code']})</h4> */ }
{/* <h4 className="center">Batch : {props.data['batch']} </h4> */ }
{/* { props.clg_data.map((x,idx) => {
					return <p>{x}</p>
				}) } */}
				<br></br>
				<table className='table table-bordered table-striped table-sm table-responsive-lg'>
					<thead className="thead-dark">
						<tr>
							<th scope="col">Rank</th>
							<th scope="col">Name</th>
							<th scope="col">Enrollment Number</th>
							<th scope="col">Percentage</th>
						</tr>
					</thead>
					<tbody>
						{
							props.clg_data[0].map((s, idx) => {
								return (
									<tr key={idx}>
										<td>{idx + 1 + rank}. </td>
										<td>{s[0]}</td>
										<td>{s[1]}</td>
										{/* <td>{(s[2]).toFixed(2)}</td> */}
									</tr>
								)
							})
						}
					</tbody>
				</table>
				<nav aria-label="Page navigation example">
					<ul className="pagination justify-content-center">
						{props.previous != null ?
							<button className="btn btn-success btn-sm" onClick={(e) => {
								handlePNSubmit(e, props.previous, false)
							}}>Previous</button>
							: null
						}
						{
							props.next != null ?
								<button className="btn btn-success btn-sm" onClick={(e) => {
									handlePNSubmit(e, props.next, true)
								}}>Next</button>
								: null
						}
					</ul>
				</nav>