'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('sent');
  }

  if (status === 'sent') {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>✓</span>
        <h3 className="h3">Message sent</h3>
        <p>We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input className={styles.input} type="text" id="name" name="name" required autoComplete="name" />
        </p>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} type="email" id="email" name="email" required autoComplete="email" />
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="org">Organisation <span className={styles.hint}>optional</span></label>
          <input className={styles.input} type="text" id="org" name="org" autoComplete="organization" />
        </p>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="role">Role <span className={styles.hint}>optional</span></label>
          <input className={styles.input} type="text" id="role" name="role" placeholder="e.g. Project Director" />
        </p>
      </div>
      <div className={styles.row}>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone <span className={styles.hint}>optional</span></label>
          <input className={styles.input} type="tel" id="phone" name="phone" placeholder="+91" autoComplete="tel" />
        </p>
        <p className={styles.field}>
          <label className={styles.label} htmlFor="enquiry">This is about</label>
          <select className={`${styles.input} ${styles.select}`} id="enquiry" name="enquiry">
            <option value="">Select one…</option>
            <option value="Pilot deployment">Pilot deployment</option>
            <option value="Partnership">Partnership</option>
            <option value="Investment">Investment</option>
            <option value="Research collaboration">Research collaboration</option>
            <option value="Media">Media</option>
            <option value="Other">Other</option>
          </select>
        </p>
      </div>
      <p className={styles.field}>
        <label className={styles.label} htmlFor="message">Message <span className={styles.hint}>optional</span></label>
        <textarea className={`${styles.input} ${styles.textarea}`} id="message" name="message" rows={4} />
      </p>
      <button type="submit" className={`btn btn--primary ${styles.submit}`} disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
