import React from 'react';

const Messages = () => {
  // Dummy messages (baad me API se dynamic bhi kar sakta hai)
  const messages = [
    {
      from: 'Brand XYZ',
      content: 'Hey! We loved your content. Can we collaborate this month?',
      time: '2 hours ago',
    },
    {
      from: 'Brand ABC',
      content: 'Can you review our new skincare product on Instagram?',
      time: 'Yesterday',
    },
    {
      from: 'Brand DEF',
      content: 'Your last post got amazing engagement. Let’s work again!',
      time: '3 days ago',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">📬 Messages</h2>
      <ul className="space-y-4">
        {messages.map((msg, index) => (
          <li key={index} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-indigo-600">{msg.from}</h3>
                <p className="text-gray-700">{msg.content}</p>
              </div>
              <span className="text-sm text-gray-400">{msg.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
