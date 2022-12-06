import { GenericError } from '../generic.error'

export class UnprocessableEntity extends GenericError {
	constructor (message?: string, error?: any) {
		super((message || 'Unprocessable entity'), 422, error)
		this.name = 'UnprocessableEntity'
	}
}
