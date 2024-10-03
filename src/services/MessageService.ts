import {IMessage, IUserMessages} from 'src/interfaces/IMessage';

import MessageModel from '../models/MessageModel'

class MessageService {
    constructor() {}
  

    async getMessageHistory(userId: string): Promise<IMessage[]> {
      try {
        const userMessages: IUserMessages | null = await MessageModel.findOne({ userId });
  
        if (userMessages) {
          return userMessages.messages;
        } else {
          return [];
        }
      } catch (error) {
        console.error('Erro ao obter o histórico de mensagens:', error);
        throw error;
      }
    }
  
    async addMessage(userId: string, role: 'user' | 'assistant', content: string): Promise<void> {
      try {
        let userMessages: IUserMessages | null = await MessageModel.findOne({ userId });
  
        if (!userMessages?.userId) {
          throw new Error('userId inválido ou não encontrado');
        }
  
        userMessages.messages.push({
          role,
          content,
          timestamp: new Date(),
        });
  
        await userMessages.save();
      } catch (error) {
        console.error('Erro ao adicionar mensagem:', error);
        throw error;
      }
    }
  
    async clearMessageHistory(userId: string): Promise<void> {
      try {
        await MessageModel.deleteOne({ userId });
      } catch (error) {
        console.error('Erro ao limpar o histórico de mensagens:', error);
        throw error;
      }
    }
  }
  
  export default new MessageService();
  