
import { connectToDatabase } from '../../../../lib/mongodb';
import User from '../../../../models/user';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDatabase();

        const { name, email, password, phone } = await req.json();

        if (!name || !email || !password) {
            return new Response(JSON.stringify({ error: 'Name, email, and password are required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            //   return new Response(JSON.stringify({ error: 'Email is already registered' }), {
            //     status: 400,
            //     headers: { 'Content-Type': 'application/json' },
            //   });
            return NextResponse.json({ error: "Email is already registered" }, { status: 400 })
        }
        if (phone) {
            const existingPhone = await User.findOne({ phone });
            if (existingPhone) {
                return NextResponse.json({ error: "Phone number is already registered" }, { status: 400 })
            }

        }
        const newUser = new User({ name, email, password, phone });
        await newUser.save();

        const accessToken = newUser.generateAccessToken();
        const refreshToken = newUser.generateRefreshToken();

        const response = NextResponse.json({
            message: "Sign up successful",
            success: true,
        })
        response.cookies.set("token", accessToken, {
            httpOnly: true,

        })
        return response;
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
