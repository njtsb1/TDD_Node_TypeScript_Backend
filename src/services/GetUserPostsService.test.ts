import { Post } from '../entities/Post'
import { getMockContentList } from '../__mocks__/mockContentList'
import { GetUserPostsService } from './GetUserPostsService'

jest.mock('../repositories/PostRepository')
const postRepositoryMock = require('../repositories/PostRepository')

describe('GetUserPostsService', () => {
  it('should return all posts from a specific user', async () => {
    const mockPostList: Post[] = getMockContentList()
    postRepositoryMock.getByUser = jest.fn().mockResolvedValue(mockPostList)

    const getUserPostsService = new GetUserPostsService(postRepositoryMock)
    const posts = await getUserPostsService.execute('author@email.com')

    expect(postRepositoryMock.getByUser).toHaveBeenCalledWith('author@email.com')
    expect(posts).toMatchObject(mockPostList)
  })
})
