FROM httpd:alpine3.15

USER root

ENV TZ=Europe/Madrid \
    LANGUAGE=es_ES \
    LANG=es_ES.UTF-8 \
    LC_ALL=es_ES.UTF-8

# *****************************************************************************
# Instalamos los paquetes minimos necesarios
# *****************************************************************************
RUN apk -U upgrade && \
    apk --no-cache add --update ca-certificates curl bash tzdata jq tar zip unzip wget && \
    ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone

ARG WORK_DIR=/usr/local/apache2/htdocs
WORKDIR ${WORK_DIR}
COPY ./target/dist ${WORK_DIR}/

EXPOSE 80

# Eliminamos los archivos innecesarios
RUN rm -rf /var/cache/apk/* /tmp/*
