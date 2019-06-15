import { Request, Response } from 'express'
import { getUsers } from '../services/api'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await getUsers()

    return res.json(users)
  }
}

export default new UserController()
