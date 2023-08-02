import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, productSchema } from 'src/modules/product/schema/product.schema';
import { Suggestion, suggestionSchema } from './schema/suggestion.schema';
import { SuggestionController } from './controlles/suggestion.controller';
import { SuggestionService } from './services/suggestion.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: productSchema },
      { name: Suggestion.name, schema: suggestionSchema }
    ])
  ],
  controllers: [ProductController, SuggestionController],
  providers: [ProductService, SuggestionService]
})
export class ProductModule { }
