import { IUsersRepository } from "../../repositories/users/IUsersRepository"

export class DeleteUserUseCase {
    constructor(private usersRepository: IUsersRepository){}
    
    async execute(id: string): Promise<void> {
        const user = await this.usersRepository.findById(id)
        if (!user) throw new Error('Usuário não encontrado')
        await this.usersRepository.delete(id)
    }
}