import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { env } from './config/env'
import { Post } from './entities/Post'
import { User } from './entities/User'
import { Comment } from './entities/Comment'
//import {User} from './entities/User'
export const AppDataSource = new DataSource({
type: 'sqlite',
database:env.DATABASE_FILE,
synchronize: false,
logging: false,
entities: [User, Post, Comment],
migrations: ['./src/typeorm/migrations/*.ts']
})