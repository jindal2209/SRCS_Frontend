import SemResult from './resulttable';
import './studentresult.css';
import { useLocation } from 'react-router-dom'
import { useCallback, useState } from 'react';

function StudentResult() {
	const location = useLocation();
	const props = location.state;
	var [ot,setOt] = useState(0);
	var [osub,setOsub] = useState(0);

	const fetchTotal = useCallback((val) => {
		setOt((pt) => pt+val);
	}, [])

	const fetchSubTotal = useCallback((val) => {
		setOsub((pt) => pt+val);
	}, [])

	return (
		<div className="container">
			<h4 className="center"><b>Name</b>: {props.data["student_name"]}</h4>
			<h4 className="center"><b>Enrollment No.</b> : {props.data['enrollment_number'].length === 10 ? '0' + props.data['enrollment_number'] : props.data['enrollment_number']}</h4>
			<h4 className="center"><b>Institute Name</b> : {props.data['college']}</h4>
			<h4 className="center"><b>Programme Name</b> : {props.data['branch']} ({props.data['branch_code']})</h4>
			<h4 className="center"><b>Batch</b> : {props.data['batch']} </h4>
			<h4 className="center"><b>Aggregate : </b>{(ot/osub).toFixed(2)}%</h4>
			<br /><br />
			{
				props.data.result.map((x, idx) => {
					return (
						<SemResult
							data={x}
							key={idx}
							id={idx}
							fetchSubTotal={fetchSubTotal}
							fetchTotal={fetchTotal}
						/>
					)
				})
			}
			<br></br>
		</div>
	)
}

export default StudentResult;