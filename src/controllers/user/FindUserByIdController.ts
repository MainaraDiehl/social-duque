import { FastifyReply, FastifyRequest } from "fastify";
import { FindUserByIdUseCase } from "../../usecases/users/find-by-id-usecase";
import { UsersRepository } from "../../repositories/users/UsersRepository";

export class FindUserByIdController{
    async handle(req:FastifyRequest<{Params:{id:string}}>,
    reply:FastifyReply){
    try{
        const usecase = new FindUserByIdUseCase(new UsersRepository())
        const result = await usecase.execute(req.params.id)
        return reply.send(result)
    }catch(error:any){
        return reply.status(404).send({ error: error.message })
    }
    
    
    }    
    }