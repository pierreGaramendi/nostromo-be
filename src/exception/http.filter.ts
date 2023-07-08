import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { getCustomMessage } from './messages.constant';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        const customMessage = getCustomMessage(status.toString())

        response
            .status(status)
            .json({
                statusCode: status,
                message: customMessage,
                timestamp: new Date().toISOString(),
                path: request.url,
            });
    }
}