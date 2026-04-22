import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { sampleDay1 } from '@/lib/sample-day-1';

/**
 * Today view — V0-1.
 *
 * Renders a hardcoded Day 1 task list. No persistence, no completion state,
 * no day control. The goal of this slice is to prove the scaffold boots and
 * the content shape is readable on a phone.
 *
 * Next slice (V0-2) moves the data to /content/tasks/y1-spring.json.
 */
export default function TodayScreen() {
  const plan = sampleDay1;

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.dayLabel}>
          Spring {plan.day}, Year {plan.year}
        </Text>
        {plan.expectedOutcome ? (
          <Text style={styles.outcome}>{plan.expectedOutcome}</Text>
        ) : null}
      </View>

      <View style={styles.taskList}>
        {plan.tasks.map((task, index) => (
          <View key={task.id} style={styles.taskRow}>
            <View style={styles.taskBullet}>
              <Text style={styles.taskBulletText}>{index + 1}</Text>
            </View>
            <View style={styles.taskBody}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              {task.detail ? (
                <Text style={styles.taskDetail}>{task.detail}</Text>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#0B1220',
  },
  container: {
    padding: 20,
    paddingBottom: 48,
  },
  header: {
    marginBottom: 24,
  },
  dayLabel: {
    color: '#E6EDF7',
    fontSize: 22,
    fontWeight: '600',
  },
  outcome: {
    marginTop: 6,
    color: '#8FA4C4',
    fontSize: 14,
  },
  taskList: {
    gap: 12,
  },
  taskRow: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#131C2E',
    padding: 14,
    borderRadius: 10,
  },
  taskBullet: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#23324F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  taskBulletText: {
    color: '#E6EDF7',
    fontSize: 13,
    fontWeight: '600',
  },
  taskBody: {
    flex: 1,
  },
  taskTitle: {
    color: '#E6EDF7',
    fontSize: 15,
    lineHeight: 21,
  },
  taskDetail: {
    marginTop: 4,
    color: '#8FA4C4',
    fontSize: 13,
    lineHeight: 19,
  },
});
