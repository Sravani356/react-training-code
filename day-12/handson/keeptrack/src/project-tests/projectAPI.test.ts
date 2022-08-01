import { MOCK_PROJECTS } from "../project/mockProjects";
import { Project } from "../project/Project";
import { projectAPI } from "../project/projectAPI";

describe("testing projectApi", () => {
    test('should return response records', () => {
        const response = new Response(undefined, {
            status: 200,
            statusText: 'ok'
        });
        response.json = () => Promise.resolve(MOCK_PROJECTS);
        jest
        .spyOn(window, 'fetch')
        .mockImplementation(() => Promise.resolve(response));

        return projectAPI.get().then((data) => expect(data).toEqual(MOCK_PROJECTS))
    });

    xtest('should return error message', () => {
        const response = new Response(undefined, {
            status: 401,
            statusText: 'Please login again.',
        });
        response.json = () => Promise.resolve(MOCK_PROJECTS);
        jest
        .spyOn(window, 'fetch')
        .mockImplementation(() => Promise.resolve(response));

        return projectAPI.get().catch((data) => expect(data).toThrow());
    })


    xtest('should return error message', () => {
        const response = new Response(undefined, {
            status: 404,
            statusText: 'There was an error retrieving the projects. Please try again.',
        });
        response.json = () => Promise.resolve(MOCK_PROJECTS);
        jest
        .spyOn(window, 'fetch')
        .mockImplementation(() => Promise.resolve(response));

        return projectAPI.get().catch((data) => expect(data).toThrow());
    });


    xtest('should return error message', async () => {
        const response = new Response(undefined, {
            status: 403,
            statusText:'You do not have permission to view this project(s)',
        });
      response.json = () => Promise.resolve(MOCK_PROJECTS);
        jest
        .spyOn(window, 'fetch')
        .mockImplementation(() => Promise.resolve(response));

        return await projectAPI.get().catch((data) => expect(data).toThrow());
    })


})