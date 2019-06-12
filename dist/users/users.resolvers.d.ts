import { UsersService } from './users.service';
import { createDTO, updateDTO } from './users.dto';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(userId: number): Promise<any>;
    allUsers(): Promise<any[]>;
    createUser(newUser: createDTO): Promise<any>;
    deleteUser(userId: string): Promise<any>;
    updateUser(userId: string, input: updateDTO): Promise<any>;
}
