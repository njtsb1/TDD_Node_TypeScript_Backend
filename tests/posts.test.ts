import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:5001/v1'
})

describe('/posts', () => {
  it('Should return status 200 and list of posts', async () => {
    const response = await server.get('/posts')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.data)).toBe(true)
  })

  it('Should return status 200 and list of posts filtered by user', async () => {
    const response = await server.get('/posts/user/user@dio.me')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.data)).toBe(true)
  })

  it('Should return status 204 when a post is successfully deleted', async () => {
    // Create an instance first to acquire a real valid id from sqlite schema
    const postResponse = await server.post('/posts', {
      author: 'integration@test.com',
      content: 'Target content to delete'
    })
    
    const targetId = postResponse.data.post_id
    const response = await server.delete(`/posts/${targetId}`)
    expect(response.status).toBe(204)
  })
})

