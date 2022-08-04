import axios from 'axios'

import { UserType } from '../types/User'

export default class JolApi {
    users: Array<UserType> = []
    jholderApi = 'https://jsonplaceholder.typicode.com/'

    async getAll() {
        return await axios
            .get(this.jholderApi + 'users')
            .then((rawUsers: any) => {
                //clean the api data and get only what is required and attach the avatar to it.
                rawUsers.data.forEach((user: any) => {
                    delete user.address
                    delete user.company

                    user.avatar =
                        'https://avatars.dicebear.com/v2/avataaars/%7B%7B' +
                        user.username +
                        '%7D%7D.svg?options[mood][]=happy'

                    this.users.push(user as UserType)
                })

                return this.users
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
}
