import { BadRequestError, GenericError } from '../src'

describe('Deverá realizar testes das classes de erro', () => {
	test('deverá criar um GenericError', () => {
		const message: string = 'mensagem de teste erro'
		const status: number = 401
		const error: GenericError = new GenericError(message, status)

		console.log(error)

		expect(error.name).toBe('GenericError')
		expect(error.status).toBe(status)
		expect(error.message).toBe(message)
		expect(error.error).toBeNull()
		expect(error).toBeInstanceOf(GenericError)
	})

	test('deverá criar um erro GenericError passando um objeto vazio como parametro de erro', () => {
		const message: string = 'mensagem de teste erro'
		const status: number = 401
		const error: GenericError = new GenericError(message, status, {})

		expect(error.name).toBe('GenericError')
		expect(error.status).toBe(status)
		expect(error.message).toBe(message)
		expect(error.error).toStrictEqual({})
		expect(error).toBeInstanceOf(GenericError)
	})

	test('deverá criar um BadRequestError com os valores default', () => {

		const error: BadRequestError = new BadRequestError()

		expect(error.name).toBe('BadRequestError')
		expect(error.status).toBe(400)
		expect(error.message).toBe('Invalid request')
		expect(error.error).toBeNull()
		expect(error).toBeInstanceOf(GenericError)
	})

	test('deverá criar um erro BadRequest setando uma mensagem personalizada e passando um objeto vazio no parâmetro erro', () => {
		const message: string = 'mensagem de teste erro'
		const error: BadRequestError = new BadRequestError(message, {
			anyError: true
		})

		console.log(error)

		expect(error.name).toBe('BadRequestError')
		expect(error.status).toBe(400)
		expect(error.message).toBe(message)
		expect(error.error).toStrictEqual({})
		expect(error).toBeInstanceOf(GenericError)
	})
})
