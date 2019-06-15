import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/websites', UserController.searchWebsites)

export default routes
