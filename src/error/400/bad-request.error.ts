import { GenericError } from '../generic.error'

export class BadRequestError extends GenericError {
	constructor (message?: string, error?: any) {
		console.log('----------------')
		super((message || 'Invalid request'), 400, error)
		this.name = 'BadRequestError'
	}
}
