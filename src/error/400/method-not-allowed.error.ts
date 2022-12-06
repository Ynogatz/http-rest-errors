import { GenericError } from '../generic.error'

export class MethodNotAllowedError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Method not allowed'), 405, error)
		this.name = 'MethodNotAllowedError'
	}
}
