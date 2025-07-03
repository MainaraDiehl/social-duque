import Fastify from 'fastify'
import { AppDataSource } from './data-source'
import { userRoutes } from './routes/User-routes'

// ✨ Importa os plugins do Swagger
import swagger from '@fastify/swagger'
import swaggerUI from '@fastify/swagger-ui'

export async function startApp() {
  const app = Fastify()

  // 📦 Inicializa banco de dados
  await AppDataSource.initialize()
    .then(() => {
      console.log('Banco de dados inicializado')
    })
    .catch((ex) => {
      console.log('Erro de conexão do banco de dados', ex)
      process.exit(1)
    })

  // 📄 Plugin Swagger - especificação OpenAPI
  await app.register(swagger, {
    openapi: {
      info: {
        title: 'API de Usuários',
        description: 'Documentação da API com Swagger',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Servidor Local',
        },
      ],
    },
  })

  // 💻 Interface Swagger UI (em /docs)
  await app.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
  })

  // 📌 Suas rotas
  await app.register(userRoutes)

  return app
}