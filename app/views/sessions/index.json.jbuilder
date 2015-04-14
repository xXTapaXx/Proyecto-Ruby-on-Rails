json.array!(@token) do |token|
  json.extract! token, :id_user, :token, :date_login, :expired
  json.url product_url(token, format: :json)
end
