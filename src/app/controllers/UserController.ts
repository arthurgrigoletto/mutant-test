import { Request, Response } from 'express'
import { getUsers } from '../services/api'
import User from '../models/User'

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
}

export default new UserController()
