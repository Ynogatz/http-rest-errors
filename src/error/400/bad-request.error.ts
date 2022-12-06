import { GenericError } from '../generic.error'

export class BadRequestError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Invalid request'), 400, error)
		this.name = 'BadRequestError'
	}
}
