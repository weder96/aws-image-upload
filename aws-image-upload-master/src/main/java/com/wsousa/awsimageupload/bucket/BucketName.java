package com.wsousa.awsimageupload.bucket;

public enum BucketName {

    PROFILE_IMAGE("code-file-images");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
