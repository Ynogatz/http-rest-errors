import { NextFunction, Request, Response } from 'express'

export class GenericError extends Error {

	public teste: string = 'heuheu'
	public readonly status: number
	public readonly error: any
	public name: string = 'GenericError'

	constructor (message: string, status: number, error?: any) {
		super(message)
		this.status = status

		this.error = error ? error : null
	}
}

export const handleErrors = <
	U extends Request,
	V extends Response,
	W extends NextFunction
> (error: any, request: U, response: V, next: W): void => {
	if (error instanceof GenericError) {
		response
			.status(error.status)
			.json({
				message: error.message,
				status: error.status
			})
	} else {
		console.error('Internal server error: ' + error.message)
		response
			.status(500)
			.json({
				message: 'Internal server error',
				status: 500
			})
	}
}
