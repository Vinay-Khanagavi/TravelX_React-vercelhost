import React, { useRef } from 'react';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        try {
            const response = await fetch('http://localhost:3001/sendEmail', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Email sent successfully');
                form.current.reset();
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" name="to_name" type="text" />
                <input placeholder="Email" type="email" name="from_name" />
                <textarea placeholder="Message" rows="4" name="message"></textarea>
                <button type="submit" value="Send">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
