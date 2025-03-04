import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { Link as RouterLink, createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/demo")({
  component: Demo,
})

function Demo() {
  return (
    <Container maxW="4xl" py={10}>
      <Flex direction="column" alignItems="center" justifyContent="center" gap={6}>
        <Heading as="h1" size="xl">
          Demo Page
        </Heading>
        <Text fontSize="lg">
          This is a blank demo page to showcase the application features.
        </Text>
        <Box mt={4}>
          <RouterLink to="/" className="main-link">
            Back to Home
          </RouterLink>
        </Box>
      </Flex>
    </Container>
  )
}

export default Demo
