import React from 'react'
import CoverImage from '../images/8bb34d0c95725bbc4d706198237ea661.jpeg';
import ProfileImage from '../images/IMG_3580.jpeg';
import { FaTwitter, FaGithub } from 'react-icons/fa';



const Header = () => {
	return (
		<>
			<header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
				<div className="overlay"></div>
				<div className="container">
					<div className="display-table">
						<div className="display-table-contents">
							<div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
							<h1 className="title-text">miho ishii</h1>
							<h3 className="title-text">React 学習中</h3>
							<ul className="social-icons">
								<li className="icon-link">
									<a href="https://twitter.com/">
										<FaTwitter color="white" size="2rem" />
									</a>
								</li>
								<li className="icon-link">
									<a href="https://github.com/">
										<FaGithub color="white" size="2rem" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
