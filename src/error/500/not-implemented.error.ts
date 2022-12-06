import { GenericError } from '../generic.error'

export class NotImplementedError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Not implemented'), 501, error)
		this.name = 'NotImplementedError'
	}
}
