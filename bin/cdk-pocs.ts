#!/usr/bin/env node
import "source-map-support/register";

import cdk = require("@aws-cdk/core");

import { LambdaStack } from "../lib/lambda-stack";
import { VpcBaseStack } from "../lib/vpc-base-stack";

const app = new cdk.App();
const vpcStack = new VpcBaseStack(app, 'VpcStack');
const lambdaStack = new LambdaStack(app, 'LambdaStack', { vpc: vpcStack.vpc });

// OR

// const vpcStack = new VpcBaseStack(app, 'VpcStack');
// const lambdaStack = new LambdaStack(app, 'LambdaStack');
//
// lambdaStack.addDependency(vpcStack);
