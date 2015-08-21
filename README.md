# Matters

**Live Demo:**
http://ec2-23-22-59-98.compute-1.amazonaws.com:3006

**API:**
http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients?filter[include]=matters

**Github Repo:**
https://github.com/bstar/matters

### API Rest Examples for Clients Model:

**Return list of clients:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients

**Return single client:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients/55d67190373a16da7ba34a8f

**Return matters scoped to a single client:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients/55d67190373a16da7ba34a8f/matters

**Return list of clients with their respective matters mixed in:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients?filter[include]=matters

**Return single client with respective matters mixed in:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients/55d67190373a16da7ba34a8f?filter[include]=matters


### API Rest Examples for Matters Model:

**Return list of matters:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters

**Return single matter:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters/55d6734f373a16da7ba34a96

**Return a matter's parent client:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters/55d6734f373a16da7ba34a96/client

**Return a single matter with client data mixed in:** http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters/55d6734f373a16da7ba34a96?filter[include]=client


### Notes:
- not complete with tests
- no sass compiling
- only tested on latest chrome/safari
- no environment handling
