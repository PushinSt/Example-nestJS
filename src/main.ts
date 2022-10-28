import { NestFactory } from '@nestjs/core' // NestFactory предоставляет несколько статических методов, позволяющих создать экземпляр приложения
import { ValidationPipe } from '@nestjs/common' // проверка для всех входящих клиентских данных (проверка параметров в post, get запросах и др)
import { AppModule } from './app.module'

async function bootstrap() { //инициализация приложения
  const app = await NestFactory.create(AppModule)  
  app.useGlobalPipes(new ValidationPipe()) // проверка запросов (входных параметров) get post put и др
  await app.listen(3000)
}
bootstrap()
