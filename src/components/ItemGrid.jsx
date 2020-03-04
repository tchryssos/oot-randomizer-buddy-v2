import React from 'react'
import { createUseStyles } from 'react-jss'

import { ORDERED_ITEMS, ORDERED_SONGS, ORDERED_SEALS } from 'constants/items'

import ItemGridCollection from 'components/ItemGridCollection'

const useStyles = createUseStyles({
	itemGridWrapper: {
		width: '75%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
})

export default () => {
	const classes = useStyles()
	return (
		<div className={classes.itemGridWrapper}>
			<ItemGridCollection collection={ORDERED_ITEMS} label="Items" />
			<ItemGridCollection collection={ORDERED_SONGS} label="Songs" />
			<ItemGridCollection collection={ORDERED_SEALS} label="Seals" />
		</div>
	)
}
