import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(product) {
    const result = await prisma.product.create({
        data: product
    })
    return result
}

export async function list() {
    const result = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            preco: true,
            tipo: true,
            imagem: true,
        }
    })
    return result
}

export async function getById(id) {
    const result = await prisma.product.findUnique({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            preco: true,
            tipo: true,
            imagem: true,
        }
    })
    return result
}

export async function remove(id) {
    const result = await prisma.product.delete({
        where: {
            id: id
        },
        select: {
            id: true,
            name: true,
            preco: true,
            tipo: true,
            imagem: true,
        }
    })
    return result
}


export async function update(id, product) {
    const result = await prisma.product.update({
        where: {
            id: id
        },
        data: product,
        select: {
            id: true,
            name: true,
            email: true,
            avatar: true
        }
    })
    return result

}

