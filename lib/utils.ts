import { KeyedObject } from '../types'

export function intersectObjects (a: KeyedObject<string>, b: KeyedObject<string>) {
	return Object.keys(a).filter(key => b.hasOwnProperty(key)).reduce((object, key) => {
		object[key] = a[key]
		return object
	}, {} as KeyedObject<string>)
}
