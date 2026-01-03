import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { ApiService } from './api.service';
import { jest, beforeEach, describe, test, expect, afterEach } from '@jest/globals';
import { users as mockUsers } from '../../data';

type User = {
  userId: number;
  fullname: string;
  email: string;
  isActive: boolean;
};

type MockApiService = {
  get: jest.MockedFunction<(url: string) => Promise<any>>;
  post: jest.MockedFunction<(url: string, data: User) => Promise<any>>;
  put: jest.MockedFunction<(url: string, data: User) => Promise<any>>;
  delete: jest.MockedFunction<(url: string) => Promise<any>>;
};

const mockApiService: MockApiService = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
};

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: ApiService,
          useFactory: () => mockApiService,
        },
      ],
    });
    userService = TestBed.inject(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUsers', () => {
    test('should return the users', async () => {
      mockApiService.get.mockResolvedValue(mockUsers);
      const users = await userService.getUsers();
      expect(users).toEqual(mockUsers);
      expect(mockApiService.get).toHaveBeenCalledWith('users');
    });
  });
  describe('getUserById', () => {
    test('should return the user by id', async () => {
      const userId = 1;
      const expectedUser = mockUsers.find((user) => user.userId === userId);
      mockApiService.get.mockResolvedValue(expectedUser);
      const user = await userService.getUserById(userId);
      expect(user).toEqual(expectedUser);
      expect(mockApiService.get).toHaveBeenCalledWith(`users/${userId}`);
    });
  });
  describe('createUser', () => {
    test('should create a user', async () => {
      const user = {
        userId: 6,
        fullname: 'Pedro García',
        email: 'pedro.garcia@example.com',
        isActive: true,
      };
      mockApiService.post.mockResolvedValue(user);
      const newUser = await userService.createUser(user);
      expect(newUser).toEqual(user);
      expect(mockApiService.post).toHaveBeenCalledWith('users', user);
    });
  });
  describe('updateUser', () => {
    test('should update a user', async () => {
      const user = {
        userId: 1,
        fullname: 'Juan Pérez',
        email: 'juan.perez@example.com',
        isActive: true,
      };
      mockApiService.put.mockResolvedValue(user);
      const updatedUser = await userService.updateUser(user);
      expect(updatedUser).toEqual(user);
      expect(mockApiService.put).toHaveBeenCalledWith('users', user);
    });
  });
  describe('deleteUser', () => {
    test('should delete a user', async () => {
      const userId = 1;
      const expectedUser = mockUsers.find((user) => user.userId === userId);
      mockApiService.delete.mockResolvedValue(expectedUser);
      const deletedUser = await userService.deleteUser(userId);
      expect(deletedUser).toEqual(expectedUser);
      expect(mockApiService.delete).toHaveBeenCalledWith(`users/${userId}`);
    });
  });
  describe('ApiFailure', () => {
    test('should throw an error when the api fails', async () => {
      const error = new Error('API failed');
      mockApiService.get.mockRejectedValue(error as never);
      await expect(userService.getUsers()).rejects.toThrow('API failed');
      expect(mockApiService.get).toHaveBeenCalledWith('users');
    });
    test('should throw error when getUserById fails', async () => {
      const error = new Error('User not found');
      mockApiService.get.mockRejectedValue(error as never);
      await expect(userService.getUserById(999)).rejects.toThrow('User not found');
      expect(mockApiService.get).toHaveBeenCalledWith('users/999');
    });
  });
});
