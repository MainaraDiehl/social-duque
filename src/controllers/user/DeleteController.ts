import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../../usecases/users/create-user-usecase'
import { UserRepository } from '../../repositories/users/UsersRepository'
import { FindByIdUsersController } from './FindByIdController'
import { FindAllUsersController } from './FindAllController'
import { UpdateUsersController } from './UpdateController'

const UserRepo = new UserRepository()

export class DeleteUsersController {
    async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        try {
          const usecase = new DeleteUserUseCase(UserRepo)
          await usecase.execute(request.params.id)
          return reply.status(204).send()
        } catch (error: any) {
          return reply.status(400).send({ error: error.message })
        }
      }
    
}