import { useState, useEffect } from "react";
import axios from "../../api/api";

const ManageQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ text: "", textMarathi: "", category: "" });

  const fetchQuestions = async () => {
    const res = await axios.get("/hod/questions");
    setQuestions(res.data);
  };

  const handleAdd = async () => {
    await axios.post("/hod/add-question", newQuestion);
    setNewQuestion({ text: "", textMarathi: "", category: "" });
    fetchQuestions();
  };

  const handleDelete = async (id) => {
    await axios.delete(`/hod/delete-question/${id}`);
    fetchQuestions();
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div>
      <h3>Add Question</h3>
      <input placeholder="English" name="text" value={newQuestion.text} onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })} />
      <input placeholder="Marathi" name="textMarathi" value={newQuestion.textMarathi} onChange={(e) => setNewQuestion({ ...newQuestion, textMarathi: e.target.value })} />
      <input placeholder="Category" name="category" value={newQuestion.category} onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })} />
      <button onClick={handleAdd}>Add</button>

      <h3>Existing Questions</h3>
      <ul>
        {questions.map((q) => (
          <li key={q._id}>
            {q.text} | {q.textMarathi} | {q.category}
            <button onClick={() => handleDelete(q._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageQuestions;
