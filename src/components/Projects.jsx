import React, { Component } from 'react'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/img-5.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/DeepakSethy">Angular App</a></h3>
											<span></span>
											<p className="icon">
												<span><a href="https://github.com/DeepakSethy"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/img-3.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/DeepakSethy">User Identity MicroServices</a></h3>
											<span>Spring Boot,Auth0, JWT </span>
											<p className="icon">
												<span><a href="https://github.com/DeepakSethy"><i className="icon-share3" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/img-6.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/DeepakSethy">Coding Challenge: <br /> API</a></h3>
											<span>AWS Amplify Serverless Application and Azure Serverless Apps</span>
											<p className="icon">
												<span><a href="https://github.com/DeepakSethy"><i className="icon-share3" /></a></span>

											</p>
										</div>
									</div>
0								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}