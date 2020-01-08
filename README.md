# CDK dependency POC

`LambdaStack` depends on `VpcBaseStack`.
running this command will resolve stack dependencies and deploy in order.

```bash
$ cdk deploy LambdaStack
```

OR

```bash
$ cdk deploy "*"
```
