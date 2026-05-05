# Practice: Building a Chat Interface in React

## Overview

AI-powered interfaces are a core part of modern applications, but building them requires more than just connecting to a model. As a developer, you need to manage user input, handle asynchronous responses, and design a clear conversational experience.

In this practice, you will build a threaded AI chatbot in React using the same process from the technical lesson. You will implement a working chat interface using **Identify → Assemble → Execute → Verify**, managing state, handling model responses, and rendering messages to a standard where the conversation is clear, responsive, and reliable.

---

## Scenario

You are working as a front-end developer for a travel booking platform. Your team wants to prototype an AI-powered assistant that helps users ask questions about trip planning, such as destinations, packing tips, or general travel advice.

Before connecting the assistant to real booking data, your team needs a working chat interface to test how users interact with the feature. You’ve been asked to build a chatbot that allows users to send messages, receive responses from a local AI model, and view the conversation as a threaded chat.

This assistant will not yet have access to real travel data—it uses a general-purpose model. Your focus is to build a clear, responsive chat experience that supports multi-turn conversations.

---

## Tools and Resources

- GitHub Starter Repo: \<link TBD\>  
- Ollama: https://ollama.com  
- Ollama JS Library: https://www.npmjs.com/package/ollama  
- React Markdown: https://github.com/remarkjs/react-markdown  
- remark-gfm: https://github.com/remarkjs/remark-gfm  

**Setup Notes:**
- Run `npm install` to install dependencies  
- You do **not** need to reinstall Ollama or pull `llama3.2` again if you completed the technical lesson  

---

## Instructions

### Task 1: Identify the Chatbot State

Add state for:

- user input  
- message thread  
- loading state  
- error message  

**Hint:** The message thread should start as an empty array.

**Verify:** The app runs without errors after adding state.

---

### Task 2: Connect the Textarea

Make the textarea a controlled input.

**Hint:** Use `value` and `onChange`.

**Verify:** Typing updates the textarea without errors.

---

### Task 3: Disable Invalid Actions

- Disable Send when input is empty or loading  
- Disable Clear Thread when loading or no messages exist  

**Verify:** Buttons enable/disable correctly.

---

### Task 4: Create the User Message

Inside `handleAsk`:

- prevent empty or duplicate submissions  
- create a user message object  

```js
{
  role: "user",
  content: input
}
```

**Verify:** Log the message and confirm it matches input.

### Task 5: Update the Message Thread

* add the user message to the thread
* clear input
* reset error
* set loading to true

**Verify:** User message appears in the chat and textarea clears.

### Task 6: Send Messages to Ollama

Send the updated message thread:

```jsx
model: "llama3.2"
```

**Verify:** The model returns a response.

### Task 7: Add the Assistant Response

* Append the assistant message to the thread.

**Hint:** Use res.message.

**Verify:** Messages appear in order.

### Task 8: Handle Errors

* log the error
* show a user-friendly message

Test it:

* Temporarily change the model:

```jsx
model: "llama4"
```

* Submit a prompt and confirm the error appears.

Switch back to "llama3.2" after testing.

### Task 9: Manage Loading State

* set loading before the request
* turn it off in finally

**Verify:** Button shows “Thinking...” during requests.

### Task 10: Render Messages

Map over messages and render each one.

Each message should include:

* label (“You” or “Assistant”)
* markdown-rendered content
* dynamic class name
```jsx
className={`message message-${message.role}`}
```

**Verify:** Messages are styled differently.

### Task 11: Show Loading in the Chat

Render a temporary assistant message while loading.

**Verify:** “Thinking...” appears in the message list during requests.

### Task 12: Clear the Chat

Reset:

* messages
* input
* error

**Verify:** Chat clears when button is clicked.

### Task 13: Final Verification

Test your chatbot with prompts like:

> What should I pack for a weekend trip to Chicago?
> Give me a short checklist for planning an international flight.
> What should I consider when choosing a hotel near public transportation?

Your chatbot should:

* capture and clear user input
* send messages to llama3.2
* display threaded conversation
* show loading feedback
* display errors when needed
* render markdown correctly
* clear the thread
* apply styling from TravelBot.css

## Notes

* This chatbot uses a general-purpose model and does not know real travel data.
* Focus on interaction design and state management, not accuracy of responses.
* Later modules will introduce RAG and backend integration to connect AI to real data.

## Reflection

* What does React manage in this chatbot?
* What does Ollama manage?
* Why doesn’t this chatbot know real company data yet?
* What would be required to make this production-ready?
* How could RAG improve this chatbot?