"use client"

import { useState } from "react"

const ChatWithDriver = ({ driver, onBack }) => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hola",
      sender: "driver",
      time: "10:33 am",
      status: "Leído",
    },
    {
      id: 2,
      text: "Hola, estoy afuera",
      sender: "user",
      time: "10:35 am",
    },
    {
      id: 3,
      text: "Voy saliendo",
      sender: "driver",
      time: "10:33 am",
      status: "Entregado",
    },
  ])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      }
      setMessages([...messages, newMessage])
      setMessage("")
    }
  }

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col">
      {/* Header del chat */}
      <header className="bg-gray-300 px-4 py-3 flex items-center space-x-3">
        <button onClick={onBack} className="text-gray-600 text-xl">
          ←
        </button>
        <h1 className="text-xl font-bold text-gray-800">{driver?.name}</h1>
      </header>

      {/* Mensajes */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "user" ? "bg-gray-300 text-black" : "bg-gray-300 text-black"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-600">{msg.time}</span>
                {msg.status && <span className="text-xs text-gray-500">{msg.status}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input de mensaje */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe un mensaje"
            className="flex-1 px-4 py-2 bg-gray-200 rounded-full text-gray-700 placeholder-gray-500"
          />
          <button type="submit" className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
            ➤
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatWithDriver
