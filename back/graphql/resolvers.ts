import { IResolvers, ApolloError } from 'apollo-server-express'
import { User, IUser } from '../Model/User'
import faker from 'faker'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import a from '../Utils/OAuthClient'


export const resolvers: IResolvers = {
  Query: {
    name() {
      return 'my name is jacob' 
    },
    users: async (parent, args, context, info) => {
      let data = await User.find()
      return data
    }
    
    
  },
  Mutation: {
    login: async (parent, { token }, { OAuthClient }, info) => {
      let data:IUser
      //ya nira ko token vneko chai login grda google ko through  tala ko grda aaune token ho
    // console.log((response as GoogleLoginResponse).tokenObj.id_token)
      console.log('token', token)
      console.log(OAuthClient)
      console.log('a', await a(OAuthClient, token))
      let data1 = _.pick(await a(OAuthClient,token), ["_id", "email"])
      const authJwtToken = jwt.sign({ _id: data1._id },"mero random kunai key",{expiresIn:"7d"})
      // data1.authJwtToken = authJwtToken
      console.log('data1', data1)
      let data2 = {
        ...data1,
        authJwtToken
      }
        return data2
      }
    
  //   addUser: async (parent, args, {pubsub}, info) => {
  //     const name = faker.name.findName();
  //     const user = new User({
  //       name
  //     })
  //     const data = await user.save()
  //     pubsub.publish('users', {
  //       // count
  //       users:data
  //     })
  //     return data
  //   }
  },
  // Subscription: {
  //   users: {
        
  //       subscribe:async (_, _1, { pubsub })=> {
  //           return pubsub.asyncIterator('users')
  //       }
  //   }
// } 
}
// class NotAllowed extends ApolloError {
//   constructor(message: string, properties?: Record<string, any>) {
//     super(message, 'Not Allowed TO Access', properties);

//     Object.defineProperty(this, 'name', { value: 'NotAllowed' });
//   }
// }