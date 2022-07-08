class ApiService {
    constructor(base_url){
        this.base_url = base_url;
    }

    get(url){
        return fetch(this.base_url + url, {
            method: "GET"
        })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
    }

    post(url, data, headers = {}){
        return fetch(this.base_url + url, {
            method: "POST",
            headers: headers,   //Content-Type': 'application/json;charset=utf-8
            body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
            return res
        })
        .then(res => res.json())
    }

    put(url, data, headers = {}){
        fetch(this.url + url, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify(data)
        }).then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
        })
    }
    delete(url, headers = {}){
        fetch(this.url + url, {
            method: "DELETE",
            headers: this.headers
        })
        .then(res => {
            if (res.ok) { console.log("HTTP request successful") }
            else { console.log("HTTP request unsuccessful") }
        })
        .catch(error => error)
    }
}

export default ApiService;