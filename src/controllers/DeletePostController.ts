import { Request, Response } from 'express'
import { DeletePostService } from '../services/DeletePostService'

export class DeletePostController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deletePostService = new DeletePostService()

    try {
      await deletePostService.execute(id)
      return response.status(204).send()
    } catch (error) {
      return response.status(500).json({ message: 'Error' })
    }
  }
}
