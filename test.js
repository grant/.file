import test from 'ava';
import dotf from '.';



// Creates
test('write', async t => {
  // overwrite data
  let dotglobal = dotf('~', 'myrc1'); // Global (~)
  let dotlocal = dotf(__dirname, 'myignore1'); // Local (./)
  var writeGlobal = await dotglobal.write({a: 1});
  var writeLocal = await dotlocal.write({a: 1});
  t.pass();
  await dotglobal.delete();
  await dotlocal.delete();
});
test('exists', async t => {
  let dotglobal = dotf('~', 'myrc2'); // Global (~)
  let dotlocal = dotf(__dirname, 'myignore2'); // Local (./)
  await dotglobal.write({a: 1});
  await dotlocal.write({a: 1});
  let existsGlobal = await dotglobal.exists();
  let existsLocal = await dotlocal.exists();
  t.pass();
  await dotglobal.delete();
  await dotlocal.delete();
});
test('read', async t => {
  let dotglobal = dotf('~', 'myrc3'); // Global (~)
  let dotlocal = dotf(__dirname, 'myignore3'); // Local (./)
  await dotglobal.write({a: 1});
  await dotlocal.write({a: 1});
  var readGlobal = await dotglobal.read();
  var readLocal = await dotlocal.read();
  t.pass();
  await dotglobal.delete();
  await dotlocal.delete();
});
test('delete', async t => {
  let dotglobal = dotf('~', 'myrc4'); // Global (~)
  let dotlocal = dotf(__dirname, 'myignore4'); // Local (./)
  dotglobal.write({a: 1}).then(() => {
    dotglobal.delete().then(() => {
      t.pass();
    });
  });
  dotlocal.write({a: 1}).then(() => {
    dotlocal.delete().then(() => {
      t.pass();
    });
  });
});
