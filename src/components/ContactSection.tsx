import { useState } from 'react'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const validEmail = /.+@.+\..+/.test(email)
  const canSubmit = name.length >= 2 && validEmail && message.length >= 10

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-14">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact</h2>
        {submitted ? (
          <div className="rounded-md border border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-950/30 p-4">
            Thanks, {name.split(' ')[0]}! We received your message.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                minLength={2}
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                type="email"
              />
              {!validEmail && email.length > 0 && (
                <p className="text-xs text-red-600 mt-1">Please enter a valid email.</p>
              )}
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2"
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                minLength={10}
              />
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="px-5 py-2 rounded-md bg-blue-600 text-white disabled:opacity-50"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
