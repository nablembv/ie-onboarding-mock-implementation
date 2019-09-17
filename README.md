# Welcome to the TC training mock environment!

Your goal will be to get into our clients shoes and get a full basic BV implementation up and running.

## Before you start

1. Install NVM. Open your command prompt and:
   1. Run the following command: **curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash**
   2. Make sure the installation worked with: **nvm --version**
   3. Install node with: **nvm install node**
   4. Set the current node version to the one you just installed: **nvm use node**

2. Set up a Github account to use for BV related projects (use your BV email address): https://github.com/

3. Fork the git repository to your profile: https://github.com/adrianhintze/ie-onboarding-mock-implementation

4. Clone the forked repository to your local machine: https://help.github.com/en/articles/cloning-a-repository

5. Install project dependencies by running the following command in the repository folder: **npm install**

6. Run the server by using the command: **npm start**

7. You can now access the site by visiting the following address: http://localhost:8080


## The Scenario

You take on the role of the in-house developer for *Del Vento's Doodles*.
The business team just acquired a Bazaarvoice Pro package and wants to have R&R integrated on the site ASAP.

You had a call with Bazaarvoice's TC. He told you to implement:

* Inline ratings on the PLP
* Rating Summary and Reviews on the PDPs
* Transactional BV Pixel on the Order Confirmation Page
* DCC on the PDPs
* Set up email engagement over BV Pixel

He also sent you this link and said it may come in handy: https://knowledge.bazaarvoice.com/wp-content/conversations/en_US/implementation.html

Finally he gave you some basic information to interact with the BV backend:

* client name: test-anchovy
* locale: en_GB


## The Task

Your goal is to complete a full hosted BV integration on the mockup environment. Make the necessary adjustments to any files found in the **public/** folder and change any configuration needed on the Config Hub/Workbench.

Notes:
* You will need to make changes that a client will not be able to do by themselves in our backend, but that they'll request to you during an implementation.
* Make up the product information (including IDs) for all product pages to use with DCC.
* Create one extra product and add it to the catalog by using the XML feed instead of DCC. ALL products will need to exist and be active.
* Make two products be part of the same Product Family. Both products should have reviews. **Bonus** if one of the products is the one added using the XML Feed.
* Emails should use In-Mail template for PIE and MPS should always be used for the submission form. As mentioned, make emails be triggered (to your email address) using the BV Pixel.
* Try to adjust the styling configuration a bit to match the site better.
* Add one custom Secondary Rating and one custom Question to the submission form.


After the implementation is completed we will have a session discussing the results, the work done, etc. Make sure to take notes along the way as necessary. Feel also free to ask any questions you like to anyone who is available, this is not an exam, the goal is to learn.

Good luck!
