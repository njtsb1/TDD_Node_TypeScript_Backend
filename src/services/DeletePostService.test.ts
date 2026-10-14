import { DeletePostService } from './DeletePostService'

jest.mock('../repositories/PostRepository')
const postRepositoryMock = require('../repositories/PostRepository')

describe('DeletePostService', () => {
  it('should call repository to delete a post', async () => {
    postRepositoryMock.delete = jest.fn().mockResolvedValue(undefined)

    const deletePostService = new DeletePostService(postRepositoryMock)
    await deletePostService.execute('mock-uuid')

    expect(postRepositoryMock.delete).toHaveBeenCalledWith('mock-uuid')
  })
})
