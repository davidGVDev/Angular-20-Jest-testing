import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  async get(url: string): Promise<any> {
    throw new Error('Not implemented');
  }

  async post(url: string, data: any): Promise<any> {
    throw new Error('Not implemented');
  }

  async put(url: string, data: any): Promise<any> {
    throw new Error('Not implemented');
  }

  async delete(url: string): Promise<any> {
    throw new Error('Not implemented');
  }
}
