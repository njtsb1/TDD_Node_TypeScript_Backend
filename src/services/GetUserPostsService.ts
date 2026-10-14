import { getCustomRepository } from 'typeorm'
import { Post } from '../entities/Post'
import { PostRepository } from '../repositories/PostRepository'

export class GetUserPostsService {
  private postRepository: PostRepository

  constructor (postRepository: PostRepository = getCustomRepository(PostRepository)) {
    this.postRepository = postRepository
  }

  async execute (author: string): Promise<Post[]> {
    return await this.postRepository.getByUser(author)
  }
}
