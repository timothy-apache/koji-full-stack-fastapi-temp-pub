import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react"
import { Link as RouterLink, createFileRoute } from "@tanstack/react-router"
import { FiArrowRight, FiCheckCircle, FiDatabase, FiLock, FiServer, FiUsers } from "react-icons/fi"

import Logo from "/assets/images/fastapi-logo.svg"

export const Route = createFileRoute("/")({
  component: LandingPage,
})

function LandingPage() {
  return (
    <Box>
      {/* Header */}
      <Box as="header" py={4} px={8} borderBottom="1px" borderColor="gray.100">
        <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
          <Flex align="center">
            <Image src={Logo} alt="FastAPI logo" h="40px" mr={2} />
            <Text fontWeight="bold" fontSize="xl">FastAPI Fullstack</Text>
          </Flex>
          <Flex align="center" gap={4}>
            <RouterLink to="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </RouterLink>
            <RouterLink to="/signup">
              <Button colorScheme="blue" size="sm">Sign Up</Button>
            </RouterLink>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box bg="blue.50" pt={20} pb={32}>
        <Container maxW="6xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={12} align="center">
            <VStack align="flex-start" spacing={6} flex={1}>
              <Heading as="h1" size="2xl" fontWeight="bold">
                Modern Full-Stack Application with FastAPI and React
              </Heading>
              <Text fontSize="xl" color="gray.600">
                A production-ready template built with FastAPI, React, TypeScript, and SQLAlchemy. 
                User management, authentication, and API integration out of the box.
              </Text>
              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
                <RouterLink to="/signup">
                  <Button size="lg" colorScheme="blue" rightIcon={<FiArrowRight />}>
                    Get Started
                  </Button>
                </RouterLink>
                <RouterLink to="/demo">
                  <Button size="lg" variant="outline">
                    Try Demo
                  </Button>
                </RouterLink>
              </Stack>
            </VStack>
            <Box 
              flex={1} 
              boxShadow="xl" 
              borderRadius="xl" 
              overflow="hidden"
              bg="white"
              p={4}
              border="1px"
              borderColor="gray.100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                alt="Dashboard Preview" 
                borderRadius="lg" 
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="6xl">
          <VStack spacing={16}>
            <VStack spacing={4} textAlign="center">
              <Heading as="h2" size="xl">Powerful Features</Heading>
              <Text color="gray.600" maxW="2xl">
                This template offers a complete foundation for building modern web applications with batteries included.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              <FeatureCard 
                icon={<FiUsers />}
                title="User Management"
                description="Complete user authentication system with signup, login, password recovery, and profile management."
              />
              <FeatureCard 
                icon={<FiLock />}
                title="Authentication"
                description="JWT-based authentication with OAuth2 compatibility and route protection."
              />
              <FeatureCard 
                icon={<FiDatabase />}
                title="Database Integration"
                description="SQLAlchemy ORM with PostgreSQL support and migrations using Alembic."
              />
              <FeatureCard 
                icon={<FiServer />}
                title="API Backend"
                description="FastAPI-based RESTful API with OpenAPI documentation, dependency injection, and validation."
              />
              <FeatureCard 
                title="React Frontend"
                icon={<Box as="span" fontWeight="bold">⚛️</Box>}
                description="Modern React application using TypeScript, React Router, and React Query for data fetching."
              />
              <FeatureCard 
                title="Responsive UI"
                icon={<Box as="span" fontWeight="bold">📱</Box>}
                description="Fully responsive UI built with Chakra UI components that look great on any device."
              />
            </SimpleGrid>
            
            <VStack spacing={6} pt={8}>
              <Heading as="h3" size="lg">Why Choose Our Template?</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} maxW="4xl">
                <FeatureItem text="Production ready configuration" />
                <FeatureItem text="Dockerized development environment" />
                <FeatureItem text="Type-safe API clients" />
                <FeatureItem text="Comprehensive authentication" />
                <FeatureItem text="Clean architecture" />
                <FeatureItem text="Best practices built-in" />
                <FeatureItem text="Scalable infrastructure" />
                <FeatureItem text="Automatic API documentation" />
              </SimpleGrid>
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.700" py={16} color="white">
        <Container maxW="4xl" textAlign="center">
          <VStack spacing={8}>
            <Heading size="xl">Ready to build your next project?</Heading>
            <Text fontSize="lg">
              Get started with our template and focus on building your features, not infrastructure.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <RouterLink to="/signup">
                <Button size="lg" colorScheme="blue" bg="white" color="blue.700" _hover={{ bg: 'gray.100' }}>
                  Create an Account
                </Button>
              </RouterLink>
              <RouterLink to="/login">
                <Button size="lg" variant="outline" colorScheme="whiteAlpha">
                  Sign In
                </Button>
              </RouterLink>
            </Stack>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" py={16} bg="gray.50" borderTop="1px" borderColor="gray.200">
        <Container maxW="6xl">
          <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="space-between">
            <VStack align="flex-start" spacing={4}>
              <Flex align="center">
                <Image src={Logo} alt="FastAPI logo" h="30px" mr={2} />
                <Text fontWeight="bold">FastAPI Fullstack</Text>
              </Flex>
              <Text color="gray.600">
                A modern full-stack application template
              </Text>
              <Text color="gray.500" fontSize="sm">
                © {new Date().getFullYear()} FastAPI Fullstack. All rights reserved.
              </Text>
            </VStack>
            
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: 8, sm: 12 }}>
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold">Product</Text>
                <Link>Features</Link>
                <Link>Pricing</Link>
                <Link>Documentation</Link>
              </VStack>
              
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold">Resources</Text>
                <Link>Blog</Link>
                <Link>Guides</Link>
                <Link>Support</Link>
              </VStack>
              
              <VStack align="flex-start" spacing={3}>
                <Text fontWeight="bold">Company</Text>
                <Link>About</Link>
                <Link>Careers</Link>
                <Link>Contact</Link>
              </VStack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <VStack 
      spacing={4} 
      p={6} 
      bg="white" 
      boxShadow="sm" 
      borderRadius="lg"
      border="1px"
      borderColor="gray.200"
      align="flex-start"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'md' }}
    >
      <Flex 
        align="center" 
        justify="center" 
        bg="blue.50" 
        color="blue.600" 
        p={3} 
        borderRadius="md"
        fontSize="xl"
      >
        {icon}
      </Flex>
      <Heading as="h3" size="md">{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <Flex align="center">
      <Box as={FiCheckCircle} mr={2} color="green.500" />
      <Text>{text}</Text>
    </Flex>
  )
}

function Link({ children }: { children: React.ReactNode }) {
  return (
    <Text color="gray.600" cursor="pointer" _hover={{ color: 'blue.500' }}>
      {children}
    </Text>
  )
}

export default LandingPage
