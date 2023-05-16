# Models

## Return Order

The container of the details of the return order, it contains one-or-more Return Order Line and is it used to collect
all the needed information to manage the warehouse movements.

| Field                    | Type             | Other       |
|--------------------------|------------------|-------------|
| id                       | unsigned big int |             |
| year                     | unsigned int     |             |
| order_date               | date             |             |
| notes                    | long text        | nullable    |
| customer_id              | unsigned int     | foreign_key | 
| destination_warehouse_id | unsigned big int | foreign_key |

## Return Order Line

The unit of the return order, it is connected to a Shipment Line, to a Product and a Production Lot, it has a quantity
field that is used to define how much of the product has been returned by the customer.

| Field             | Type             | Other       |
|-------------------|------------------|-------------|
| id                | unsigned big int |             |
| qty               | unsigned float   |             |
| product_id        | unsigned int     | foreign_key |
| production_lot_id | unsigned int     | foreign_key | 
| linkable_id       | unsigned big int |             |
| linkable_type     | string           |             |
