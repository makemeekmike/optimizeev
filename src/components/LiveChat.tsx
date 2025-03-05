import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-xl z-50"
          >
            <div className="p-4 bg-primary-600 text-white rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="font-medium">Live Support</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-secondary-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-96 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <User className="h-5 w-5 text-primary-600" />
                  </div>
                  <div className="ml-3 bg-secondary-100 p-3 rounded-lg max-w-[80%]">
                    <p className="text-secondary-900">
                      Hello! How can I help you today?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-secondary-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;