import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, interestedIn, message, formType } = req.body;

  // Validate required fields
  if (!name || !phone) {
    return res.status(400).json({ message: 'Name and phone are required' });
  }

  try {
    // Create transporter with GoDaddy SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GODADDY_EMAIL, // info@brajproperty.in
        pass: process.env.GODADDY_PASSWORD,
      },
    });

    // Email to admin (info@brajproperty.in)
    const adminEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <div style="border-bottom: 3px solid #f97316; padding-bottom: 20px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin: 0;">New ${formType === 'brochure' ? 'Brochure Request' : 'Contact Form'} Submission</h2>
          </div>
          
          <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px;">
            <p style="margin: 0; color: #92400e; font-weight: bold;">📞 New lead received!</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background-color: #f9fafb; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Name:</td>
              <td style="padding: 12px; background-color: #ffffff; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; background-color: #f9fafb; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Phone:</td>
              <td style="padding: 12px; background-color: #ffffff; color: #1f2937; border-bottom: 1px solid #e5e7eb;">
                <a href="tel:${phone}" style="color: #f97316; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 12px; background-color: #f9fafb; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Email:</td>
              <td style="padding: 12px; background-color: #ffffff; color: #1f2937; border-bottom: 1px solid #e5e7eb;">
                <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ` : ''}
            ${interestedIn ? `
            <tr>
              <td style="padding: 12px; background-color: #f9fafb; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb;">Interested In:</td>
              <td style="padding: 12px; background-color: #ffffff; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${interestedIn}</td>
            </tr>
            ` : ''}
            ${message ? `
            <tr>
              <td style="padding: 12px; background-color: #f9fafb; font-weight: bold; color: #374151; border-bottom: 1px solid #e5e7eb; vertical-align: top;">Message:</td>
              <td style="padding: 12px; background-color: #ffffff; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${message}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 12px; background-color: #f9fafb; font-weight: bold; color: #374151;">Form Type:</td>
              <td style="padding: 12px; background-color: #ffffff; color: #1f2937;">${formType === 'brochure' ? 'Brochure Download' : 'Contact Form'}</td>
            </tr>
          </table>

          <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px;">
            <p style="margin: 0 0 10px 0; color: #92400e; font-weight: bold;">Quick Actions:</p>
            <a href="tel:${phone}" style="display: inline-block; margin-right: 10px; margin-bottom: 10px; padding: 10px 20px; background-color: #f97316; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">📞 Call Now</a>
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; margin-bottom: 10px; padding: 10px 20px; background-color: #10b981; color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">💬 WhatsApp</a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>This email was sent from BrajProperty.in contact form</p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: `"BrajProperty Contact Form" <${process.env.GODADDY_EMAIL}>`,
      to: process.env.GODADDY_EMAIL,
      subject: `🔔 New ${formType === 'brochure' ? 'Brochure Request' : 'Contact'} from ${name}`,
      html: adminEmailContent,
    });

    // Send confirmation email to user (if email provided)
    if (email) {
      const userEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #f97316; margin: 0; font-size: 32px;">BrajProperty</h1>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 14px;">Premium Properties in Vrindavan</p>
            </div>

            <div style="background-color: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; margin-bottom: 25px; border-radius: 4px;">
              <h2 style="color: #065f46; margin: 0 0 10px 0; font-size: 20px;">✓ Thank You for Contacting Us!</h2>
              <p style="color: #047857; margin: 0; font-size: 14px;">We've received your inquiry and our team will get back to you within 30 minutes.</p>
            </div>

            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">Your Inquiry Details:</h3>
              <table style="width: 100%;">
                <tr>
                  <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: bold; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: bold; font-size: 14px;">${phone}</td>
                </tr>
                ${interestedIn ? `
                <tr>
                  <td style="padding: 8px 0; color: #78716c; font-size: 14px;">Interested In:</td>
                  <td style="padding: 8px 0; color: #1f2937; font-weight: bold; font-size: 14px;">${interestedIn}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px;">Why Choose BrajProperty?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px; line-height: 1.8;">
                <li>100% MVDA-Approved Properties</li>
                <li>Prime locations in Vrindavan-Mathura</li>
                <li>Transparent documentation & pricing</li>
                <li>Dedicated customer support</li>
                <li>Best ROI in holy city real estate</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 25px 0;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px;">Need Immediate Assistance?</h3>
              <a href="tel:+919548877888" style="display: inline-block; margin: 0 5px 10px 5px; padding: 12px 30px; background-color: #f97316; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">📞 Call Us Now</a>
              <a href="https://wa.me/919548877888" style="display: inline-block; margin: 0 5px 10px 5px; padding: 12px 30px; background-color: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px;">💬 WhatsApp</a>
            </div>

            <div style="border-top: 2px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 10px 0;">
                <strong>BrajProperty</strong><br>
                Premium Properties in Vrindavan-Mathura<br>
                📧 info@brajproperty.in | 📞 +91 95488 77888
              </p>
              <div style="margin-top: 15px;">
                <a href="https://brajproperty.in" style="color: #f97316; text-decoration: none; font-size: 13px; margin: 0 10px;">Visit Website</a>
                <span style="color: #d1d5db;">|</span>
                <a href="mailto:info@brajproperty.in" style="color: #f97316; text-decoration: none; font-size: 13px; margin: 0 10px;">Email Us</a>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 11px;">
            <p style="margin: 5px 0;">This is an automated confirmation email from BrajProperty.in</p>
            <p style="margin: 5px 0;">Please do not reply to this email. For inquiries, contact us at info@brajproperty.in</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"BrajProperty" <${process.env.GODADDY_EMAIL}>`,
        to: email,
        subject: '✓ Thank You for Contacting BrajProperty - We\'ll Reach Out Soon!',
        html: userEmailContent,
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
