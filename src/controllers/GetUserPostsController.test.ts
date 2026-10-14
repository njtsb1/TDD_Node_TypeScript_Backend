import { Request } from 'express'
import { getMockContentList } from '../__mocks__/mockContentList'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { GetUserPostsController } from './GetUserPostsController'
import { GetUserPostsService } from '../services/GetUserPostsService'

jest.mock('../services/GetUserPostsService')

describe('GetUserPostsController', () => {
  it('should return status 200 and user posts', async () => {
    const mockPostList = getMockContentList()
    const mockExecute = jest.fn().mockResolvedValue(mockPostList)
    ;(GetUserPostsService as jest.Mock).mockImplementation(() => {
      return { execute: mockExecute }
    })

    const getUserPostsController = new GetUserPostsController()
    const request = { params: { author: 'test@email.com' } } as unknown as Request
    const response = makeMockResponse()

    await getUserPostsController.handle(request, response)

    expect(response.state.status).toBe(200)
    expect(response.state.json).toMatchObject(mockPostList)
  })
})
