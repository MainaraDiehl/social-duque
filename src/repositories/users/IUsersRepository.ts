import { User } from "../../entities/User"

export interface IUsersRepository{
    findAll(): Promise<User[]>
    create(user:User):Promise<User>
    findById(id:string):Promise<User|null>
    findByEmail(email:string):Promise<User|null>
    findByPhone(phone:string):Promise<User|null>
    update(id:string, data: Partial<User>):Promise<User>
    delete(id:string):Promise<void>
}