import { GenericError } from '../generic.error'

export class ForbiddenError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Not authorized'), 403, error)
		this.name = 'ForbiddenError'
	}
}
