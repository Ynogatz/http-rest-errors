import { GenericError } from '../generic.error'

export class TooManyRequestsError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Too many requests'), 429, error)
		this.name = 'TooManyRequestsError'
	}
}
