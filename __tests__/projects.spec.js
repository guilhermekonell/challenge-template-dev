const request = require('supertest');
const app = require('../src/app');

describe('Projects', () => {
  it('should be able to list projects', async () => {
    await request(app)
      .post('/projects')
      .send({
        title: 'Novo projeto',
        owner: 'Diego',
      });

    const response = await request(app).get('/projects');

    expect(response.body).toEqual(
      expect.arrayContaining([
        { title: 'Novo projeto', owner: 'Diego' }
      ])
    )
  });
})
