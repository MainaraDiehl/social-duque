import { IUsersRepository } from "../../repositories/users/IUsersRepository"
import { CreateUserInput, createUserSchema } from "../../schemas/user-schema"
import { Hash } from "crypto"
import {v4 as uuidv4} from "uuid"
import { User } from "../../entities/User"

export class FindAllUsersUseCase{
    constructor(private usersRepository:IUsersRepository){}
    async execute(input:CreateUserInput){
        const data = createUserSchema.parse(input)

        const existingEmail = await this.usersRepository.findByEmail(data.email)
        if(existingEmail){
            throw new Error('E-mail já cadastrado')
        }

        const existingPhone = await this.usersRepository.findByPhone(data.phone)
        if(existingPhone){
            throw new Error('Telefone já cadastrado')
        }

    }
}