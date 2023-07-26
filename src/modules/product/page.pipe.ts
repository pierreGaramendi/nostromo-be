import { ArgumentMetadata } from "@nestjs/common";
import { PipeTransform } from "@nestjs/common";
import { isNil, not, isEmpty } from 'ramda'

export class PagePipe implements PipeTransform {
    async transform(value: any, { metatype, type }: ArgumentMetadata): Promise<any> {
        const { limit, next, sort, search } = value

        let structureSearch = {
            title: { $regex: new RegExp(search, "i") }
        }

        let structureNext: any = {
            //title: { $regex : new RegExp(search, "i") }
        }

        if (not(isNil(next)) && not(isEmpty(next))) {
            console.log('notinnn')
            structureNext._id = {
                $lt: next
            }
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
        }

        let defaultLimit = 5
        if (not(isNil(limit))) {
            defaultLimit = limit
        }

        return { structureSearch, structureNext, sctructureSort, defaultLimit }
    }
}