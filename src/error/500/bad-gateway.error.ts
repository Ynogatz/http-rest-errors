import { GenericError } from '../generic.error'

export class BadGatewayError extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Bad gateway'), 502, error)
		this.name = 'BadGatewayError'
	}
}
