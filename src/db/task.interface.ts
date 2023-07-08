import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ITaskUpdate {
    @IsString()
    @IsOptional()
    
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean
}

export class ITaskCreate {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    done?: boolean
}