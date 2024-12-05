//@ts-nocheck
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Configure the SMTP transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Gmail SMTP server
            port: 587, // Secure port for Gmail
            secure: false, // Use TLS
            auth: {
                user: 'shohagmiah2100@gmail.com', // Your Gmail address
                pass: 'bwgn nfhl frwt cklt', // App password from Google
            },
        });

        // Configure email options
        const mailOptions = {
            from: 'shohagmiah2100@gmail.com', // Your Gmail address
            to: 'shohagmiah2100@gmail.com', // Replace with your recipient's email
            subject: `New Contact Form Submission from ${name}`,
            text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(`Error: ${error.message}`);
            }
            console.log(`Email sent: ${info.response}`);
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}
