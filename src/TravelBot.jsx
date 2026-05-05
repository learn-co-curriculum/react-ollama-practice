import { useState } from "react";
import Ollama from "ollama";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./TravelBot.css";

export default function TravelBot() {
    // TODO: Add state for:
    // - input
    // - messages
    // - loading
    // - error

    const handleAsk = async () => {
        // TODO: Prevent empty submissions and duplicate submissions while loading.

        // TODO: Create a user message object.
        // Hint: Each message should have a role and content.

        // TODO: Create an updated message array that includes the new user message.

        // TODO: Update the UI before calling the model.
        // Hint: Show the user's message, clear the input, reset old errors, and turn on loading.

        try {
            // TODO: Send the updated message array to Ollama.
            // Hint: Use model: "llama3.2".

            // TODO: Add the assistant's response to the message thread.
        } catch (err) {
            // TODO: Log the error and show a user-friendly error message.
        } finally {
            // TODO: Turn loading off.
        }
    };

    const clearChat = () => {
        // TODO: Clear the messages, input, and error state.
    };

    return (
        <section className="chat-shell">
            <div className="chat-card">
                <header className="chat-header">
                    <h1>Travel Assistant</h1>
                    <p>
                        Ask a general travel question and review the assistant response.
                    </p>
                </header>

                <div className="chat-input-area">
                    <label htmlFor="chat-prompt" className="sr-only">
                        Ask a travel question
                    </label>

                    <textarea
                        id="chat-prompt"
                        rows="4"
                        className="chat-textarea"
                        placeholder="Ask about packing, destinations, or trip planning..."
                        // TODO: Connect this textarea to input state.
                    />

                    <div className="chat-actions">
                        <button
                            onClick={handleAsk}
                            // TODO: Disable this button while loading or when input is empty.
                            className="chat-button"
                            >
                            {/* TODO: Show "Thinking..." while loading. Otherwise show "Send". */}
                            Send
                        </button>

                        <button
                            onClick={clearChat}
                            // TODO: Disable this button while loading or when there are no messages.
                            className="chat-button chat-button-secondary"
                            >
                            Clear thread
                        </button>
                    </div>
                </div>

                {/* TODO: Render the error message below the input area when error exists. */}

                <div className="message-list">
                    {/* TODO: Map over messages and render each message. */}
                    {/* Hint: Use message.role to label user and assistant messages. */}
                    {/* Hint: Use className={`message message-${message.role}`} for dynamic styling. */}

                    {/* TODO: Show a temporary assistant message while loading. */}
                </div>
            </div>
        </section>
    );
}