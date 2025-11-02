import { useState } from 'react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Simple fallback: open default mail client
    const mailto = `mailto:someone@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s collaborate</h2>
          <p className="mt-4 text-slate-600">Have a project in mind or want to discuss secure digital solutions? Send a message.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-md hover:bg-slate-800 transition">
              <Send size={18} /> Send Message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-green-600">Opening your email client…</p>
            )}
          </form>

          <div className="lg:col-span-2 rounded-xl border border-slate-200 p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <a href="mailto:someone@example.com" className="font-medium text-slate-900 hover:underline">someone@example.com</a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50">
                <Github size={18} /> GitHub
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
