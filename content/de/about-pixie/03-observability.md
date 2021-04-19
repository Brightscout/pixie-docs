---
title: "Supported Protocols"
metaTitle: "About Pixie | Supported Protocols"
metaDescription: "Protocols automatically traced by Pixie"
order: 3
---

The following is a list of protocols automatically traced by Pixie's no-instrumentation logic. 

## Protocols

| Protocol      | Support             | Notes                          |
| :------------ | :------------------ | :----------------------------- |
| HTTP          | Supported           |                                |
| HTTP2/gRPC    | Partially Supported | Currently only for Golang apps |
| DNS           | Supported           |                                |
| MySQL         | Supported           |                                |
| PostgreSQL    | Supported           |                                |
| Cassandra     | Supported           |                                |
| Redis         | Coming Soon         |                                |

Additional protocols are under development.

## Encryption Libraries

Pixie supports tracing of traffic encrypted with the following libraries:
- [OpenSSL](https://www.openssl.org/)
- [Go TLS](https://golang.org/pkg/crypto/tls/)
