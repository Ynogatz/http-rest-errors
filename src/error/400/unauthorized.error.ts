import { GenericError } from '../generic.error'

export class UnauthorizedError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Unauthorized'), 401, error)
		this.name = 'UnauthorizedError'
	}
}
