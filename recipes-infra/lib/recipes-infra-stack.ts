import { lambda_layer_awscli, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda"
import * as apiGateway from "aws-cdk-lib/aws-apigateway"
import * as dotenv from "dotenv"
// import * as sqs from 'aws-cdk-lib/aws-sqs';

dotenv.config()

export class RecipesInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define the lambda base layer. Pulls code from zip file generated
    const layer = new lambda.LayerVersion(this, "BaseLayer", {
      code: lambda.Code.fromAsset("lambda_base_layer/layer.zip"),
      compatibleRuntimes: [lambda.Runtime.PYTHON_3_7]
    })

    // Define the lambda function. Includes runtime, source code, handler, layer and environment
    const apiLambda = new lambda.Function(this, "ApiFunction", {
      runtime: lambda.Runtime.PYTHON_3_7,
      code: lambda.Code.fromAsset("../app/"),
      handler: "recipes_api.handler",
      layers: [layer],
      environment: {
        RECIPE_API_KEY: process.env.RECIPE_API_KEY ?? ""
      }
    })

    // Define the API for the lambda function
    const recipeApi = new apiGateway.RestApi(this, "RestApi", {
      restApiName: "Recipe API"
    })

    recipeApi.root.addProxy({
      defaultIntegration: new apiGateway.LambdaIntegration(apiLambda)
    })
  }
}
