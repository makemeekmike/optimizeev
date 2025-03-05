export class AlertSystem {
  constructor(logger) {
    this.logger = logger;
    this.alertRules = new Map();
    this.initializeDefaultRules();
  }

  initializeDefaultRules() {
    // Add default alert rules
    this.alertRules.set('highLoad', {
      condition: (metrics) => metrics.load > 80,
      message: 'High system load detected',
      severity: 'warning'
    });

    this.alertRules.set('errorRate', {
      condition: (metrics) => metrics.errorRate > 5,
      message: 'High error rate detected',
      severity: 'critical'
    });
  }

  async checkAlerts(data) {
    const alerts = [];

    try {
      for (const [ruleName, rule] of this.alertRules) {
        if (rule.condition(data)) {
          const alert = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            rule: ruleName,
            message: rule.message,
            severity: rule.severity,
            data
          };

          alerts.push(alert);
          this.logger.info('Alert generated:', alert);
        }
      }
    } catch (error) {
      this.logger.error('Error checking alerts:', error);
    }

    return alerts;
  }

  addRule(name, condition, message, severity) {
    this.alertRules.set(name, { condition, message, severity });
  }

  removeRule(name) {
    this.alertRules.delete(name);
  }
}