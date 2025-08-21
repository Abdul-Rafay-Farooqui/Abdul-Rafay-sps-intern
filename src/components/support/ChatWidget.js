"use client";
import { BotIcon, BotOffIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I’m the NEPRA site assistant. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  async function sendMessage(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.text },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I ran into an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 rounded-full bg-blue-600 text-white px-4 py-3 shadow-lg hover:bg-blue-700"
      >
        {isOpen ? <BotOffIcon/> : <BotIcon/>}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-5 z-50 w-80 max-w-[95vw] rounded-xl border border-blue-900 bg-white shadow-xl">
          <div className="flex items-center justify-between px-3 py-2 border-b">
            <div className="font-semibold text-gray-900">Assistant</div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-900 text-lg cursor-pointer"
            >
              ×
            </button>
          </div>
          <div
            ref={listRef}
            className="max-h-80 overflow-auto p-3 space-y-2 text-sm"
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={m.role === "user" ? "text-right" : "text-left"}
              >
                <div
                  className={`inline-block rounded-lg px-3 py-2 ${
                    m.role === "user" ? "bg-blue-600 text-white" : "bg-blue-600"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left">
                <div className="inline-block rounded-lg px-3 py-2 bg-gray-900">
                  Thinking…
                </div>
              </div>
            )}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 p-3 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-md border px-3 py-2 text-sm bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-blue-600 px-3 py-2 text-white text-sm disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
