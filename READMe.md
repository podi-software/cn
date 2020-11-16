## Task
### How to run
1. Please set the required port in the `.env` file.
2. Type `make run`.
3. It will expose the port mentioned in `.env` file.
4. the URL is `http://localhost:<port>/api/direction/<heading>/<target>`

    - eg: for port `9898`
        ```sh
        curl http://localhost:9898/api/direction/310/75
        ```
 ### How to test
 1. Type `make test`.
 2. It will run all the tests.

 ### How to develop
 1. Type `make develop`.
 2. It will open a `bash` shell into the container and mount the local directory.

 ### Thank you very much for the opportunity.
 
