FROM python:3.12.3-bookworm

RUN apt-get update \
	&& apt-get upgrade -y \
	&& apt-get install -y \
	bash \
	iproute2 \
	netcat-traditional \
	tini \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY requirements.txt .
COPY ./db_init.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/db_init.sh
RUN pip install -r requirements.txt

# per intercettare i segnali + script per creare il file .pgpass
ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/db_init.sh"]

CMD ["python", "-m", "gunicorn", "--bind", ":8000", "transcendence.asgi:application", "-k", "uvicorn.workers.UvicornWorker"]