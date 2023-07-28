# Side effects

## Update

### When closing a shipment (i.e. new shipment state is final)

When closing a shipment a job called `UpdateOrderStatusShipmentAction` is pushed to the queue.
This job spawn a job (`UpdateOrderStatusAction`) for each `Order` contained in the shipment, this new job checks if the
order has been completely delivered and, in case, it updates the order state to its final state. 
If the order has only been partially delivered, its new state will be the `Partially Delivered` equivalent.
