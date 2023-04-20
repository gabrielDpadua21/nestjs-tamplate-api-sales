# Curl methods to teste

## POST Create user

```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"user": "johndoe", "email": "johndoe@example.com", "phone": "555-1234", "cpf": "01234567890", "password": "secret"}' \
  http://localhost:8080/user \
  | python -m json.tool
```

## GET all users

```
curl -X GET \
http://localhost:8080/user
```