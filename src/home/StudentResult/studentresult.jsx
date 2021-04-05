import SemResult from './resulttable';
import './studentresult.css'

function StudentResult(props){
	console.log(props);
	return (
		<div>
			<h4 className="center">Name: {props.data["student_name"]}</h4>
			<h4 className="center">Enrollment No. : {props.data['enrollment_number'].length===10 ? '0'+props.data['enrollment_number'] : props.data['enrollment_number']  }</h4>
			<h4 className="center">Institute Name : {props.data['college']}</h4>
			<h4 className="center">Programme Name : {props.data['branch']} ({props.data['branch_code']})</h4>
			<h4 className="center">Batch : {props.data['batch']} </h4>
			{ props.data.result.map((x,idx) => {
				return <SemResult data={x} key={idx} />
			}) }
			<br></br>

		</div>
	)
}

export default StudentResult ;