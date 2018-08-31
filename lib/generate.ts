import { KeyedObject } from '../types'

export function generateClassesFor (sizes: KeyedObject<string>, escape: (string: string) => string) {
	const classes: KeyedObject<KeyedObject<string>> = {}
	for (const key in sizes) {
		const value = sizes[key]
		const escapedClassName = escape(`wh-${key}`)
		classes[`.${escapedClassName}`] = {
			width: value,
			height: value,
		}
	}
	return classes
}
