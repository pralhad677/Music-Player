import React from 'react'

import {gql,useMutation,useQuery,useLazyQuery} from '@apollo/client'

import { GoogleLogin,GoogleLoginResponse,GoogleLoginResponseOffline } from 'react-google-login';

const LOGIN = gql`
mutation Login($token:String!){
  login(token:$token){
    _id,
    email,
    authJwtToken

  }
}
`
interface User {
  _id: string,
  email?: string,
  authJwtToken?: string
  __typename?:string
}
interface Users {
  users:User[] //backend ko query users ho 
}
const USERS = gql`
query Users{
  users{
    _id
  }
} 
`

function Index() {
  const [login, { loading: mutationLoading, error: mutationError }] = useMutation(LOGIN, {
    update(cache, { data: { login } }) {
      
        //note ya nira chai k buhnu praxa vneni 
      //first time query function use grya xena withthe help of useQuery ani tyo sidhai nagari talako grda alwal null
      let allUsers: Users| null = cache.readQuery({ query: USERS }) 
      console.log('allUsers',allUsers)
      console.log('data', login)
      //note useMutation grda aako response automatically cache maupdate hudaina so hamile nia manullay gareko cache update 
      cache.writeQuery<Users>({
        query: USERS,
        //data1?.users ko equivalent gareko of app.tsx
        // data: {users: []}
        data: {
          users: [...allUsers!.users, login],
          
        }
      });
    }  
  })
  const { loading, error, data,refetch } = useQuery(USERS, )
  const responseGoogleOnSuccess = async (response:GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response)
    console.log((response as GoogleLoginResponse).tokenId)
    console.log((response as GoogleLoginResponse).tokenObj.id_token)
     login({
      variables: {
      token:(response as GoogleLoginResponse).tokenObj.id_token
    }})
  }
  const responseGoogleOnError = (response:any) => {
      console.log(response)
  }
  const fetchAllData = () => {
    //maile ya refetch grnu mko karan chai fetchPolicy le kaam nagarera ho mero case ma
    refetch()
      console.log(data)
      console.log(data.users)
  }
  return (
    <div>
      <h1>hi</h1>
      <GoogleLogin
          clientId="851838321229-opcjt204f9io03e7dj0ji9md4eu025ca.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogleOnSuccess}
          onFailure={responseGoogleOnError}
          cookiePolicy={'single_host_origin'}
      />,
      <button onClick={fetchAllData}>fetch all data</button>
      {
      data &&  data.users.map((item:User) => {
          return <li key={item._id}>a</li>
        })
      }
    </div>
  )
}

export default Index
