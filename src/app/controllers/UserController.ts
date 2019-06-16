import { Request, Response } from 'express'
import { getUsers } from '../services/api'
import User from '../models/User'
import UserService from '../services/UserService'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await getUsers()

    return res.json(users)
  }

  public async searchWebsites (req: Request, res: Response): Promise<Response> {
    const users = await getUsers()
    const websites = users.map((user: User): string => user.website)

    return res.json(websites)
  }

  public async userInfo (req: Request, res: Response): Promise<Response> {
    const users = await getUsers()
    const userInfo = users.map((user: User) : User => ({
      name: user.name,
      email: user.email,
      company: user.company
    }))

    const sortedUsers = UserService.sort(userInfo)

    return res.json(sortedUsers)
  }

  public async searchAddress (req: Request, res: Response): Promise<Response> {
    const users = await getUsers()
    const filterUsers = users.filter(({ address: { suite } }: User): boolean =>
      suite.toLowerCase().includes('suite')
    )

    return res.json(filterUsers)
  }
}

export default new UserController()
