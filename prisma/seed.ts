import { PrismaClient } from '@/lib/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL!
  const password = process.env.ADMIN_PASSWORD!
  const name = process.env.ADMIN_NAME || 'Admin'

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    console.log('✅ Admin bestaat al.')
    return
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  })

  console.log('✅ Admin user succesvol aangemaakt.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
