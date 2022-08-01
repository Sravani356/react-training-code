import { render, screen } from '@testing-library/react';
import ProjectPage from '../project/projectPage';

test('render component without crashing',() => {
    render(
        <ProjectPage/>
    )
})