import path from "path";
import fs from "fs";
import { IWebServiceProps } from '../web-service-props';

export function getAppDataPathFromPropsAndInitialize(props: IWebServiceProps) {
 const appDataPath =  getAppDataPathFromProps(props);
fs.mkdirSync(appDataPath, {recursive: true});
return appDataPath;
}

export function getAppDataPathFromProps(props: IWebServiceProps) {
  //      const packageJson = JSON.parse(fs.readFileSync(path.join(require.resolve('.'), '../../package.json')).toString());
  //      const packageName = packageJson.name;
  const { packageName, appDataRoot} = props;
console.log(`getAppDataPathFromProps packageName: ${packageName} appDataRoot: ${appDataRoot}`)
//  const appDataRoot: string | undefined = serviceArgs.appDataRoot;
if (appDataRoot) {
    if (appDataRoot.startsWith("/")) {
      console.log(`returning for '/' case`);
      return path.join(appDataRoot, "/appdata/", packageName);
    }

    return path.join(
      __dirname,
      "../../",
      appDataRoot,
      "/appdata/",
      packageName,
    );
  }

  return path.join(
    path.dirname(require.main?.filename!),
    "../appdata/",
    packageName,
  );
}

