import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';
import TodoCounter from '../components/TodoCounter';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';
import TodoStats from '../components/TodoStats';

const API_URL = 'https://69cf2bf4a4647a9fc67524a7.mockapi.io/todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setTodos(res.data);
      setError(null);
    } catch (err) {
      setError('Failed to load todos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      if (editingTodo) {
        await axios.put(`${API_URL}/${editingTodo.id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setEditingTodo(null);
      fetchTodos();
    } catch (err) {
      setError('Failed to save todo');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this todo?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchTodos();
      } catch (err) {
        setError('Failed to delete');
      }
    }
  };

  // Filter todos based on search
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const completedCount = todos.filter(t => t.completed).length;

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h2 className="mb-4">My Todos (CRUD)</h2>
      {error && <ErrorAlert message={error} />}

      <TodoStats todos={todos} />
      <TodoCounter total={todos.length} completed={completedCount} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <TodoForm 
        onSubmit={handleSubmit} 
        initialData={editingTodo || {}} 
        isEditing={!!editingTodo} 
        onCancel={() => setEditingTodo(null)}
      />

      <h4 className="mb-3">Todo List</h4>
      
      {filteredTodos.length > 0 ? (
        <TodoList 
          todos={filteredTodos} 
          onEdit={setEditingTodo} 
          onDelete={handleDelete} 
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
};

export default Todos;