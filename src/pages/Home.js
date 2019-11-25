import React, { useState, useCallback, useMemo } from 'react'
import DisplayContext from 'contexts/display'

const Home = () => {
	const [isSimpleView, setSimpleView] = useState(true)
	const [isRequiredOnly, setRequiredOnly] = useState(true)
	const [isProgressionMode, setProgressionMode] = useState(false)
	const toggleView = useCallback(
		() => setSimpleView(!isSimpleView),
	)
	const toggleRequiredOnly = useCallback(
		() => setRequiredOnly(!isRequiredOnly),
	)
	const toggleProgressionMode = useCallback(
		() => setProgressionMode(!isProgressionMode),
	)
	const context = useMemo(() => ({
		isSimpleView,
		isProgressionMode,
		isRequiredOnly,
		toggleView,
		toggleRequiredOnly,
		toggleProgressionMode,
	}), [isSimpleView, isProgressionMode, isRequiredOnly])

	return (
		<DisplayContext.Provider value={context}>
			<div>
				what a good site
			</div>
		</DisplayContext.Provider>
	)
}

export default Home
