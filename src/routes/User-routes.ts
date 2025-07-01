import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controllers/user/CreateUserController'
import { ListUsersController } from '../controllers/user/ListUsersController'

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()
export function userRoutes(app:FastifyInstance){
    app.post('/users',createUserController.handle)
    app.get('/users', listUsersController.handle)
}
