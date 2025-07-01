import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../../usecases/users/create-user-usecase'
import { UserRepository } from '../../repositories/users/UsersRepository'
import { FindByIdUsersController } from './FindByIdController'
import { FindAllUsersController } from './FindAllController'
import { DeleteUsersController } from './DeleteController'

const UserRepo = new UserRepository()

export class UpdateUsersController {
    async update(request: FastifyRequest<{ Params: { id: string }; Body: any }>, reply: FastifyReply) {
        try {
          const usecase = new UpdateUserUseCase(UserRepo)
          const updated = await usecase.execute(request.params.id, request.body)
          return reply.send(updated)
        } catch (error: any) {
          return reply.status(400).send({ error: error.message })
        }
      }
}