import { Document } from "mongoose";

export interface IMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export interface IUserMessages extends Document {
    userId: string | null | undefined;  
    messages: IMessage[];
}
