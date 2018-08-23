import { intersectObjects } from './utils'
import { generateClassesFor } from './generate'

import { KeyedObject, Options } from '../types'

export = ({ variants, sizes } = {} as Options) => {
	return ({ addUtilities, config, e }: KeyedObject<any>) => {
		if (!sizes) {
			const widthConfig = config('width')
			const heightConfig = config('height')
			sizes = intersectObjects(widthConfig, heightConfig)
		}
		const classes = generateClassesFor(sizes, e)
		addUtilities(classes, variants)
	}
}
