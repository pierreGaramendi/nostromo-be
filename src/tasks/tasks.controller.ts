import { Controller, Get, Post, Delete, Put, Body, Param, NotFoundException, UseFilters, HttpCode } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITaskCreate, ITaskUpdate } from 'src/db/task.interface';
import { isNil } from 'ramda'

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) {}

    @Get()
    findAll() {
        return this.taskService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const task = await this.taskService.findOne(id)
        if (isNil(task)) throw new NotFoundException()
        return task
    }

    @Post()
    create(@Body() body: ITaskCreate) {
        return this.taskService.create(body)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() task: ITaskUpdate) {
        const taskUpdated = await this.taskService.update(id, task)
        if (isNil(taskUpdated)) throw new NotFoundException()
        return taskUpdated
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        const taskDeleted = await this.taskService.delete(id)
        if (isNil(taskDeleted)) throw new NotFoundException()
        return taskDeleted
    }

}
