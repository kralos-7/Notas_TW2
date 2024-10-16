docker run --rm -dP -v D:\htmls\index1.html:/usr/share/nginx/html/index.html --network mynet nginx
docker run --rm -dP -v D:\htmls\index2.html:/usr/share/nginx/html/index.html --network mynet nginx
docker run --rm -dP -v D:\htmls\index3.html:/usr/share/nginx/html/index.html --network mynet nginx

docker run --rm -dP -v D:\htmls\default.conf:/etc/nginx/conf.d/default.conf --network mynet nginx