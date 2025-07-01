import { z } from "zod"

// Schema para criação de usuário (entrada)
export const createUserSchema = z.object({
    name: z.string().min(3).max(100),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    password: z.string().min(6).max(32),
})

// Schema para usuário completo (resposta, com id e created_at)
export const userSchema = createUserSchema.extend({
    id: z.string().uuid(),
    created_at: z.date(),
})

// Tipos inferidos para usar nos usecases
export type CreateUserInput = z.infer<typeof createUserSchema>
export type UserOutput = z.infer<typeof userSchema>
