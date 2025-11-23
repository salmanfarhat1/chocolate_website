# Using Docker with Postgres and Persistent Storage

## 1️ List existing Docker volumes

To see all the volumes you have (including persistent storage for Postgres):

```bash
docker volume ls
```
## 2 Create a Postgres container with persistent storage

Make sure to mount your existing volume so your old database is preserved:

```bash 
docker run -d \
  --name chocolate_db \
  --network chocolate_net \
  -e POSTGRES_USER=chocolate_admin \
  -e POSTGRES_PASSWORD=123Malak \
  -e POSTGRES_DB=chocolate_db \
  -v chocolate_website_postgres_data:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:15
```

Note:
<ul>
<li>-v chocolate_website_postgres_data:/var/lib/postgresql/data → mounts your persistent volume so Postgres uses the existing database files.
</li>
<li>-p 5432:5432 → maps Postgres port to your local machine, so you can connect from your host.</li>
<li>postgres:15 → the Postgres image version (replace with your preferred version).
</li>
</ul>


## 3 Connect to the database inside the container

Once the container is running, inspect or manage your database using psql:

```bash 
docker exec -it chocolate_db psql -U chocolate_admin -d chocolate_db
```

This opens the psql interactive prompt.

You can now run commands like \dt to list tables, \l to list databases, and \du to see users.


# backend

```bash 
docker build -t chocolate_backend ./backend

docker run \
  --name chocolate_backend \
  --network chocolate_net \
  -e DB_HOST=chocolate_db \
  -e DB_PORT=5432 \
  -e DB_USER=chocolate_admin \
  -e DB_PASSWORD=123Malak \
  -e DB_NAME=chocolate_db \
  -p 3000:3000 \
  chocolate_backend

```