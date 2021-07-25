import { Service } from 'typedi';
import User from '../models/User';
import UserRepository from '../infrastructure/database/sql/UserRepository';

@Service()
class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getAllUsers(): Promise<User[]> {
    const result = await this.userRepository.getAllUsers();
    return result;
  }
}

export default UserService;
