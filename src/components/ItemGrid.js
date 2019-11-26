import React from 'react'
import injectSheet from 'react-jss'

import { ORDERED_ITEMS, ORDERED_SONGS, ORDERED_SEALS } from 'constants/items'

import ItemGridCollection from 'components/ItemGridCollection'

const styles = {
	itemGridWrapper: {
		width: '75%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
}

const ItemGrid = ({ classes }) => (
	<div className={classes.itemGridWrapper}>
		<ItemGridCollection collection={ORDERED_ITEMS} label="Items" />
		<ItemGridCollection collection={ORDERED_SONGS} label="Songs" />
		<ItemGridCollection collection={ORDERED_SEALS} label="Seals" />
	</div>
)

export default injectSheet(styles)(ItemGrid)
