import {
	Button,
	Flex,
	Image,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "./Form";

const Signup = ({ isOpen, onClose, setChangeValue }) => {
	const initState = {
		fullname: "",
		email: "",
		password: "",
	};
	const [type, setType] = useState("user");
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form, type);
	};
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<form onSubmit={handleSubmit}>
					<ModalHeader>Signup</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Button
							onClick={() => {
								setChangeValue(false);
							}}
						>
							Login
						</Button>
						<Tabs isFitted variant="enclosed">
							<TabList mb="1em">
								<Tab
									onClick={() => {
										setType("user");
									}}
								>
									Customer
								</Tab>
								<Tab
									onClick={() => {
										setType("seller");
									}}
								>
									Seller
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<Form {...form} onClose={onClose} handleInput={handleInput} />
								</TabPanel>
								<TabPanel>
									<Form {...form} onClose={onClose} handleInput={handleInput} />
								</TabPanel>
							</TabPanels>
						</Tabs>
						<Flex justifyContent={"space-around"}>
							<Link>
								<Image src="https://img.shields.io/badge/Google-4285F4?style=for-the-badge&logo=google&logoColor=white" />
							</Link>
							<Link>
								<Image src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white" />
							</Link>
						</Flex>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost" type="submit">
							Signup
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	);
};

export default Signup;
