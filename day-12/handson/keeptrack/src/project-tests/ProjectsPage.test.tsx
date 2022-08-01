import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';

import Projectspage from '../project/ProjectsPage';

import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();


describe('<ProjectsPage/>', () => {

test('rendering ProjectsPage component', () => {
     render(
  <QueryClientProvider client={queryClient}>
    <Projectspage/>
    </QueryClientProvider>
    );
    const heading = screen.getByTestId("project-page");
    expect(heading).toHaveTextContent("Projects");
});

test('snapshot', () => {
    const tree = renderer.create(
  <QueryClientProvider client={queryClient}>
  <Projectspage/>
  </QueryClientProvider>).toJSON()
expect(tree).toMatchSnapshot();
});
});

// test('rendering ProjectsPage component', () => {
//     render(<ProjectCard project={Project} onEdit={jest.fn()/>)
// });

// test('rendering ProjectsPage component', () => {

//     interface ProjectListProps { //to define the props that come into the component
//         projects: Project[];
//         onSave: (project: Project) => void;
//       }
   
//     const saveProject = jest.fn();

//     render(<ProjectList />); 
    
// })