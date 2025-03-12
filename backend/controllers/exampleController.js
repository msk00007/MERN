import Example from "../models/Example.js";

// Get all examples
export const getExamples = async (req, res) => {
  try {
    const examples = await Example.find();
    res.json(examples);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// Add a new example
export const addExample = async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  try {
    const newExample = new Example({ name, description });
    const savedExample = await newExample.save();
    res.status(201).json(savedExample);
  } catch (error) {
    res.status(500).send("Server error");
  }
};
