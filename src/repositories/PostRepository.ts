import { EntityManager } from 'typeorm'
import { Post } from '../entities/Post'

export class PostRepository {
  private manager: EntityManager

  constructor (manager: EntityManager) {
    this.manager = manager
  }

  getAll = async (): Promise<Array<Post>> => {
    return await this.manager.find(Post)
  }

  save = async (post: Post): Promise<Post> => {
    return await this.manager.save(post)
  }

  getByUser = async (author: string): Promise<Array<Post>> => {
    return await this.manager.find(Post, { where: { author } })
  }

  delete = async (id: string): Promise<void> => {
    await this.manager.delete(Post, id)
  }
}
