import { Project } from './Project';

// const baseUrl = 'https://localhost:4000';


const url =  'http://localhost:4000/projects';



function translateStatusToErrormessage(status:number) {

    switch(status) {
        case 401:
            return 'Please login again.';
        case 403:
            return 'You do not have permission to view this project(s)';
        default :
        return "There was an error retrieving the project(s). Please try again later.";
        
    }
}

function checkStatus(response: any) {
    if(response.ok) {
        return response;
    } else {
        const httpErrorInfo = {
            status: response.status,
            statusText: response.statusText,
            url: response.url,
        };
        console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);
        
        let errorMessage = translateStatusToErrormessage(httpErrorInfo.status);
        throw new Error(errorMessage);
    }
}

function parseJSON(response: Response) {
    return response.json();
}

//eslint-disable-next-line

function delay(ms:number) {
    return function(x: any): Promise<any> {
        return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
}

function convertToProjectModels(data: any[]): Project[] {
    let projects: Project[] = data.map(convertToProjectModel);
    return projects;
  }

function convertToProjectModel(item: any): Project {
    return new Project(item);
}

const projectAPI = {
    get(page = 1, limit = 10) {
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
        .then(delay(2000))
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToProjectModels)
        .catch((error: TypeError) => {
            console.log('log client error ' + error);
            throw new Error(
                'There was an error retrieving the projects. Please try again.'
                );            
        });
    },

    find(id: number): Promise<Project> {
        return fetch(`${url}/${id}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToProjectModel);
    },

    put(project: Project) {
        return fetch(`${url}/${project.id}`, {
           method: 'PUT',
           body: JSON.stringify(project),
           headers: {
               'Content-Type' : 'application/json'
           } 
        })

        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError) => {
            console.log('log client error '+  error);
            throw new Error(
                'There was an error updating the project. please try again.'
            );
            
        });
    },

};

export { projectAPI };
  
