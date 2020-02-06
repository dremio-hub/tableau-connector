This is the Dremio Native connector for Tableau, which utilizes the Tableau Connector SDK
to build what looks like a native named data source in Tableau.
<br/><br/>
The parts of the connector are:
 * connector-dialog.tcd - The connection dialog UI for Tableau.
 * connectionBuilder.js - The script which creates the JDBC connection URL from the properties passed from the connection dialog.
 * connectionRequired.js - Indicates which properties are required to make a connection.
 * connectionResolver.tdr - Indicates to Tableau the other files to be used in the connector.
 * dialect_plugin.tdd - File providing the mapping from Tableau's AST to Dremio's SQL dialect
 * manifest.xml - The top-level file giving driver metadata.
<br/><br/>
To run the connector in development, see https://tableau.github.io/connector-plugin-sdk/docs/share<br/>
To test the connector in development, see https://tableau.github.io/connector-plugin-sdk/docs/tdvt<br/>
To package the driver for shipment, see https://tableau.github.io/connector-plugin-sdk/docs/package-sign<br/>
To manually sign the file, you can package the file as unsigned and then run:<br/>
    `jarsigner -keystore NONE -storetype PKCS11 -tsa http://tsa.starfieldtech.com -providerClass sun.security.pkcs11.SunPKCS11 -providerArg <dir>/pkcs11.cfg packaged-connector/dremio.taco 'Certificate for Digital Signature' -certchain fullchain.pem`
<br/><br/>
Additional information, including samples, can be found at https://github.com/tableau/connector-plugin-sdk 
