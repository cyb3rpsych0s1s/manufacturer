import * as winston from 'winston'

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.Console({ level: 'debug' }),
  ]
})

const format = message => typeof message === 'object' ? JSON.stringify(message, null, 2) : message

const debug = message => { logger.log('debug', format(message)) }
const info = message => { logger.log('info', format(message)) }
const warn = message => { logger.log('warn', format(message)) }

export {
  debug,
  info,
  warn,
}
