json.array!(@transaction) do |transaction|
  json.extract! transaction, :product_req_id, :product_offered_id
  json.url product_url(transaction, format: :json)
end
