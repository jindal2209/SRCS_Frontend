import './footer.css'

function footer() {
	const clgurl = "http://www.bpitindia.com"
	var year = new Date().getFullYear()
	return (
		<footer>
			<div className="mini-footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<p className="grey-text text-lighten-4">
								This portal is an initiative of <a href={clgurl} target='_blank' rel="noreferrer">BPIT INDIA</a> and is currently under Development &amp;
								Testing. <br /> REPORT ANY DISCREPANCIES IN RESULTS OR GIVE FEEDBACK/SUGGESTIONS AT <a href="mailto:resultapp@bpitindia.com">resultapp@bpitindia.com</a>
							</p>
							<div className="copyright-text">
								<p>
									© {year} SRCS IPU, All rights reserved.
								</p>
							</div>
							{/* <div className="go_top">
								<span className="icon-arrow-up"></span>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default footer;