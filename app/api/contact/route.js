import nodemailer from "nodemailer";
import {NextResponse} from "next/server";

export async function POST(req) {
    const body = await req.json()
    const {name, email, topic, message} = body;

    // Check if all the required fields are provided
    if (!topic || !message || !name || !email) {
        return NextResponse.json({error: 'Please enter all fields!'}, {status: 500})
    } else {

        // Assuming you want to keep a check for bots similar to the 'privacy' field
        let transporter = await nodemailer.createTransport({
            host: 'smtp-mail.outlook.com', service: 'outlook', port: 587, auth: {
                user: "NoteSounds@hotmail.com", pass: "NEWpass123$"
            }
        });

        // Update the email content with the new form fields
        await transporter.sendMail({
            from: "NoteSounds@hotmail.com",
            to: "NoteSounds@hotmail.com",
            subject: "New website enquiry",
            html: `<p>Name: ${name}</p>
<p>Email: ${email}</p>
<p>Topic: ${topic}</p>
<p>Message: ${message}</p>`
        });

        return NextResponse.json({message: 'Email sent successfully!'}, {status: 200})

    }
}