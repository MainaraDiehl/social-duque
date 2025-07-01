import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../../usecases/users/create-user-usecase'
import { UserRepository } from '../../repositories/users/UsersRepository'
import { FindAllUsersController } from './FindAllController'
import { DeleteUsersController } from './DeleteController'
import { UpdateUsersController } from './UpdateController'

const UserRepo = new UserRepository()

export class FindByIdUsersController {
    async findById(request: FastifyRequest<{Params: {id: string}}>, reply: FastifyReply) {
        try {
            const usecase = new FindUserByIdUseCase(UserRepo)
            const user = await usecase.execute(request.params.id)
            return reply.send(user)
        } catch (error: any) {
            return reply.status(404).send({error: error.message})
        }
    }
}