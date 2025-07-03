import { FastifyReply, FastifyRequest } from "fastify"
import { UpdateUserUseCase } from "../../usecases/users/update-user-usecase"
import { UsersRepository } from "../../repositories/users/UsersRepository"
import { string } from "zod"

type UpdateUserRequest = {
    Params: { id: string}
    Body: {
        name?: string
        email?: string
        phone?: string
        password?: string
    }
}

export class UpdateUserController{
    async handle(
        request: FastifyRequest<UpdateUserRequest>,
        reply: FastifyReply
    ) {
        try {
            const usecase = new UpdateUserUseCase(new UsersRepository())
            const result = await usecase.execute(request.params.id, request.body)
            return reply.send(result)
        } catch (err: any) {
            return reply.status(400).send({ error: err.message })
        }
    }
}