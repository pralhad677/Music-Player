import {User,IUser} from '../Model/User'
async function a(OAuthClient: any, token: string) {
  let data: IUser
  try {
    let response =  await OAuthClient.verifyIdToken({ idToken: token, audience: "851838321229-opcjt204f9io03e7dj0ji9md4eu025ca.apps.googleusercontent.com" })
      .then(async (response: any) => {
        console.log('response', response)
        const { name, email, email_verified } = response.payload
        console.log('name', name)
        console.log('email', email)
        console.log('email_verified', email_verified)
          
        if (email_verified) {
          const user = new User({
            email
          })
          data = await user.save()
          console.log('data', data)
          return data
        }
      })
    console.log('response', response)
    return response as IUser
  }
  catch (err) {
    console.log(err)
    // return data
  }

}

export default a