FROM python:3.12-slim

# print() 출력이 버퍼링 없이 즉시 로그로 흘러가도록 설정
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .

# Cloud Run은 PORT 환경변수(기본 8080)로 트래픽 전달
CMD exec gunicorn --bind :$PORT --workers 1 --threads 4 --timeout 300 main:app
