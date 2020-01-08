#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkPocsStack } from '../lib/cdk-pocs-stack';

const app = new cdk.App();
new CdkPocsStack(app, 'CdkPocsStack');
