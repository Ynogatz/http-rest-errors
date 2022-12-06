# http-rest-errors

Lib para facilitar lançamento de erros

# Como utilizar:

    import { BadRequestError, GenericError } from 'http-rest-errors'

Você pode utilizar um erro específico como o BadRequest, exemplo

    const error: BadRequestError = new BadRequestError()

Esta classe pode receber dois parâmetros, mensagem: string e o erro: any

    const message: string = 'mensagem de erro'
    const e: any = {
        error: 'error'
    }
    const error: BadRequestError = new BadRequestError(message, e)

Outra opção é criar um erro Genérico

    const error: GenericError = new GenericError()

Você também poderá passar parâmetros para instanciar esta classe

    const message: string = 'mensagem de teste erro'
    const status: number = 401
    const error: GenericError = new GenericError(message, status)
