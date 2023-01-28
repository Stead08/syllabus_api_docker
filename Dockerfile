FROM --platform=linux/x86_64 debian:stable-slim
ENV APP_HOME=/app
ENV PORT=8080

WORKDIR /app

RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

EXPOSE ${PORT}
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"