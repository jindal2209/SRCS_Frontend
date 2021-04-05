import SemResult from './resulttable';
import './studentresult.css';
import {useLocation} from 'react-router-dom'

function StudentResult() {
	const location = useLocation();
	const props = location.state;
	return (
		<div className="container">
			<h4 className="center"><b>Name</b>: {props.data["student_name"]}</h4>
			<h4 className="center"><b>Enrollment No.</b> : {props.data['enrollment_number'].length === 10 ? '0' + props.data['enrollment_number'] : props.data['enrollment_number']}</h4>
			<h4 className="center"><b>Institute Name</b> : {props.data['college']}</h4>
			<h4 className="center"><b>Programme Name</b> : {props.data['branch']} ({props.data['branch_code']})</h4>
			<h4 className="center"><b>Batch</b> : {props.data['batch']} </h4>
			<h4 className="center"><b>Aggregate : </b>{}</h4>
			<br /><br />
			{
				props.data.result.map((x, idx) => {
					return <SemResult data={x} key={idx} id={idx} />
				})
			}
			<br></br>
		</div>
	)
}

export default StudentResult;