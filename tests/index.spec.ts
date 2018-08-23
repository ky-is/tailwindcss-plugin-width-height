import { generateClassesFor } from '../lib/generate'
import { intersectObjects } from '../lib/utils'

const escape = (string: string) => {
	return string
}

test('generate classes', () => {
	const defaultClasses = generateClassesFor(defaultSizes, escape)
	expect(defaultClasses).toHaveProperty([ '.wh-full' ])
	expect(Object.keys(defaultClasses)).toHaveLength(defaultLength)
})

const defaultWidth = {
	'auto': 'auto',
	'px': '1px',
	'1': '0.25rem',
	'2': '0.5rem',
	'3': '0.75rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'8': '2rem',
	'9': '2.25rem',
	'10': '2.5rem',
	'12': '3rem',
	'16': '4rem',
	'24': '6rem',
	'32': '8rem',
	'40': '10rem',
	'48': '12rem',
	'64': '16rem',
	'1/2': '50%',
	'1/3': '33.33333%',
	'2/3': '66.66667%',
	'1/4': '25%',
	'3/4': '75%',
	'1/5': '20%',
	'2/5': '40%',
	'3/5': '60%',
	'4/5': '80%',
	'1/6': '16.66667%',
	'5/6': '83.33333%',
	'full': '100%',
	'screen': '100vw',
}

const defaultHeight = {
	'auto': 'auto',
	'px': '1px',
	'1': '0.25rem',
	'2': '0.5rem',
	'3': '0.75rem',
	'4': '1rem',
	'5': '1.25rem',
	'6': '1.5rem',
	'8': '2rem',
	'9': '2.25rem',
	'10': '2.5rem',
	'12': '3rem',
	'16': '4rem',
	'24': '6rem',
	'32': '8rem',
	'48': '12rem',
	'64': '16rem',
	'full': '100%',
	'screen': '100vh',
}

const defaultLength = Object.keys(defaultHeight).length

const defaultSizes = intersectObjects(defaultWidth, defaultHeight)
