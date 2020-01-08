import { IVpc } from "@aws-cdk/aws-ec2";
import { Code, Function, Runtime } from "@aws-cdk/aws-lambda";
import cdk = require("@aws-cdk/core");

interface LambdaProps extends cdk.StackProps {
  vpc: IVpc
}

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: LambdaProps) {
    super(scope, id, props);

    new Function(this, 'HelloWorldLambda', {
      runtime: Runtime.NODEJS_10_X,
      description: "Hello world handler",
      handler: "index.handler",
      timeout: cdk.Duration.seconds(13),
      vpc: props.vpc,
      code: Code.inline(`
exports.handler = function (event, context) {
  context.succeed('hello world');
};
      `)
    });
  }
}
