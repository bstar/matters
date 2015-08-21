# matters

API Reference:

API Rest Examples for Clients Model

Return list of clients
  http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients

Return single client
  http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients/55d67190373a16da7ba34a8f

Return matters scoped to a single client
  http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients/55d67190373a16da7ba34a8f/matters

Return list of clients with their respective matters mixed in
  http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients?filter[include]=matters

Return single client with respective matters mixed in
  http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/clients/55d67190373a16da7ba34a8f?filter[include]=matters



API Rest Examples for Matters Model
http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters
http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters/55d6734f373a16da7ba34a96
http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters/55d6734f373a16da7ba34a96/client
http://ec2-23-22-59-98.compute-1.amazonaws.com:3005/api/matters/55d6734f373a16da7ba34a96?filter[include]=client
