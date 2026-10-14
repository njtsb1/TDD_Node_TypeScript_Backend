import { Request, Response } from 'express'
import { GetUserPostsService } from '../services/GetUserPostsService'

export class GetUserPostsController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { author } = request.params
    const getUserPostsService = new GetUserPostsService()

    try {
      const posts = await getUserPostsService.execute(author)
      return response.status(200).json(posts)
    } catch (error) {
      return response.status(500).json({ message: 'Error' })
    }
  }
}
