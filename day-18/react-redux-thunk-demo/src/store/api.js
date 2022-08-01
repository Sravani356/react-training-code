

const baseUrl = "http://localhost:3000";

export class ItemAPI {
    url = `${baseUrl}/items`;
  
    constructor() {}
  
    getAll(page = 1, limit = 100) {
      return fetch(`${this.url}?_page=${page}&_limit=${limit}`)
        .then(this.checkStatus)
        .then(this.parseJSON);
    }
  
    add(item) {
      return fetch(`${this.url}`, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(this.checkStatus)
        .then(this.parseJSON);
    }
  
    update(item) {
      return fetch(`${this.url}/${item.id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(this.checkStatus)
        .then(this.parseJSON);
    }
  
    delete(id) {
      return fetch(`${this.url}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(this.checkStatus)
        .then(this.parseJSON);
    }
  
    static translateStatusToErrorMessage(status) {
      switch (status) {
        case 401:
          return "Please login again.";
        case 403:
          return "You do not have permission to view the items.";
        default:
          return "There was an error retrieving the items. Please try again.";
      }
    }
  
    //pass translate in to make this more flexible
    checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const httpErrorInfo = {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        };
        console.log(
          `logging http details for debugging: ${JSON.stringify(httpErrorInfo)}`
        );
  
        let errorMessage = ItemAPI.translateStatusToErrorMessage(
          httpErrorInfo.status
        );
        throw new Error(errorMessage);
      }
    }
  
    parseJSON(response) {
      return response.json();
    }
}