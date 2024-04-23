import '~/app/page.module.css';

export default function CV() {
	return (
		<div>
			<div className='header'>
				<div>
					<div className='name'>Helena Rostow</div>
					<div className='title'>Professional title here</div>
				</div>
				<div className='photo'>
					<div>
						<img src={'/user.png'} />
					</div>
				</div>
			</div>
			<div className='gray-rectangle'></div>
			<div className='body'>
				<div className='body-left'>
					<div className='left-box'>
						<div>
							<h1 className='title'> Contact</h1>
							<div>
								<div className='contact-adsress'> 40, incididunt ut labore, City</div>
								<div className='contact-email'>incididunt@watever.ltd</div>
								<div className='contact-phone'>00 000 000 000 00</div>
								<div className='contact-linkedin'> incididunt ut labore et dolore magna</div>
								<div className='contact-github'>incididunt ut labore et dolore magna</div>
							</div>
						</div>
						<div className='separator'></div>
						<div>
							<h1 className='title'>Education</h1>
							{/** edu 1 */}
							<div className='education-item'>
								<div className='item-degree'>Master degree </div>
								<div className='item-school'>
									<div> University ipsum dolor</div>
									<div> Location </div>
								</div>
								<div className='item-period'>2002 - 2022 </div>
							</div>
							{/** edu 2 */}
							<div className='education-item'>
								<div className='item-degree'>Bachelor degree </div>
								<div className='item-school'>
									<div> University ipsum dolor</div>
									<div> Location </div>
								</div>
								<div>2002 - 2022 </div>
							</div>
							{/** edu 3 */}
							<div className='education-item'>
								<div className='item-degree'>Postgraduate degree </div>
								<div className='item-school'>
									<div> University ipsum dolor</div>
									<div> Location </div>
								</div>
								<div>2002 - 2022 </div>
							</div>
							{/** edu 4 */}
							<div className='education-item'>
								<div className='item-degree'>Highschool degree </div>
								<div className='item-school'>
									<div> University ipsum dolor</div>
									<div> Location </div>
								</div>
								<div>2002 - 2022 </div>
							</div>
						</div>
						<div className='separator'></div>
						<div>
							<h1 className='title'> Skills</h1>
							<div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
								<div className='skills-item'> Lorem ipsum dolor sit amet </div>
							</div>
						</div>
					</div>
				</div>
				<div className='body-right'>
					<div className='right-box'>
						<div>
							<h1 className='title'> Profile </h1>
							{/* block 1 */}
							<div>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
								irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</div>
						</div>
						<div>
							<h1 className='title'> Work experience </h1>
							<div>
								{/* block 2 */}
								<div className='experience-item'>
									<div className='experience-company'> company x lorem ipsuo</div>
									<div className='experience-location'> wanywhere</div>
									<div className='experience-period'>2002</div>
									<div className='experience-description'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
								{/* block 3 */}
								<div className='experience-item'>
									<div className='experience-company'> company x lorem ipsuo</div>
									<div className='experience-location'> wanywhere</div>
									<div className='experience-period'>2002</div>
									<div className='experience-description'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
								{/* block 4 */}
								<div className='experience-item'>
									<div className='experience-company'> company x lorem ipsuo</div>
									<div className='experience-location'> wanywhere</div>
									<div className='experience-period'>2002</div>
									<div className='experience-description'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
										fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
