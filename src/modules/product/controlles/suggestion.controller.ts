import { Controller, Get, Query } from '@nestjs/common';
import { SuggestionService } from '../services/suggestion.service';

@Controller('suggestion')
export class SuggestionController {
    constructor(private productService: SuggestionService) { }

    @Get('search')
    search(@Query() query: any) {
        return this.productService.findSuggestions(query)
    }

}
