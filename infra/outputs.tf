output "bucket" {
  value = aws_s3_bucket.site.bucket
}

output "distribution_id" {
  description = "Set as the CLOUDFRONT_DISTRIBUTION_ID GitHub secret."
  value       = aws_cloudfront_distribution.site.id
}

output "deploy_role_arn" {
  description = "Set as the AWS_DEPLOY_ROLE_ARN GitHub secret."
  value       = aws_iam_role.deploy.arn
}

output "certificate_validation_records" {
  description = "Create these as CNAMEs at your DNS provider to validate the cert."
  value       = aws_acm_certificate.site.domain_validation_options
}
