# Multistage Dockerfile for React application
# Set variables and their default values, only available during the image build process
ARG NODE_VERSION=22

# Development stage
FROM node:${NODE_VERSION}-alpine AS development

# Shell variables that can be used by your running application for configuration
ENV NODE_ENV=development

# Metadata that can later be used to search for and identify Docker image and container
LABEL name=myportfolio

# Working directory in the image 
WORKDIR /usr/src/app

# Create user and group in one line
RUN addgroup -S app && adduser -S app -G app

# Change ownership of working directory to user app
RUN chown -R app:app /usr/src/app

# Run the application as a non-root user.
USER app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

# Copy the rest of the source files from local fs into the image.
COPY --chown=app:app . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD ["npm", "start"]



# Build stage
FROM node:${NODE_VERSION}-alpine AS build

ENV NODE_ENV=production

WORKDIR /usr/src/app

# Create user and group in one line
RUN addgroup -S app && adduser -S app -G app

# Change ownership of working directory to user app
RUN chown -R app:app /usr/src/app

# Run as non-root user
USER app

# Install all dependencies (including dev dependencies needed for build)
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Copy source code
COPY --chown=app:app . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine AS production

LABEL name=myportfolio-prod



# Copy built app from build stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Create non-root user for nginx (optional security enhancement)
RUN addgroup -S nginx-app && adduser -S nginx-app -G nginx-app

# Change ownership of nginx html directory
RUN chown -R nginx-app:nginx-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]