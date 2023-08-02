import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Suggestion } from '../schema/suggestion.schema';

@Injectable()
export class SuggestionService {
    constructor(
        @InjectModel(Suggestion.name) private suggestionModel: Model<Suggestion>,
    ) { }

    async findSuggestions(query: any) {
        const { value } = query
        const toSearch = {
            suggestion: { $regex: new RegExp(value, "i") }
        }
        if (value === '') return {}
        return await this.suggestionModel.find(toSearch);
    }

}
