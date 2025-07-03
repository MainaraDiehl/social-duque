import { AppDataSource } from '../../data-source'
import { IUsersRepository } from './IUsersRepository'
import { User } from '../../entities/User'
import { Repository } from 'typeorm'

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User> = AppDataSource.getRepository(User)

  async findAll(): Promise<User[]> {
      return await this.repository.find()
  }

  async create(user: User): Promise<User> {
      const newUser = this.repository.create(user)
      return await this.repository.save(newUser)
  }

  findById(id: string): Promise<User | null> {
      return this.repository.findOne({ where: { id } })
  }

  findByEmail(email: string): Promise<User | null> {
      return this.repository.findOne({ where: { email } })
  }

  findByPhone(phone: string): Promise<User | null> {
      return this.repository.findOne({ where: { phone } })
  }

  async update(id: string, data: Partial<User>): Promise<User> {
      const user = await this.findById(id)
      if (!user) {
          throw new Error('Usuário não encontrado')
      }

      Object.assign(user, data)
      return await this.repository.save(user)
  }

  async delete(id: string): Promise<void> {
      const user = await this.findById(id)
      if (!user) {
          throw new Error('Usuário não encontrado')
      }

      await this.repository.remove(user)
  }
}