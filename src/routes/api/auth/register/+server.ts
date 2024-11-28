import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json(); 
    const { username, email, password, role } = body;

    try {
        const newUser = await prisma.user.create({
            data: { 
                username, 
                email, 
                password, 
                role
            }});

        return new Response(JSON.stringify({ message: "User created" }), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to create user" }), { status: 500 });
    }
};
