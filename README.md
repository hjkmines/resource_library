# Resource Library
> Empowering Hanawilo community members through a centralized resource hub.

## Table of Contents
- [General Info](#general-info)
- [Architecture Diagram](#architecture-diagram)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Code Examples](#code-examples)
- [Contact](#contact)

## General Info
Resource Library is a powerful platform that enables registered community members to freely share links to various resources such as videos, events, articles, tools, and memes. This centralized and accessible website is an organized and user-friendly alternative to unstructured platforms like Slack.

The Resource Library fosters a vibrant community of learners and enthusiasts, simplifying the process of finding and sharing resources. This hub is an essential tool for knowledge sharing and collaboration.

## Architecture Diagram
The simplified architecture of the Resource Library project:

![Resource Library_stack_diagram](https://github.com/hjkmines/resource_library/assets/68170283/eaf68083-5804-4f09-961e-aaaa40bf2d45)

## Technologies
Technologies used in this project include:

### Backend
- Node.js - version 18.15.0
- Express - version 4.18.2
- Bcryptjs - version 2.4.3
- Body-parser - version 1.20.1
- Cors - version 2.8.5
- Dotenv - version 16.0.3
- Express-async-handler - version 1.2.0
- Jsonwebtoken - version 9.0.0
- Mongodb - version 5.0.1
- Mongoose - version 6.9.0

### Frontend
- JavaScript (ES6)
- HTML5
- CSS3
- React.js - version 18.2.0
- React-DOM - version 18.2.0
- Next.js - version 13.1.6
- Formik - version 2.2.9
- React-Router-DOM - version 6.8.0
- React-scripts - version 5.0.1
- React-icons - version 4.7.1
- React-player - version 2.11.2
- React-slick - version 0.29.0
- Framer-motion - version 9.0.1
- Chakra-UI/react - version 2.4.9
- Chakra-UI/icons - version 2.0.17

### Development Tools
- Concurrently - version 8.0.1
- Nodemon - version 2.0.22 (Backend only)
- Eslint - version 8.34.0 (Frontend only)

## Setup
To set up and run the Resource Library project locally:

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/hjkmines/resource_library.git
   ```

2. Install frontend dependencies:

   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

4. Start development servers:

   ```bash
   cd ../client
   npm run dev
   ```

   This command uses `concurrently` to run the frontend and backend servers concurrently. It will automatically start the Next.js development server for the client and navigate to the `backend` folder to run the backend server.

5. Visit `http://localhost:3000` in your web browser. 

   The application will automatically reload if you make
any changes to the code. Both the frontend and backend servers need to be running concurrently for the application to work correctly.

## Code Examples

### Database Connection

The application connects to the MongoDB database using Mongoose as follows:

```javascript
const mongoose = require('mongoose'); 

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

module.exports = connectDB;
```

### Handling a GET Request

The `MediaController` handles a GET request to fetch all media items like this:

```javascript
const getMedias = async (req, res, next) => {
    try {
        const media = await Media.find();
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({message: 'Found media', media});
    } catch (err){
        next(err);
    }
}
```

### React Component

This is an example of a React component from our application. This component, `Videos`, displays a grid of video cards fetched from our database. Each card includes a video player that embeds a video from a link, along with some additional information about the video.

```jsx
  const renderCards = () => {
    if (!Array.isArray(renderedVideos)) {
      return null;
    }

    return renderedVideos.map((video, index) => (
      <Card
        key={index}
        my={5}
        maxW={{
          base: '250px',
          md: '325px',
          lg: '400px',
        }}
        rounded={'sm'}
        border={'1px'}
        borderRadius="md"
        borderColor="black"
        boxShadow={useColorModeValue(
          '6px 6px 0 black',
          '6px 6px 0 cyan'
        )}
      >
        <CardBody>
          <Container maxWidth="400px">
            <AspectRatio ratio={4 / 3}>
              <Center>
                <ReactPlayer
                  url={video.resourceLink}
                  width="100%"
                  height="100%"
                  controls={false}
                  volume={0}
                  muted={true}
                  playing={false}
                  fallback="Loading..."
                />
              </Center>
            </AspectRatio>
            <Stack mt="6" spacing="3">
              <Heading size={{ base: 'sm', md: 'sm', lg: 'md', xl: 'md' }}>
                {video.title}
              </Heading>
            </Stack>
          </Container>
        </CardBody>
      </Card>
    ));
  };

```

## Features
- Full stack web application utilizing the MERN stack: MongoDB, Express.js, React, and Node.js.
- User authentication and authorization implemented with JWT and bcrypt.
- Users can create, log in, and manage their accounts within the application.
- Users can share various types of resources, which appear on the corresponding page.
- The home page features the latest resources from each section.
- Dark mode available for an alternative user interface aesthetic.

## Contact
Created by [Kristina Degtiareva,](https://www.linkedin.com/in/krisdegtyareva/) [Mai Vang,](https://www.linkedin.com/in/mai-vang-software-engineer/) [Thomas Bell,](https://www.linkedin.com/in/thomasjbell065/) [Jerry Victor,](https://www.linkedin.com/in/jerry-victor-/) [Maria Delacruz,](https://www.linkedin.com/in/dlcrz-maria/) [Tyson Mills](https://www.linkedin.com/in/tmillsdev/) 

Feel free to contact us with any questions!



