import { Post } from '../entities/Post'
import { getMockContentList } from '../__mocks__/mockContentList'
import { makeMockRequest } from '../__mocks__/mockRequest'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { GetAllPostController } from './GetAllPostController'
import { GetAllPostService } from '../services/GetAllPostService'

jest.mock('../services/GetAllPostService')

describe('GetAllPostController', () => {
  let getAllPostController: GetAllPostController
  let mockExecute: jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
    getAllPostController = new GetAllPostController()
    mockExecute = jest.fn()
    ;(GetAllPostService as jest.Mock).mockImplementation(() => {
      return { execute: mockExecute }
    })
  })

  it('Should return status 200 and an empty array when it does not have posts', async () => {
    mockExecute.mockResolvedValue([])

    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllPostController.handle(request, response)

    expect(mockExecute).toHaveBeenCalled()
    expect(response.state.status).toBe(200)
    expect(response.state.json).toMatchObject([])
  })

  it('Should return status 200 and all posts in database', async () => {
    const mockPostList: Post[] = getMockContentList()
    mockExecute.mockResolvedValue(mockPostList)

    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllPostController.handle(request, response)

    expect(response.state.status).toBe(200)
    expect(response.state.json).toMatchObject(mockPostList)
  })

  it('Should return status 500 when server has an error', async () => {
    mockExecute.mockRejectedValue(new Error())

    const request = makeMockRequest({})
    const response = makeMockResponse()

    await getAllPostController.handle(request, response)

    expect(mockExecute).toHaveBeenCalled()
    expect(response.state.status).toBe(500)
    expect(response.state.json).toMatchObject({ message: 'Error' })
  })
})
