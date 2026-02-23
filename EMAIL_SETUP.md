# Contact Form Email Setup Guide

## Overview
This project uses Vercel serverless functions to send emails via GoDaddy SMTP when users submit contact forms.

## Features
- ✉️ Professional email notifications sent to **info@brajproperty.in**
- 📧 Automatic confirmation emails sent to users (if they provide email)
- 📱 Works with both Contact Page form and Lead Popup (brochure) form
- 🎨 Beautiful HTML email templates with branding
- ⚡ Vercel-optimized serverless function

## Setup Instructions

### 1. Get GoDaddy Email Credentials

1. Log in to your GoDaddy account
2. Go to **Email & Office Dashboard**
3. Click **Manage** next to your email account (info@brajproperty.in)
4. Note down:
   - Email: `info@brajproperty.in`
   - Password: Your email password

### 2. Configure Environment Variables in Vercel

1. Go to your Vercel dashboard
2. Select your project: **BrajProperty**
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

```
GODADDY_EMAIL=info@brajproperty.in
GODADDY_PASSWORD=your_actual_password_here
```

5. Click **Save**
6. Redeploy your project for the changes to take effect

### 3. Verify GoDaddy SMTP Settings

GoDaddy uses these SMTP settings (already configured in the code):
- **Host**: `smtpout.secureserver.net`
- **Port**: `465`
- **Secure**: `true` (SSL/TLS)

### 4. Test the Setup

After deployment:

1. Visit your website contact page
2. Fill out and submit the contact form
3. Check:
   - ✓ You receive an email at **info@brajproperty.in** with lead details
   - ✓ User receives a confirmation email (if they provided email)

## Email Templates

### Admin Email (to info@brajproperty.in)
- Professional layout with lead information
- Quick action buttons (Call, WhatsApp)
- Color-coded by form type
- All form fields displayed in organized table

### User Confirmation Email
- Branded BrajProperty design
- Thank you message
- Confirmation that team will respond within 30 minutes
- Contact information and quick action buttons
- Professional footer with company details

## Troubleshooting

### Emails Not Sending?

1. **Check Environment Variables**
   - Verify `GODADDY_EMAIL` and `GODADDY_PASSWORD` are set in Vercel
   - Make sure there are no extra spaces or quotes

2. **Check GoDaddy Email Status**
   - Ensure the email account is active
   - Try logging into GoDaddy webmail with the same credentials

3. **Check Vercel Function Logs**
   - Go to Vercel Dashboard → Your Project → Functions
   - Check logs for error messages

4. **Test SMTP Credentials**
   - Try logging into your GoDaddy email through their webmail
   - If you can't log in, reset your email password

### Common Issues

**"Authentication failed"**
- Double-check your email password
- Make sure you're using the email password, not your GoDaddy account password

**"Connection timeout"**
- Check if GoDaddy SMTP is blocked by firewall
- Verify SMTP settings are correct

**User not receiving confirmation email**
- Check user's spam folder
- Verify email address was entered correctly
- Check if user's email provider is blocking automated emails

## Form Endpoints

- **API Endpoint**: `/api/contact`
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Body
```json
{
  "name": "Customer Name",
  "phone": "9876543210",
  "email": "customer@example.com",
  "interestedIn": "Project Name",
  "message": "Optional message",
  "formType": "contact" // or "brochure" or "quote"
}
```

### Response
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

## Security Notes

- ✓ Environment variables are encrypted in Vercel
- ✓ Never commit `.env` file to git (already in .gitignore)
- ✓ Use strong password for GoDaddy email
- ✓ API endpoint validates required fields
- ✓ CORS is handled by Vercel automatically

## Support

For issues with email delivery, contact:
- **Developer**: Check Vercel function logs
- **GoDaddy Support**: For SMTP/email account issues

---

**Last Updated**: December 2024
