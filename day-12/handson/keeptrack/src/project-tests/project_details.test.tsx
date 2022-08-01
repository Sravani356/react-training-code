import { render, screen } from '@testing-library/react';
import ProjectDetail from '../project/ProjectDetail';
import { Project} from '../project/Project';

describe("<ProjectDetails/>", () => {

test('testing ternery isActive: true', () => {
    let project = new Project({
        id: 1,
        name: 'test',
        description: "let's test this component!",
        imageUrl: 'logo',
        contractSignedOn: Date(),
        budget: 5670,
        isActive: true
    })
    
    render(<ProjectDetail project={project}/>);
    
    let tree = screen.getByTestId("active")
    expect(tree).toHaveTextContent('active');
});

test('testing ternery isActive: false', () => {
    let project = new Project({
        id: 1,
        name: 'test',
        description: "let's test this component!",
        imageUrl: 'logo',
        contractSignedOn: Date(),
        budget: 5670,
        isActive: false
    })
    
    render(<ProjectDetail project={project}/>);
    let tree = screen.getByTestId("active")
    expect(tree).toHaveTextContent("active");
});


})