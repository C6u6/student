import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const studentModel = prisma.studentRecord.create({
        data: {
            id: '123e4567-e89b-12d3-a456-426614174000',
            name: 'Estudante modelo',
            email: 'estudantemodelo@scientia.com',
            password: 'LeonardoDavinci'
        }
    })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
