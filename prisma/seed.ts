import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const post = await prisma.post.upsert({
    where: { title: "" },
    update: {},
    create: {
      title: "Upgrade Your Existing Projects To Next Js 13",
      slug: "upgrade-your-existing-projects-to-next-js-13",
      content:
        "<p>Vercel recently announced Next Js 13 (stable) at Next Js Conf, and it comes with some great and useful features which made Next Js even faster and more efficient in Development and Production.</p>",
    },
  });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
