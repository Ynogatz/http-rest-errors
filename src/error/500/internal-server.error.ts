import { GenericError } from '../generic.error'

export class InternalServerError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Unsupported media type'), 500, error)
		this.name = 'InternalServerError'
	}
}
