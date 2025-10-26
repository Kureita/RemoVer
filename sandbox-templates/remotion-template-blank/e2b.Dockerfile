# You can use most Debian-based base images
FROM node:21-slim

# Install curl
RUN apt-get update && apt-get install -y git curl && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# Install dependencies and customize sandbox
WORKDIR /home/user/remotion-template

RUN git clone https://github.com/remotion-dev/template-empty .

# Move the Remotion Template to the home directory and remove the remotion-template directory
RUN mv /home/user/remotion-template/* /home/user/ && rm -rf /home/user/remotion-template

WORKDIR /home/user/

RUN npm install