import React from 'react';
import {
	FaSass,
	FaHtml5,
	FaReact
} from 'react-icons/fa';

import './style.scss';

const Midsection = () => (
	<div>
		<section className="section">
			<div className="container">
				<div className="columns is-multiline">
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaSass size="fa-2x" color="#d22780" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Uses Bulma</h1>
									<p className="subtitle is-size-5">
										Bulma is an open source CSS framework and used by more than
										100,000 developers.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaHtml5 size="fa-2x" className="has-text-danger" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">JAMStack Solution</h1>
									<p className="subtitle is-size-5">
										It’s a new way of building websites and apps that delivers
										better performance, higher security, lower cost of scaling,
										and a better developer experience.
									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-one-third">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-medium">
									<FaReact size="fa-2x" color="#5e227f" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-4">Gatsby + React?</h1>
									<p className="subtitle is-size-5">
										Uses Gatsby's version <code>v2</code>, enjoy the power of
										the latest web technologies. All set up and waiting for you
										to start building.
									</p>
								</div>
							</div>
						</article>
					</div>

				</div>
			</div>
		</section>
	</div>
);

export default Midsection;
