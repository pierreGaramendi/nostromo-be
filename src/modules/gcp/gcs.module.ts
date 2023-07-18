import { Module } from "@nestjs/common";
import { StorageService } from "./gsc.service";
import { MediaController } from "./gcs.controller";

@Module({
  providers: [StorageService],
  exports: [StorageService],
  controllers: [MediaController]
})
export class GoogleCloudStorageModule { }
