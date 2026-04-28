"use server";

import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill out all required fields." };
  }

  // 1. Check Environment Variables safely
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!supabaseUrl || !supabaseKey || !emailUser || !emailPass) {
    console.error("SERVER ERROR: Missing environment variables.");
    return { error: "Server configuration error. Please try again later." };
  }

  try {
    // 2. Initialize Supabase safely inside the try block
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 3. SAVE TO SUPABASE FIRST
    const { error: dbError } = await supabase
      .from("bookings")
      .insert([{ name, email, phone, message, status: 'pending' }]);

    if (dbError) {
      console.error("Supabase Error:", dbError);
      return { error: "Failed to save booking to database." };
    }

    // 4. SEND THE EMAIL NOTIFICATION
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      to: emailUser,
      replyTo: email,
      subject: `🚨 New MFP Detailing Lead: ${name}`,
      html: `<p>New lead from ${name}. Email: ${email}. Phone: ${phone}</p><p>Message: ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
    
  } catch (error) {
    console.error("Action Error Details:", error);
    return { error: "Failed to process request. Please try again later." };
  }
}