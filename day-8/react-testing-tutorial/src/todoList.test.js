import { render, waitFor, screen } from "@testing-library/react";
import Todos from "./todos";
import axios from "axios";

//mocking is a process of providing a dummy response if any ajax call is made
jest.mock("axios");

//whenever we use axios we need to provide the dummy data of same format for testing
const dummyTodos = [
  {
    userId: 1,
    id: 1,
    title: "todo 1",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "todo 2",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "todo 3",
    completed: false,
  },
];

test("todos list", async () => {
  axios.get.mockResolvedValue({ data: dummyTodos });
  render(<Todos />);

  const todoList = await waitFor(() => screen.findAllByTestId("todo"));

  expect(todoList).toHaveLength(3);
});
