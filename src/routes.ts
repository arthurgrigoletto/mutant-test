import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/search_websites', UserController.searchWebsites)
routes.get('/search_basicInfo', UserController.userInfo)
routes.get('/search_address', UserController.searchAddress)

export default routes
