"use client";

import React, { useMemo, useState } from 'react';

export interface ContactFormProps {
  className?: string;
  onSubmit?: (data: { name: string; email: string; message: string }) => Promise<void> | void;
}

export default function ContactForm({ className, onSubmit }: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0;
  }, [name, email, message]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === 'sending') return;

    try {
      setStatus('sending');
      await onSubmit?.({ name, email, message });
      // If no handler is provided, still behave nicely.
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className ?? ''}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border bg-background px-4 py-2"
            autoComplete="name"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border bg-background px-4 py-2"
            autoComplete="email"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[140px] w-full rounded-xl border bg-background px-4 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={!canSubmit || status === 'sending'}
          className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'sent' ? (
          <p className="text-sm text-muted-foreground">Thanks — we’ll be in touch.</p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
        ) : null}
      </div>
    </form>
  );
}
