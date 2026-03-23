FROM quay.io/nyulibraries/nginx:1.29.5-0

# Custom config files
COPY --chown=nginx:nginx config/default.conf /etc/nginx/conf.d/default.conf
COPY --chown=nginx:nginx docker-entrypoint.sh .

USER root
RUN chown -R nginx:nginx /etc/nginx/conf.d/
USER nginx

EXPOSE 8080

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]