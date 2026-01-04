export class ApiService {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }

  async post(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async put(url: string, data: any): Promise<any> {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async delete(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    return await response.json();
  }
}
