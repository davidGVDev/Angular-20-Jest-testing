import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api.service';

type User = {
  userId: number;
  fullname: string;
  email: string;
  isActive: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(@Inject(ApiService) private apiService: ApiService) {}

  async getUsers(): Promise<User[]> {
    return await this.apiService.get('users');
  }
  async getUserById(userId: number): Promise<User> {
    return await this.apiService.get(`users/${userId}`);
  }
  async createUser(user: User): Promise<User> {
    return await this.apiService.post('users', user);
  }
  async updateUser(user: User): Promise<User> {
    return await this.apiService.put('users', user);
  }
  async deleteUser(userId: number): Promise<User> {
    return await this.apiService.delete(`users/${userId}`);
  }
}
