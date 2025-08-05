
#set variables and their default values,  only available during the image build process
ARG NODE_VERSION=22.18.0

#specify base image to use for new image 
FROM node:${NODE_VERSION}-alpine

#shell variables that can be used by your running application for configuration
# Use production node environment by default.
ENV NODE_ENV=production


#metadata that can later be used to search for and identify Docker image and container
LABEL name=myportfolio

#working directory in the image 
WORKDIR /usr/src/app

# Create user and group in one line
RUN addgroup -S app && adduser -S app -G app

#change ownership of working directory to user app
RUN chown -R app:app /usr/src/app

# Run the application as a non-root user.
USER app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev



# Copy the rest of the source files from local fs into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm", "start"]


