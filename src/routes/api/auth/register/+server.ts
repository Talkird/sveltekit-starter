import type { RequestHandler } from '@sveltejs/kit';
import connectMongo from "../../../../lib/mongoose/mongoose";
import User from "../../../../lib/mongoose/models/User";

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json(); 
    const { username, email, password, role } = body;

    try {
        await connectMongo();
        const newUser = new User({ username, email, password, role });
        await newUser.save();

        return new Response(JSON.stringify({ message: "User created" }), { status: 201 });

    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to create user" }), { status: 500 });
    }
};
