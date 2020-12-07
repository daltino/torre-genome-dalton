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
							{this.props.projects.map((project, idx) => (
								<div key={idx} className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
									<div className="project" style={{backgroundImage: `url(${project.organizations.picture})`}}>
										<div className="desc">
											<div className="con">
												<h3><a href="work.html">{project.name}</a></h3>
												<span>{project.responsibilities}</span>
												<p className="icon">
													<span><a href="#"><i className="icon-calendar" />{project.fromMonth} {project.fromYear}</a></span>
													<span><a href="#"><i className="icon-calendar" />{project.toMonth} {project.toYear}</a></span>
													<span><a href="#"><i className="icon-map" />{project.remote ? 'Remote' : 'On-site'}</a></span>
												</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
