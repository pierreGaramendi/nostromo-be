import { Type } from "@nestjs/common";
import { PaginatedDto } from "./pagination.dto";
import { applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from "@nestjs/swagger";

export const ApiPaginatedResponse = <TModel extends Type<any>>(
    model: TModel,
  ) => {
    return applyDecorators(
      ApiExtraModels(model),
      ApiOkResponse({
        schema: {
          allOf: [
            { $ref: getSchemaPath(PaginatedDto) },
            {
              properties: {
                results: {
                  type: 'array',
                  items: { $ref: getSchemaPath(model) },
                },
              },
            },
          ],
        },
      }),
    );
  };