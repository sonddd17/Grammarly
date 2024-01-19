import { S3 } from 'aws-sdk'
import { REGION } from '../configs/aws-exports'

export const S3_API_VERSION = '2006-03-01'
export const S3_BUCKET = "grosana-bucket";

class S3Singleton {
    static instance = undefined
    
    static getInstance = async () => {
        if (S3Singleton.instance) {
            return S3Singleton.instance
        }

        S3Singleton.instance = await S3Singleton.createInstance()
        return S3Singleton.instance
    }

    static createInstance = async () => {
        return new S3({
            apiVersion: S3_API_VERSION,
            region: REGION,
            params: { Bucket: S3_BUCKET },
        })
    }
}

export default S3Singleton