import { FastifyReply, FastifyRequest } from 'fastify'
import { DeleteUserUseCase } from '../../usecases/users/delete-user-usecase'
import { UsersRepository } from '../../repositories/users/UsersRepository'

export class DeleteUserController {
  async handle( request: FastifyRequest<{ Params: { id: string}}>,reply: FastifyReply,){
    try {
      const usecase = new DeleteUserUseCase(new UsersRepository())
      await usecase.execute(request.params.id)
      return reply.status(204).send()
    } catch (err: any) {
      return reply.status(400).send({ error: err.message})
    }
  }
}