/* global React */
// Floating AI assistant widget for Chiroma Empowerment Foundation.
// Talks to /.netlify/functions/chat — the API key stays on the server.

const { useState: useSc, useRef: useRc, useEffect: useEc } = React;

const CHAT_STYLES = `
.cef-chat-fab {
  position: fixed; right: 22px; bottom: 22px; z-index: 900;
  width: 58px; height: 58px; border-radius: 50%;
  background: var(--accent); color: #fff; border: none;
  box-shadow: 0 6px 24px rgba(0,0,0,.22);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: transform .18s ease, background .18s ease;
}
.cef-chat-fab:hover { transform: translateY(-2px); background: var(--accent-2); }

.cef-chat-panel {
  position: fixed; right: 22px; bottom: 90px; z-index: 900;
  width: 370px; max-width: calc(100vw - 32px);
  height: 520px; max-height: calc(100vh - 130px);
  background: var(--bg-card);
  border: 1px solid var(--rule);
  border-radius: 18px;
  box-shadow: 0 18px 50px rgba(0,0,0,.20);
  display: flex; flex-direction: column; overflow: hidden;
}
.cef-chat-head {
  padding: 16px 18px;
  background: var(--brand); color: #F5EFE0;
  display: flex; align-items: center; justify-content: space-between;
}
.cef-chat-head .t { font-family: var(--display); font-weight: 600; font-size: 15px; }
.cef-chat-head .s { font-size: 11px; opacity: .75; margin-top: 2px; }
.cef-chat-close {
  background: transparent; border: none; color: #F5EFE0;
  font-size: 20px; line-height: 1; cursor: pointer; opacity: .8; padding: 0 4px;
}
.cef-chat-close:hover { opacity: 1; }

.cef-chat-body {
  flex: 1; overflow-y: auto; padding: 16px;
  display: flex; flex-direction: column; gap: 12px;
  background: var(--bg);
}
.cef-msg { max-width: 85%; padding: 10px 13px; border-radius: 14px; font-size: 14px; line-height: 1.5; white-space: pre-wrap; }
.cef-msg.bot { align-self: flex-start; background: var(--bg-card); border: 1px solid var(--rule); color: var(--ink); }
.cef-msg.me  { align-self: flex-end; background: var(--brand); color: #F5EFE0; }
.cef-msg.err { align-self: flex-start; background: #FDECEA; border: 1px solid #F5C6C0; color: #8A2B20; }

.cef-typing { align-self: flex-start; display: flex; gap: 4px; padding: 12px 14px; }
.cef-typing i {
  width: 7px; height: 7px; border-radius: 50%; background: var(--ink-4);
  animation: cefBounce 1.2s infinite;
}
.cef-typing i:nth-child(2) { animation-delay: .15s; }
.cef-typing i:nth-child(3) { animation-delay: .3s; }
@keyframes cefBounce { 0%,60%,100% { opacity:.3; transform: translateY(0);} 30% { opacity:1; transform: translateY(-4px);} }

.cef-chat-foot {
  padding: 12px; border-top: 1px solid var(--rule);
  display: flex; gap: 8px; background: var(--bg-card);
}
.cef-chat-foot input {
  flex: 1; min-width: 0; border: 1px solid var(--rule); border-radius: 999px;
  padding: 11px 15px; font-family: inherit; font-size: 14px;
  color: var(--ink); background: var(--bg); outline: none;
}
.cef-chat-foot input:focus { border-color: var(--brand); }
.cef-chat-foot button {
  flex-shrink: 0; border: none; border-radius: 999px;
  background: var(--accent); color: #fff;
  padding: 0 18px; font-size: 14px; font-weight: 500; cursor: pointer;
}
.cef-chat-foot button:disabled { opacity: .5; cursor: default; }
.cef-chat-note { font-size: 10px; color: var(--ink-4); text-align: center; padding: 0 12px 10px; background: var(--bg-card); }

@media (max-width: 640px) {
  .cef-chat-panel { right: 12px; left: 12px; width: auto; bottom: 84px; height: 70vh; }
  .cef-chat-fab { right: 16px; bottom: 16px; }
}
`;

const GREETING = "Hello! I'm the Chiroma Empowerment Foundation assistant. Ask me about our work, how to donate, volunteer, or partner with us.";

function ChatWidget() {
  const [open, setOpen] = useSc(false);
  const [input, setInput] = useSc("");
  const [busy, setBusy] = useSc(false);
  const [msgs, setMsgs] = useSc([{ role: "assistant", content: GREETING }]);
  const bodyRef = useRc(null);

  useEc(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, busy, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;
    const next = [...msgs, { role: "user", content: text }];
    setMsgs(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Skip the canned greeting when sending history to the model.
        body: JSON.stringify({ messages: next.filter((m) => m.content !== GREETING) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setMsgs((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMsgs((m) => [...m, {
        role: "error",
        content: "Sorry — I couldn't reach the assistant. Please try again, or email chiromafoundation@gmail.com.",
      }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <style>{CHAT_STYLES}</style>

      {open && (
        <div className="cef-chat-panel" role="dialog" aria-label="Foundation assistant">
          <div className="cef-chat-head">
            <div>
              <div className="t">Ask Chiroma</div>
              <div className="s">Usually replies instantly</div>
            </div>
            <button className="cef-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>

          <div className="cef-chat-body" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div
                key={i}
                className={"cef-msg " + (m.role === "user" ? "me" : m.role === "error" ? "err" : "bot")}
              >
                {m.content}
              </div>
            ))}
            {busy && <div className="cef-typing"><i /><i /><i /></div>}
          </div>

          <div className="cef-chat-foot">
            <input
              type="text"
              value={input}
              placeholder="Type your question..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") send(); }}
              aria-label="Your message"
            />
            <button onClick={send} disabled={busy || !input.trim()}>Send</button>
          </div>
          <div className="cef-chat-note">AI assistant — may make mistakes. Verify important details with our team.</div>
        </div>
      )}

      <button
        className="cef-chat-fab"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.3-.6L3 21l1.8-4.2A8.4 8.4 0 0 1 3.6 11.5 8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4Z" /></svg>
        )}
      </button>
    </>
  );
}

window.ChatWidget = ChatWidget;
