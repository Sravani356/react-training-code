import { screen, render } from "@testing-library/react";
import { Project } from "../project/Project";
import ProjectForm from "../project/projectForm";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../project/state";
import userEvent from '@testing-library/user-event';

import { QueryClientProvider, QueryClient } from "react-query";

describe("render ProjectForm without crashing", () => {
  let handleCancel = jest.fn();
  let project: Project;
  let updatedProject: Project;
  let nameTextBox: any;
  let descriptionTextBox: HTMLElement;
  let budgetTextBox: HTMLElement;

  const queryClient = new QueryClient();

  const component = () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MemoryRouter>
            <ProjectForm project={project} onCancel={handleCancel} />
          </MemoryRouter>
        </Provider>
      </QueryClientProvider>
    );

    nameTextBox = screen.getByRole("textbox", {
      name: /project name/i,
    });

    descriptionTextBox = screen.getByRole("textbox", {
      name: /project description/i,
    });
    // budgetTextBox = screen.getByRole('textbox', {
    //     name: /project budget/i,
    // });
  };

  beforeEach(() => {
    project = new Project({
      id: 1,
      name: "Test it",
      description: "let;s test projectForm",
      budget: 100,
    });

    updatedProject = new Project({
      name: "Ghost Protocol",
      description: "Blamed for a terrorist attack..",
    });
    handleCancel();
  });

  test("should load project data to form", () => {
    component();
    expect(
      screen.getByRole("form", {
        name: /edit a project/i,
      })
    ).toHaveFormValues({
      name: project.name,
      description: project.description,
      budget: project.budget,
      isActive: project.isActive,
    });
  });

  test('should accept name input', async() => {
      component();
      const user = userEvent.setup();
      await user.clear(nameTextBox);
   await user.type(nameTextBox, updatedProject.name);
     expect(nameTextBox).toHaveValue(updatedProject.name);
  });

  test('should accept description input', async() => {
      component();
      const user = userEvent.setup();
    await user.clear(descriptionTextBox);
    await user.type(descriptionTextBox, updatedProject.description);
      expect(descriptionTextBox).toHaveValue(updatedProject.description);

  });

  //testing validations

  test('name should display required validation', async() => {
      component();
      const nameValidation = userEvent.setup();
      await nameValidation.clear(nameTextBox);
      expect(screen.getByRole('alert')).toBeInTheDocument();

  });

  test('description should display required validation', async() => {
    component();
    const descriptionValidation = userEvent.setup();
    await descriptionValidation.clear(descriptionTextBox);
    expect(screen.getByRole('alert')).toBeInTheDocument();

});

// test('budget should display not 0 validation', async () => {
//        component();
//       const user = userEvent.setup();
//       await user.clear(budgetTextBox);
//     await user.type(budgetTextBox, '0');
//     expect(screen.getByRole('alert')).toBeInTheDocument();
//      await user.type(budgetTextBox, '1');
//      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
//      });
    



  
  });
