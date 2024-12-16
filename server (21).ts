
import mongoose, { Document, Schema } from 'mongoose';


export interface IUser extends Document {
  name: string;
  email: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model<IUser>('User', UserSchema);



const resolvers = {
  Query: {
    // Query to get all users
    users: async () => {
      return await User.find();
    },
    // Query to get a user by ID
    user: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
  }
}

Mutation: {
  // Mutation to create a new user
  type Mutation = any
    
  interface IUser extends Document {
    name: string;
    email: string;
  }
  
  const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  });

  const User = mongoose.model<IUser>('User', UserSchema);

  const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;


    
  


 
  


}
