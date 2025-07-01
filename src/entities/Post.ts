import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './User'
import { Comment } from './Comment'

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'text' })
    content!: string

    @ManyToOne(() => User, user => user.posts)
    author!: User

    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[]

    @CreateDateColumn()
    created_at!: Date
}