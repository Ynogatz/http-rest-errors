import { GenericError } from '../generic.error'

export class UnsupportedMediaTypeError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Unsupported media type'), 415, error)
		this.name = 'UnsupportedMediaTypeError'
	}
}
