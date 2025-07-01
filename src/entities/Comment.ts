import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from './User'
import { Post } from "./Post"

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'text' })
    content!: string

    @ManyToOne(() => User, user => user.comments)
    author!: User

    @ManyToOne(() => Post, post => post.comments)
    post!: Post

    @CreateDateColumn()
    created_at!: Date
}