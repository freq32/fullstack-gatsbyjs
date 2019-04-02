import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './style.scss';

import gatsbyLogo from '../images/gatsby-icon.png';
import bulmaLogo from '../images/bulma-logo.png';
import Navbar from './navbar';

const Header = ({ siteTitle }) => (
	<section className="hero gradientBg is-fullheight-with-navbar">
		<Navbar />
		<div className="hero-body">
			<div className="container center">
				<article className="media">
					<figure className="is-left">
						<span className="icon is-large ">
							<img src={gatsbyLogo} alt="gatsby-logo - Full-Stack App by @AppSeed.us" />
						</span>
					</figure>
					<figure className="is-left">
						<span className="icon is-large">
							<img src={bulmaLogo} alt="bulma-logo - Full-Stack App by @AppSeed.us" />
						</span>
					</figure>
					<div className="media-content">
						<div className="content">
							<h1 className="is-uppercase is-size-1 has-text-white">
								Full-Stack Gatsby / Bulma   
							</h1>
							<p className="subtitle has-text-white is-size-5">
								<a className="has-text-white" href="https://github.com/rosoftdeveloper/fullstack-gatsbyjs/README.md">Open-Source</a>,{' '}
								<a className="has-text-white" href="https://developers.google.com/speed/pagespeed/insights/?url=https://fullstack-gatsbyjs.appseed.us&tab=desktop">Fast as hell</a>,{' '} 
								#Impressive Css Framework, managed by GatsbyJS.  
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
);

export default Header;
