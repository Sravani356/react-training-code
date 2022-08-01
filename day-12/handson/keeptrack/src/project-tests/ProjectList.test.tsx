import { render, screen} from '@testing-library/react';
import React from 'react';
import { MOCK_PROJECTS } from '../project/mockProjects';
import userEvent  from '@testing-library/user-event';
import { store } from '../project/state';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import ProjectList from '../project/ProjectList';

import { QueryClientProvider, QueryClient } from 'react-query';


describe('<ProjectList/>', () => {
const queryClient = new QueryClient();

    const wrapper = () => {
        render(
            <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <MemoryRouter>
                <ProjectList projects={MOCK_PROJECTS}/>
            </MemoryRouter>
            </Provider>
            </QueryClientProvider>
    )
        }
        beforeEach(() => {});

    test('render ProjectList without crashing', () => {
       wrapper();
        expect(screen).toBeDefined();
    });

    test('should display imagwe and remove form when cancel clicked', async() => {
        wrapper();
        const user = userEvent.setup();
        await user.click(
            screen.getByRole('button', { name: /edit Wisozk Group/i }) //onEdit for ProjectCard
        );
        await user.click(
            screen.getByRole('button', { //onCancel for ProjectForm
                name: /cancel/i,
            })
        );
        expect(screen.getByRole('img', { name: /wisozk group/i,})).toBeInTheDocument(); //fromProjectCard
        expect(screen.queryByRole('form', { name: /edit a project/i,})).not.toBeInTheDocument();  //from ProjectForm

    })

    // test('should display list', () => {
    //        wrapper();
    //     expect(screen.getAllByRole('heading')).toHaveLength(MOCK_PROJECTS.length);
    //     expect(screen.getAllByRole('img')).toHaveLength(MOCK_PROJECTS.length);
    //     expect(screen.getAllByRole('link')).toHaveLength(MOCK_PROJECTS.length);
    //     expect(screen.getAllByRole('button')).toHaveLength(MOCK_PROJECTS.length);
    //     });

});