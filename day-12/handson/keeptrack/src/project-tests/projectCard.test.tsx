
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Project } from '../project/Project';
import ProjectCard from '../project/ProjectCard';
import userEvent from '@testing-library/user-event';


describe('<ProjectCard />', () => {
  let project : Project;
const handleEdit = jest.fn();

  beforeEach(() => {
     project = new Project({
      id: 1,
      name: 'Mission Impossible',
      description: 'This is really difficult',
      budget: '100',
    });
    // handleEdit = jest.fn();
})

  test('should initially render and edit btn', async() => {
    render(
      <MemoryRouter>
        <ProjectCard project={project} onEdit={handleEdit} />
    </MemoryRouter>
    );

    const user  = userEvent.setup();
    await user.click(screen.getByRole('button', { name : /edit/i}))
        expect(handleEdit).toBeCalledTimes(1);
});

//   it("onClick", () => {
//       const editBtn = screen.getByTestId("btn");
//       fireEvent.click(editBtn);
//       expect(editBtn).not.toHaveTextContent("Edit")
//   })
});
