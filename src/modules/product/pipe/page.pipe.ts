import { ArgumentMetadata } from "@nestjs/common";
import { PipeTransform } from "@nestjs/common";
import { isNil, not } from 'ramda'
import { defaultLimit, isNone } from 'src/constants/pagination';

export class PagePipe implements PipeTransform {
    async transform(value: any, { metatype, type }: ArgumentMetadata): Promise<any> {
        const { search, page, sort } = value

        let structureSearch = {
            title: { $regex: new RegExp(search, "i") }
        }

        let sctructureSort: any = {}
        if (not(isNil(sort))) {
            if (sort === 'mp') {
                sctructureSort.price = -1
            } else if (sort === 'np') {
                sctructureSort.price = 1
            } else if (sort === 'r') {
                sctructureSort.sold = 1
            }
        } else {
            sctructureSort.price = -1
        }

        const evaluatedPage = page || 1
        let options = {
            page: evaluatedPage,
            select: 'title price description thumbnail rating discount',
            sort: sctructureSort,
            limit: defaultLimit,
            collation: {
                locale: 'en',
            },
        };
        let toSearch = isNone(search)

        return { structureSearch, options, toSearch }
    }
}