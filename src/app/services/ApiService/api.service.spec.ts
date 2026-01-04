import { ApiService } from './api.service';
import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import { users } from '../../data';

type User = {
  userId: number;
  fullname: string;
  email: string;
  isActive: boolean;
};

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get', () => {
    test('should get users', async () => {
      const mockUsers = users[0];
      const mockResponse = {
        ok: true,
        json: jest.fn<() => Promise<any>>().mockResolvedValue(mockUsers),
      };
      global.fetch = jest.fn<() => Promise<any>>().mockResolvedValue(mockResponse as any);
      const url = 'https://api.example.com/users';
      const result = await apiService.get(url);
      expect(global.fetch).toHaveBeenCalledWith(url);
      expect(result).toEqual(mockUsers);
    });
  });

  describe('post', () => {
    test('should post a user', async () => {
      const mockUser = users[0];
      const mockResponse = {
        ok: true,
        json: jest.fn<() => Promise<any>>().mockResolvedValue(mockUser),
      };
      global.fetch = jest.fn<() => Promise<any>>().mockResolvedValue(mockResponse as any);
      const url = 'https://api.example.com/users';
      const result = await apiService.post(url, mockUser);
      expect(global.fetch).toHaveBeenCalledWith(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockUser),
      });
      expect(result).toEqual(mockUser);
    });
  });
  describe('put', () => {
    test('should put a user', async () => {
      const mockUser = users[0];
      const mockResponse = {
        ok: true,
        json: jest.fn<() => Promise<any>>().mockResolvedValue(mockUser),
      };
      global.fetch = jest.fn<() => Promise<any>>().mockResolvedValue(mockResponse as any);
      const url = 'https://api.example.com/users';
      const result = await apiService.put(url, mockUser);
      expect(global.fetch).toHaveBeenCalledWith(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mockUser),
      });
      expect(result).toEqual(mockUser);
    });
  });
  describe('delete', () => {
    test('should delete a user', async () => {
      const mockUser = users[0];
      const mockResponse = {
        ok: true,
        json: jest.fn<() => Promise<any>>().mockResolvedValue(mockUser),
      };
      global.fetch = jest.fn<() => Promise<any>>().mockResolvedValue(mockResponse as any);
      const url = 'https://api.example.com/users';
      const result = await apiService.delete(url);
      expect(global.fetch).toHaveBeenCalledWith(url, {
        method: 'DELETE',
      });
      expect(result).toEqual(mockUser);
    });
  });
});
