import { IUsersRepository } from "../../repositories/users/IUsersRepository";
import { User } from "../../entities/User";
export class FindUserByIdUseCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute(id: string): Promise<Omit<User, 'password'>> {
    const user = await this.usersRepository.findById(id)
    if (!user) throw new Error('Usuário não encontrado')
    const { password, ...safeUser } = user
    return safeUser
  }
}