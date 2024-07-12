import React, { useEffect, useState, useRef } from 'react';
import styles from './ContactForm.module.css';
import { ToastContainer, toast, Bounce } from 'react-toastify'; // Import Bounce
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerRef = useRef(null);

  // Commented out the scrolling behavior
  /*
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      // Define a threshold to trigger the scroll effect, e.g., 100px from the bottom
      const threshold = 500;

      if (distanceFromBottom <= threshold) {
        const scrollProgress = (threshold - distanceFromBottom) / threshold; // Adjust as needed
        const translateYValue = 100 - 100 * scrollProgress; // Adjust as needed
        containerRef.current.style.transform = `translateY(${translateYValue}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  */

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/user/getmessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log('Signup successful!');
        localStorage.setItem('token', responseData.authtoken);
        toast.success('Your message sent successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        // Handle failed signup
        toast.error('Error during message sending', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error('Error during message sending', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div ref={containerRef} className={styles.container} id="contact">
        <div className='getintouch'>Get In Touch</div>
        <form action="post" onSubmit={handleSubmit} className={styles.contactForm}>
          <input type="text" aria-label='name' name='name' placeholder='name' className={styles.input} onChange={handleChange} />
          <input type="email" name='email' placeholder='email' className={styles.input} onChange={handleChange} />
          <textarea type="text" id='message' name='message' placeholder='message' className={styles.textarea} onChange={handleChange} />
          <button className={`${styles.btn} ${styles.rotate}`} type='submit'>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
