import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const generateFakeProduct = () => ({
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    createdAt: faker.date.anytime(),
});

const seed = async () => {
    try {
        for (let i = 0; i < 20; i++) {
            const fakeProduct = generateFakeProduct();
            await prisma.product.create({ data: fakeProduct });
        }

        console.log("Seed completed successfully");
    } catch (error) {
        console.error("Error seeding the database:", error);
    } finally {
        await prisma.$disconnect();
    }
};

seed();
