import { IVpc, Vpc } from "@aws-cdk/aws-ec2";
import cdk = require("@aws-cdk/core");

export class VpcBaseStack extends cdk.Stack {

  readonly vpc: IVpc;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, 'Vpc', {});
  }
}
