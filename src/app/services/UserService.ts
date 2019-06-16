import User from '../models/User'

class UserService {
  public sort (users: User[]): User[] {
    return users.sort((a, b) : number => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1

      return 0
    })
  }
}

export default new UserService()
