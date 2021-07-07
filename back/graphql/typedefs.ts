import { gql } from 'apollo-server-express'


export const typeDefs = gql`
type Query {
    name:String!,
    users:[User!]!
  
}
type Mutation {
    login(token:String!):User!
}
type User{
  _id:String!
  email:String!
  authJwtToken:String!

}
# type Subscription  {
#     users:User!
# }
`