import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  // Tests pour le contrôleur TasksController
  it('/tasks (GET)', () => {
    return request(app.getHttpServer())
      .get('/tasks')
      .expect(200);
  });

  it('/tasks (POST)', () => {
    const task = {
      id: "666",
      title: 'Test Task',
      task: 'Test task description',
      author: 'John Doe',
      date: '2023-04-10',
      keywords: ['test', 'example'],
    };
    return request(app.getHttpServer())
      .post('/tasks')
      .send(task)
      .expect(201);
  });

  // Tests pour le contrôleur KeywordsController
  it('/keywords (GET)', () => {
    return request(app.getHttpServer())
      .get('/keywords')
      .expect(200);
  });

  it('/keywords (POST)', () => {
    const keyword = {
      id: '999',
      name: 'test_keyword',
    };
    return request(app.getHttpServer())
      .post('/keywords')
      .send(keyword)
      .expect(201);
  });

  const taskId = '666';
  const keywordId = '999';

  it(`/tasks/${taskId} (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/tasks/${taskId}`)
      .expect(200);
  });

  it(`/tasks/${taskId} (PATCH)`, () => {
    const update = {
      title: 'Updated Task',
    };
    return request(app.getHttpServer())
      .patch(`/tasks/${taskId}`)
      .send(update)
      .expect(200);
  });

  
//DELETE A DECOMMENTER QUAND SERVICES FONCTIONNENT REELEMENT
  // it(`/tasks/${taskId} (DELETE)`, () => {
  //   return request(app.getHttpServer())
  //     .delete(`/tasks/${taskId}`)
  //     .expect(204);
  // });

  it(`/keywords/${keywordId} (GET)`, () => {
    return request(app.getHttpServer())
      .get(`/keywords/${keywordId}`)
      .expect(200);
  });

  it(`/keywords/${keywordId} (PATCH)`, () => {
    const update = {
      name: 'updated_keyword',
    };
    return request(app.getHttpServer())
      .patch(`/keywords/${keywordId}`)
      .send(update)
      .expect(200);
  });

  //DELETE A DECOMMENTER QUAND SERVICES FONCTIONNENT REELEMENT
  // it(`/keywords/${keywordId} (DELETE)`, () => {
  //   return request(app.getHttpServer())
  //     .delete(`/keywords/${keywordId}`)
  //     .expect(204);
  // });
});
