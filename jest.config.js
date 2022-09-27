/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        "@code/(.*)": [
            "<rootDir>/src/$1"
        ]
    },
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
