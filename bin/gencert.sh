#!/bin/bash
# simple one-liner to create a self signed SSL certificate
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 9999 -nodes
