import React, {useEffect, useState} from "react";


const Example1 = () => {

	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log("UseEffect")
		let timerId = setInterval(() => {
			setCount(c => c + 1)
		}, 1000)

	}, [])

	return (
		<div>
			{count}
		</div>
	)
}

export default Example1