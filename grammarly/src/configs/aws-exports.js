import { config } from "aws-sdk"


export const REGION = "ap-southeast-1"


// Define access key to communicate with AWS
const AWSConfig = {
  accessKeyId: "AKIARLPZBW5ZAQESIAVQ",
  secretAccessKey: "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",
  region: REGION
}

config.update(AWSConfig)
