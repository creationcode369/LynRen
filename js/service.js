       // Data for options (replace with your own data)
       const optionsData = {
        1: {
            title: 'Autonomous Agent Development',
            options: ['Workflow Automation', 'Self Adaptive Decision System'],
            content: [
                "In today's digital era, efficiency is the backbone of any successful business. At Morningside AI, we harness the power of Autonomous Agents to revolutionize your workflow processes. Our Workflow Automation solution goes beyond traditional task automation; it incorporates intelligent agents that can make decisions, adapt to varying circumstances, and consistently optimize operations. Through our deep understanding of AI and its potential, we design agents that can predictively automate tasks, reducing manual intervention and the chances for human error. Whether you're looking to streamline administrative processes, enhance data operations, or elevate customer interactions, our bespoke autonomous agents are built to integrate seamlessly into your environment",
                "In the ever-evolving landscape of business, static decision-making models no longer suffice. At Morningside AI, we're at the forefront of developing Self-Adaptive Decision Systems, a groundbreaking approach that empowers businesses to make intelligent decisions dynamically. These systems are not just reactive but proactively adjust to changing environments, learning from new data and evolving patterns.                Our self-adaptive solutions harness the full potential of autonomous agents, enabling them to make decisions based on real-time data, past experiences, and predictive analytics. This continuous loop of learning and adapting ensures that your business stays ahead of the curve, optimizing operations and strategizing for future scenarios."
            ]
        },
        2: {
            title: 'Chatbots Development',
            options: ['GPT Development', 'Secure Solutions', 'Knowledge Response', 'Model Tuning'],
            content: [
                "The conversational AI landscape has been revolutionized with the advent of models like GPT-3 and GPT-4. At Morningside AI, we harness the unmatched capabilities of these groundbreaking models to create state-of-the-art chatbots that deliver human-like interactions, rich contextual understanding, and seamless user experiences. Our expertise in GPT-3 and GPT-4 development places us at the forefront of chatbot innovation. By tapping into these models, we craft chatbots that are not just reactive but can also anticipate user needs, understand nuances, and offer solutions that feel genuinely intuitive. We are also pleased to announce the introduction of our OpenAI GPT development services. On the back of OpenAI's introduction of GPTs, Morningside AI is now developing GPTs for businesses around the globe.",
                "We understand that security is not just an afterthought—it's a foundational requirement. At Morningside AI, we prioritize the protection of your data and your users' interactions, ensuring we are inline with your security and compliance requirements. We craft chatbots that are robust against vulnerabilities and threats, without compromising on functionality or user experience. With cyber risks ever-looming, our approach to chatbot development is underpinned by rigorous security protocols. From data encryption to intrusion detection, we incorporate cutting-edge security measures that safeguard both the chatbot and its users.",
                "We all know that our data is vast and ever-evolving. Morningside AI can help you tap into your expansive information reservoir, allowing chatbots to provide accurate, up-to-date, and contextually relevant answers. We transcend traditional chatbot capabilities, moving beyond preset responses to offer insights drawn from a rich tapestry of data sources. Our chatbots, equipped with Knowledge Response, become dynamic information hubs. They sift through volumes of data, discerning context, intent, and nuance to deliver not just any answer, but the right answer." ,
                "A chatbot is only as effective as the underlying model that powers it. We recognize the value of precision, responsiveness, and accuracy. Our Model Tuning service dives deep into the intricacies of your chatbot's machine learning model, optimizing its parameters for peak performance and ensuring it aligns seamlessly with your specific use-case demands.       Model tuning is both an art and a science. By employing advanced algorithms and a meticulous iterative process, we refine the model, pushing its capabilities to the edge of perfection. The outcome? A chatbot that understands better, responds smarter, and engages more effectively."
            ]
        },
        3: {
            title: 'Website & App Development',
            options: ['Website Development', 'App Development'],
            content: [
                "Transform your ideas into dynamic mobile experiences with Lynren's custom app development. Our expert team crafts intuitive and powerful mobile apps tailored to your business needs, driving engagement and growth.",
                "Elevate your online presence with Lynren's exceptional website development services. We design and build captivating websites that reflect your brand and deliver seamless user experiences, empowering your business in the digital landscape"
            ]
        }
    };

    // Function to toggle options based on clicked service card
    function toggleOptions(serviceNumber) {
        const optionsContainer = document.getElementById('optionsContainer');
        const optionsTitle = document.getElementById('optionsTitle');
        const optionButtonsContainer = document.getElementById('optionButtons');
        const optionContent = document.getElementById('optionContent');

        // Show the big card
        optionsContainer.classList.remove('hidden');

        // Set options title and generate option buttons based on selected service
        optionsTitle.textContent = optionsData[serviceNumber].title;

        // Generate option buttons dynamically
        const options = optionsData[serviceNumber].options;
        optionButtonsContainer.innerHTML = '';
        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('text-lg', 'font-bold');
            button.onclick = () => showOption(serviceNumber, index);
            optionButtonsContainer.appendChild(button);
        });

        // Show initial content (first option) for the selected service
        showOption(serviceNumber, 0); // Display the first option by default
    }

    // Function to show specific option content
    function showOption(serviceNumber, optionIndex) {
        const optionContent = document.getElementById('optionContent');
        const content = optionsData[serviceNumber].content[optionIndex];

        // Display the content of the selected option
        optionContent.innerHTML = `<p>${content}</p>`;
    }

    // Initialize the big card with the options for Service 1 when the page loads
    window.onload = function() {
        toggleOptions(1); // Display options for Service 1 initially
    };