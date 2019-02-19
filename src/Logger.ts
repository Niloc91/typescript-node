import {createLogger, format, transports} from "winston";

const baseLogFormat = format.combine(
    format.timestamp({
        format: 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ'
    }),
    format.errors({stack: true}),
    format.splat(),
);

const localLogFormat = format.combine(
    baseLogFormat,
    format.simple()
    );

const serverLogFormat = format.combine(
    baseLogFormat,
    format.json()
);

//We have plaintext logs locally, but JSON logs in k8s.
const nodeEnv = process.env.NODE_ENV;
const activeLogFormat = nodeEnv !== "test" && nodeEnv !== "local" ? serverLogFormat : localLogFormat;

const logger = createLogger({
    level: "info",
    format: activeLogFormat,
    defaultMeta: {service: 'appraisal-service'},
    transports: [
        new transports.Console()
    ]
});

export default logger;