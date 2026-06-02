"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("idle"); // idle, sending, success, error
    const [errors, setErrors] = useState({});

    const validate = () => {
        const tempErrors = {};
        if (!name.trim()) tempErrors.name = "Name is required";
        if (!email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Invalid email format";
        }
        if (!message.trim()) tempErrors.message = "Message is required";
        
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    // Reads the Web3Forms Access Key from your environment variables (.env.local)
    const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus("sending");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: name,
                    email: email,
                    message: message,
                    subject: `New Portfolio Message from ${name}`,
                    from_name: "Portfolio Website"
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="relative w-full max-w-xl mx-auto bg-theme-card border border-theme-border rounded-3xl p-6 md:p-8 shadow-lg overflow-hidden backdrop-blur-md">
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center py-10 text-center"
                    >
                        {/* Success Animated Checkmark Banner */}
                        <div className="relative flex items-center justify-center w-20 h-20 mb-6">
                            {/* Pulsing Ripple Background */}
                            <motion.div
                                className="absolute inset-0 bg-emerald-500/10 rounded-full"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            />
                            {/* Inner Circle */}
                            <div className="relative z-10 w-16 h-16 bg-emerald-500/20 dark:bg-emerald-500/30 border border-emerald-500/40 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                >
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-theme-text-title mb-2">
                            Message Sent Successfully!
                        </h3>
                        <p className="text-sm text-theme-text-body max-w-sm mb-6">
                            Thank you for reaching out. Mohammed will get back to you as soon as possible.
                        </p>
                        
                        <button
                            onClick={() => setStatus("idle")}
                            className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-full cursor-pointer transition-all duration-300 hover:scale-102 shadow-md shadow-indigo-600/10"
                        >
                            Send Another Message
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5"
                    >
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-theme-text-body mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (errors.name) setErrors({ ...errors, name: "" });
                                }}
                                disabled={status === "sending"}
                                placeholder="Your Name"
                                className={`w-full bg-slate-50 dark:bg-slate-900/40 border ${
                                    errors.name ? "border-red-500 focus:ring-red-500/20" : "border-theme-border focus:ring-indigo-500/20"
                                } text-theme-text-title placeholder:text-theme-text-body/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-3 transition-all`}
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-theme-text-body mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                                disabled={status === "sending"}
                                placeholder="name@example.com"
                                className={`w-full bg-slate-50 dark:bg-slate-900/40 border ${
                                    errors.email ? "border-red-500 focus:ring-red-500/20" : "border-theme-border focus:ring-indigo-500/20"
                                } text-theme-text-title placeholder:text-theme-text-body/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-3 transition-all`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-theme-text-body mb-2">
                                Message
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                disabled={status === "sending"}
                                rows="4"
                                placeholder="Your Message..."
                                className={`w-full bg-slate-50 dark:bg-slate-900/40 border ${
                                    errors.message ? "border-red-500 focus:ring-red-500/20" : "border-theme-border focus:ring-indigo-500/20"
                                } text-theme-text-title placeholder:text-theme-text-body/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-3 transition-all resize-none`}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>
                            )}
                        </div>

                        {status === "error" && (
                            <p className="text-red-500 text-xs font-semibold text-center bg-red-500/10 dark:bg-red-950/20 border border-red-500/20 dark:border-red-900/30 py-2.5 px-4 rounded-xl">
                                Something went wrong! Please ensure you have replaced the placeholder Web3Forms Access Key in the code.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md shadow-indigo-600/10 flex items-center justify-center gap-2.5 cursor-pointer hover:scale-101 active:scale-99 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                        >
                            {status === "sending" ? (
                                <>
                                    <svg
                                        className="animate-spin h-4.5 w-4.5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    <span>Sending Message...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
