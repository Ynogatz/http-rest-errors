import { GenericError } from '../generic.error'

export class TimeoutError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Request timeout'), 408, error)
		this.name = 'TimeoutError'
	}
}
