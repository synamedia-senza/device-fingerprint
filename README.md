# Device Fingerprint

This Node.js script lets you call the Senza [Device Fingerprint](https://developer.synamedia.com/senza/reference/displayfingerprint11) API. 

## Setup

Create an API key for a tenant with the `senza:messages:send-direct` and `senza:messages:send-group` permissions.

Save the client ID and client secret in the `config.json` file, along with the `tenantId`.

The script does not depend on any packages.

## Params

You can edit the parameters in the `config.json` file:

* `textColor`
* `backgroundColor`
* `position`
* `duration`
* `fontSize`

## Usage

Call `node device-fingerprint.js`. 
