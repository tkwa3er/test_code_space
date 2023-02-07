import { ApiProperty } from "@nestjs/swagger";
import { Client } from "./Client";
export class getListClientDto {
  @ApiProperty({
    type: [Client],
  })
  readonly paginatedResult!: [Client];

  @ApiProperty({
    type: Number,
  })
  readonly totalCount!: number;
}
