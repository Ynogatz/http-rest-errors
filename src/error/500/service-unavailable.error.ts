import { GenericError } from '../generic.error'

export class ServiceUnavailableError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Service unavailable'), 503, error)
		this.name = 'ServiceUnavailableError'
	}
}
