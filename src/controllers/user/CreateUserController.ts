import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../../usecases/users/create-user-usecase'
import { UserRepository } from '../../repositories/users/UsersRepository'
import { FindByIdUsersController } from './FindByIdController'
import { FindAllUsersController } from './FindAllController'
import { UpdateUsersController } from './UpdateController'

const UserRepo = new UserRepository()

export class UsersController {
    async create(request: FastifyRequest, reply: FastifyReply) {
        try {
            const usecase = new CreateUserUseCase(UserRepo)
            const result = await usecase.execute(request.body as any)
            return reply.status(201).send(result)
        }catch (error: any){
            return reply.status(400).send({error: error.message})
        }
    }
}

