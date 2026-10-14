import { Router } from 'express'
import { MessageController } from './controllers/MessageController'
import { GetAllPostController } from './controllers/GetAllPostController'
import { SavePostController } from './controllers/SavePostController'
import { GetUserPostsController } from './controllers/GetUserPostsController'
import { DeletePostController } from './controllers/DeletePostController'

const router = Router()

const messageController = new MessageController()
const getAllPostController = new GetAllPostController()
const savePostController = new SavePostController()
const getUserPostsController = new GetUserPostsController()
const deletePostController = new DeletePostController()

router.get('/', messageController.handle)
router.get('/posts', getAllPostController.handle)
router.post('/posts', savePostController.handle)
router.get('/posts/user/:author', getUserPostsController.handle)
router.delete('/posts/:id', deletePostController.handle)

export { router }
