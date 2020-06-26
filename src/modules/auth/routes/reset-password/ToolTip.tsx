import React from 'react'

const TooltipText = () => {
	return (
		<div>
			<ul>
				<li>
					Your password must be between 10 and 30 characters.
				</li>
				<li>
					Your password must contain at least one uppercase, or capital, letter
					(ex: A, B, etc.)
				</li>
				<li>
					Your password must contain at least one lowercase letter.
				</li>
				<li>
					Your password must contain at least one number digit (ex: 0, 1, 2, 3,
					etc.)
				</li>
			</ul>
		</div>
	)
}

export default TooltipText
