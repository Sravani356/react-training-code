

function ID() {
    return "_" + Math.random().toString(36).substr(2,9);
}

class Item {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const baseUrl = "http://localhost:3000";

class ItemAPI {
    url = `${baseUrl}/items`;

    constructor() {}

    getAll(page = 1, limit = 1000) {
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

  parseJson(response) {
      return response.json();
  }
}

//Redux

//action types
const LOAD_ITEMS_REQUEST = "LOAD_ITEMS_REQUEST";
const LOAD_ITEMS_SUCCESS = "LOAD_ITEMS_SUCCESS";
const LOAD_ITEMS_FAILURE = "LOAD_ITEMS_FAILURE";

