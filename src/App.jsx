import TravelBot from "./TravelBot";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <nav className="app-nav">
        <span className="app-logo">✈️ Travel Planner</span>
      </nav>

      <main className="app-main">
        <div className="app-container">
          <header className="app-header">
            <h1>Travel Planner AI</h1>
            <p>Prototype an AI assistant for travel questions.</p>
          </header>

          <TravelBot />
        </div>
      </main>
    </div>
  );
}