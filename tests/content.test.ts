import assert from 'node:assert/strict';
import test from 'node:test';
import { projects, learningHighlights } from '../src/data/projects.ts';

test('portfolio entries have unique IDs, safe URLs and explicit AI project attribution', () => {
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
  for (const project of projects) {
    assert.ok(project.name.trim() && project.description.trim() && project.fullDescription.trim());
    if (project.githubUrl) {
      const source = new URL(project.githubUrl);
      assert.equal(source.protocol, 'https:');
      assert.equal(source.hostname, 'github.com');
    }
    if (project.liveUrl) assert.equal(new URL(project.liveUrl).protocol, 'https:');
    if (project.featured) {
      assert.ok(project.contribution, `${project.id} needs a contribution label`);
      assert.ok(project.githubUrl, `${project.id} needs a source reference`);
    }
    if (project.private) {
      assert.ok(project.featured, 'Private projects must use the card that labels repository access');
      assert.equal(project.liveUrl, undefined, 'Private projects must not expose a demo by default');
    }
  }
  for (const highlight of learningHighlights) {
    assert.equal(new URL(highlight.href).protocol, 'https:');
  }
});
