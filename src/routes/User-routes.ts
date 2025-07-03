import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controllers/user/CreateUserController'
import { ListUserController } from '../controllers/user/ListUserController'
import { FindUserByIdController } from '../controllers/user/FindUserByIdController'
import { DeleteUserController } from '../controllers/user/DeleteController'
import { UpdateUserController } from '../controllers/user/UpdateController'


const listusercontroller = new ListUserController()
const createcontroller = new CreateUserController()
const findByIdController = new FindUserByIdController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

export async function userRoutes(app:FastifyInstance){

    app.post('/users', {
        schema: {
          tags: ['Usuários'],
          summary: 'Criar usuário',
          body: {
            type: 'object',
            required: ['name', 'email'],
            properties: {
              name: { type: 'string' },
              email: { type: 'string', format: 'email' }
            }
          },
          response: {
            201: {
              description: 'Usuário criado',
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                email: { type: 'string' }
              }
            }
          }
        },
        handler: createcontroller.handle.bind(createcontroller)
      })
    app.get('/users', listusercontroller.handle)
    app.get('/users/:id', findByIdController.handle)
    app.put('/users/update/:id', updateUserController.handle)
    app.delete('/users/delete/:id', deleteUserController.handle)
   

}