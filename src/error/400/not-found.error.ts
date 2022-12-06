import { GenericError } from '../generic.error'

export class NotFoundError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Address not found'), 404, error)
		this.name = 'NotFoundError'
	}
}
