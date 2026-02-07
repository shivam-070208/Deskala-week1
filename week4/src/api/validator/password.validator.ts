import bcrypt from "bcrypt";

export const passwordValidator = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        const isVerified = await bcrypt.compare(password, hashedPassword);
        return isVerified;
    } catch (error) {
      
        return false; 
    }
}