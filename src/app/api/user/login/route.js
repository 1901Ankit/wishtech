
import { connectToDatabase } from '../../../../lib/mongodb';
import User from '../../../../models/user';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDatabase();

        const { email, password } = await req.json();
        if (!email || !password) {
            return new Response(JSON.stringify({ error: 'Email and password are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
            //   return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
            //     status: 401,
            //     headers: { 'Content-Type': 'application/json' },
            //   });
        }

        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
            // return new Response(JSON.stringify({ error: 'Invalid email or password' }), {
            //     status: 401,
            //     headers: { 'Content-Type': 'application/json' },
            // });
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        // return new Response(JSON.stringify({ message: 'Login successful', accessToken, refreshToken }), {
        //     status: 200,
        //     headers: { 'Content-Type': 'application/json' },
        // });

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", accessToken, {
            httpOnly: true,

        })
        return response;
    } catch (error) {

        console.error(error);
        // return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
        //     status: 500,
        //     headers: { 'Content-Type': 'application/json' },
        // });
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
