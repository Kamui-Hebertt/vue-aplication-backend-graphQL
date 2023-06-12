import { Types } from "@graphql-codegen/plugin-helpers/typings/types";
import fs from 'fs';
import path from 'path';
import * as schemaAsPlugin from '@graphql-codegen/schema-ast';
import schema from "./graphql/schema/schema";
import {parse, printSchema} from 'graphql'
import { codegen } from "@graphql-codegen/core";






async function performCodegen(options: Types.GenerateOptions) : Promise<void>{
const output = await codegen(options)
  fs.writeFile(path.join(__dirname, '/graphql/generated', options.filename), output, () => {
    console.log('Outputs generated!');
  });
  
}


export async function performAsCodegen(): Promise<void>{
const options: Types.GenerateOptions ={
  config: {numericEnums: true},
  documents: [],
  filename: 'schema.graphql',
  schema:parse(printSchema(schema)),
  plugins:[{'schema-ast': {}}],
  pluginMap:{
    'schema-ast': schemaAsPlugin,

  },
};
performCodegen(options);
}



