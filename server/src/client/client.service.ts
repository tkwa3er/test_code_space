import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DbService } from "src/dbService/db.service";
import { ClientServiceBase } from "./base/client.service.base";

@Injectable()
export class ClientService extends ClientServiceBase {
  constructor(protected readonly prisma: DbService) {
    super(prisma);
  }
}
