import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../../usecases/users/create-user-usecase'
import { UserRepository } from '../../repositories/users/UsersRepository'
import { FindByIdUsersController } from './FindByIdController'
import { UpdateUsersController } from './UpdateController'
import { DeleteUsersController } from './DeleteController'

const UserRepo = new UserRepository()

export class FindAllUsersController {
    async findAll(request: FastifyRequest, reply: FastifyReply) {
        const usecase = new FindAllUsersUseCase(UserRepo)
        const users = await usecase.execute()
        return reply.send(users)
    }
}