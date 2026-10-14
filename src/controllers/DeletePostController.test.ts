import { Request, Response } from 'express'
import { makeMockResponse } from '../__mocks__/mockResponse'
import { DeletePostController } from './DeletePostController'
import { DeletePostService } from '../services/DeletePostService'

jest.mock('../services/DeletePostService')

describe('DeletePostController', () => {
  it('should return status 204 when post is deleted', async () => {
    const mockExecute = jest.fn().mockResolvedValue(undefined)
    ;(DeletePostService as jest.Mock).mockImplementation(() => {
      return { execute: mockExecute }
    })

    const deletePostController = new DeletePostController()
    const request = { params: { id: 'some-id' } } as unknown as Request
    const response = makeMockResponse()
    
    // Override send back onto response object to match express expectation
    response.send = jest.fn().mockReturnValue(response)

    await deletePostController.handle(request, response)

    expect(response.state.status).toBe(204)
  })
})
