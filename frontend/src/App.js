import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [examples, setExamples] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchExamples = async () => {
      const res = await fetch("/api/examples");
      const data = await res.json();
      setExamples(data);
    };
    fetchExamples();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/examples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    const data = await res.json();
    if (res.ok) {
      setExamples([...examples, data]);
      setName("");
      setDescription("");
    } else {
      alert(data.message || "Failed to add example");
    }
  };

  return (
    <div>
      <h1>Examples</h1>
      <ul>
        {examples.map((example) => (
          <li key={example._id}>
            {example.name}: {example.description}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Example</button>
      </form>
    </div>
  );
};

export default App;
