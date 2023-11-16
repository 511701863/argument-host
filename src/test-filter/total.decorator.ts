import { Get, applyDecorators, UseGuards, UseFilters } from "@nestjs/common"
import { Roles } from "./role.decorator"
import { Role } from './role';
import { AaaGuard } from "./aaa.guard";
import { AfilterFilter } from "./afilter.filter";

export const TotalDecorator = () => {
    return applyDecorators(
        Get('findOne/:id'),
        UseFilters(AfilterFilter),
        Roles(Role.admin),
        UseGuards(AaaGuard)
    )
}