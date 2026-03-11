import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export default function Chatbot() {
  const { userRole } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI Placement Assistant. How can I help you today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');

  // Only show chatbot for students
  if (userRole !== 'student') return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages([...messages, { text: userMsg, sender: 'user' }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let aiMsg = "I can help with placement preparation, resume building, and company selection. Can you be more specific?";
      if (userMsg.toLowerCase().includes('eligibility') || userMsg.toLowerCase().includes('company')) {
        aiMsg = "You are eligible for Tech Mahindra and TCS based on your 8.5 CGPA and Java/React skills.";
      } else if (userMsg.toLowerCase().includes('skill') || userMsg.toLowerCase().includes('improve')) {
        aiMsg = "To improve your chances at Google, I recommend practicing more Data Structures & Algorithms on LeetCode.";
      }
      setMessages(prev => [...prev, { text: aiMsg, sender: 'ai' }]);
    }, 1000);
  };

  return (
    <div className="chatbot-widget">
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>AI Placement Assistant</span>
            <button onClick={() => setIsOpen(false)} style={{ color: 'white' }}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender === 'ai' ? 'message-ai' : 'message-user'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <form className="chatbot-input" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ask a question..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
}
