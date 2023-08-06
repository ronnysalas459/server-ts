import { hash, compare } from 'bcryptjs';

const encrypt = async ( password: string) => {
    const hashPassword = await hash(password, 10);
    return hashPassword;
};

const verified = async (password: string, hashPassword: string) => {
    const isMatch = await compare(password, hashPassword);
    return isMatch;
}

export { encrypt, verified };
