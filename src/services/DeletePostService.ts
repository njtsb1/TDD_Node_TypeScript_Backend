import { getCustomRepository } from 'typeorm'
import { PostRepository } from '../repositories/PostRepository'

export class DeletePostService {
  private postRepository: PostRepository

  constructor (postRepository: PostRepository = getCustomRepository(PostRepository)) {
    this.postRepository = postRepository
  }

  async execute (id: string): Promise<void> {
    await this.postRepository.delete(id)
  }
}
