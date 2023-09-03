import React from 'react'
import Typed from 'react-typed'

function LeftText() {
	return (
		<div className='leftText'>
			<div className='flex-fix'>
				<h2>Hi, </h2>
				<span className='preTitle'>I am </span>
				<h1 className='name_big'>Mudra Verma</h1>
				<p className='animated_text'>
					<Typed
						strings={[
							'I am an Engineer',
							'I am a Developer',
							'I am a Critical Thinker',
							'I am a Reader',
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					></Typed>
				</p>
			</div>
		</div>
	)
}

export default LeftText
