import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schema/task.schema';
import { ITaskCreate,ITaskUpdate } from '../db/task.interface'
@Injectable()
export class TasksService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {

    }

    findAll() {
        return this.taskModel.find();
    }

    async create(newTask: ITaskCreate) {
        const createdTask = new this.taskModel(newTask)
        return createdTask.save()
    }

    async findOne(id: string) {
        return this.taskModel.findById(id)
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id)
    }

    async update(id: string, task: ITaskUpdate) {
        return this.taskModel.findByIdAndUpdate(id, task)
    }
}
