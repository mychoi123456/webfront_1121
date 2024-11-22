import { useParams, useNavigate } from 'react-router-dom';
import { useFetchTodos, useUpdateTodo, useDeleteTodo } from '@/hooks/todo';
import type { Todo } from '@/hooks/todo';
import Modal from '@/components/Modal';
import { useState, useEffect } from 'react';

export default function Todo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [done, setDone] = useState(false);
  const { todoId } = useParams();
  const { mutateAsync: mutateForUpdate, error } = useUpdateTodo();
  const { mutateAsync: mutateForDelete } = useDeleteTodo();
  const { data: todos } = useFetchTodos();

  // let todo: Todo | undefined
  const todo = todos?.find(todo => todo.id === todoId);
  useEffect(() => {
    console.log('todos', todos);
    setTitle(todo?.title || '');
    setDone(todo?.done || false);
  }, [todo, todoId]);

  async function updateTodo() {
    if (!todo) return;
    const _title = title.trim();
    if (!_title) return;
    if (_title == todo.title && done == todo.done) return;
    await mutateForUpdate({
      ...todo,
      title: _title,
      done
    });
    if (error) {
      alert('수정실패!');
      return;
    }
    cancelTodo();
  }

  function cancelTodo() {
    navigate(-1);
  }

  async function deleteTodo() {
    if (!todo) return;
    await mutateForDelete({
      ...todo
    });
    cancelTodo();
  }

  return (
    <Modal>
      {todo && (
        <>
          <div>
            <input
              type="checkbox"
              checked={done}
              onChange={e => setDone(e.target.checked)}
            />
          </div>
          <div>
            <textarea
              style={{ width: '100%', padding: 10, boxSizing: 'border-box' }}
              value={title}
              rows={4}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>{todo.createdAt}</div>
          <div>{todo.updatedAt}</div>
        </>
      )}
      <div>
        <button onClick={updateTodo}>저장</button>
        <button onClick={cancelTodo}>취소</button>
        <button onClick={deleteTodo}>삭제</button>
      </div>
    </Modal>
  );
}
