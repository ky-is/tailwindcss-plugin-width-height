export interface KeyedObject<T> {
	[key: string]: T
}

export interface Options {
	variants?: string[]
	sizes?: KeyedObject<string>
}
