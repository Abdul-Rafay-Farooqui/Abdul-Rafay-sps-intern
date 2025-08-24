// services/email.js
import emailjs from 'emailjs-com';

// Initialize EmailJS with your public key
// Make sure to set this up in your environment variables
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
// Template IDs - replace with your actual template IDs
const HOST_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_HOST_TEMPLATE_ID;
const USER_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_TEMPLATE_ID;

// Initialize EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send emails to both host and user using EmailJS templates
 * @param {Object} formData - The form data submitted by the user
 * @returns {Promise} - Promise that resolves when both emails are sent
 */
export const sendEmails = async (formData) => {
  try {
    // Prepare template parameters for both emails
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      job: formData.job,
      date: formData.date,
      time: formData.time,
      submission_date: new Date().toLocaleDateString(),
      submission_time: new Date().toLocaleTimeString(),
    };

    // Send email to host
    const hostEmailPromise = emailjs.send(
      EMAILJS_SERVICE_ID,
      HOST_TEMPLATE_ID,
      templateParams
    );

    // Send confirmation email to user
    const userEmailPromise = emailjs.send(
      EMAILJS_SERVICE_ID,
      USER_TEMPLATE_ID,
      templateParams
    );

    // Wait for both emails to be sent
    const results = await Promise.allSettled([hostEmailPromise, userEmailPromise]);
    
    // Check if both emails were sent successfully
    const hostEmailSuccess = results[0].status === 'fulfilled';
    const userEmailSuccess = results[1].status === 'fulfilled';
    
    return {
      success: hostEmailSuccess && userEmailSuccess,
      hostEmailSuccess,
      userEmailSuccess,
      errors: results
        .filter(result => result.status === 'rejected')
        .map(result => result.reason)
    };
  } catch (error) {
    console.error('Error sending emails:', error);
    return {
      success: false,
      hostEmailSuccess: false,
      userEmailSuccess: false,
      errors: [error]
    };
  }
};

export default sendEmails;