# First-blog-website

a blog site made with React & LoopBack

Backend - [ReadMe](https://github.com/MichaelMIL/First-website/blob/master/var/www/html/api/README.md)\
Frontend - [ReadMe](https://github.com/MichaelMIL/First-website/blob/master/var/www/html/reactapp/README.md)


### Installation

requires [NginX](http://hg.nginx.org/nginx/) to run.

edit /etc/nginx/sites-enabled/default
```sh
sudo nano /etc/nginx/sites-enabled/default
```
add to the end (don't forget to change: SERVER_IP_ADDRES/ SERVER_DOMAIN to your website. SUBDOMAIN_NAME to the subdomain (if you want). API_NAME to the api (whatever you want))
```sh
upstream demoup {
        server SERVER_IP_ADDRES/ SERVER_DOMAIN:8080;
        server SERVER_IP_ADDRES/ SERVER_DOMAIN:8081;
}

server {
        listen 80;
        server_name SUBDOMAIN_NAME.SERVER_IP_ADDRES/ SERVER_DOMAIN;

        root /var/www/html/reactapp/build;

        location / {
                try_files $uri /index.html;
        }
}


server {
        listen 80;
        server_name API_NAME.SERVER_IP_ADDRES/ SERVER_DOMAIN;

        location / {
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;

                proxy_pass http://API_NAME;
        }
}
```

save & restart nginx
```sh
sudo systemctl restart nginx
```

### Run

requires [pm2](https://github.com/Unitech/pm2/blob/master/README.md)

```sh
pm2 start /var/www/html/api/apps.json
```

### Stop

```sh
pm2 stop all
pm2 kill
```
