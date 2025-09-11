const assert = require('assert');
const ag = require('../../lib');
const agens = require('../../lib/agens.js');
const g = require('../../lib/graph.js');

describe('VertexUnitTest suite', function () {

    const vertex = agens.parse('v[7.9]{"s": "", "i": 0, "b": false, "a": [], "o": {}}', {startRule: '_Vertex'});
    const koreanVertex = agens.parse('한국어[11.1]{"s": "", "i": 0, "b": false, "a": [], "o": {}}', {startRule: '_Vertex'});
    const chineseVertex = agens.parse('中文[11.2]{"s": "", "i": 0, "b": false, "a": [], "o": {}}', {startRule: '_Vertex'});
    const hiraganaVertex = agens.parse('ひらがな[11.3]{"s": "", "i": 0, "b": false, "a": [], "o": {}}', {startRule: '_Vertex'});
    const katakanaVertex = agens.parse('カタカナ[11.4]{"s": "", "i": 0, "b": false, "a": [], "o": {}}', {startRule: '_Vertex'});
    const arabicVertex = agens.parse('العربية[11.5]{"s": "", "i": 0, "b": false, "a": [], "o": {}}', {startRule: '_Vertex'});

    it('Test Label', function (done) {
        assert.strictEqual(vertex.label, 'v');
        done();
    });

    it('Test Vertex ID', function (done) {
        assert.deepStrictEqual(vertex.id, new g.GraphId(7, 9));
        done();
    });

    it('Test Vetex ID (for Korean characters label node)', function (done) {
        assert.deepStrictEqual(koreanVertex.id, new g.GraphId(11, 1));
        done();
    })

    it('Test Vetex ID (for Chinese characters label node)', function (done) {
        assert.deepStrictEqual(chineseVertex.id, new g.GraphId(11, 2));
        done();
    })

    it('Test Vetex ID (for Hiragana characters label node)', function (done) {
        assert.deepStrictEqual(hiraganaVertex.id, new g.GraphId(11, 3));
        done();
    })

    it('Test Vetex ID (for Katakana characters label node)', function (done) {
        assert.deepStrictEqual(katakanaVertex.id, new g.GraphId(11, 4));
        done();
    })

    it('Test Vetex ID (for Arabic characters label node)', function (done) {
        assert.deepStrictEqual(arabicVertex.id, new g.GraphId(11, 5));
        done();
    })

    it('Test Vetex ID (for Arabic characters label node)', function (done) {
        assert.deepStrictEqual(arabicVertex.id, new g.GraphId(11, 5));
        done();
    })

    it('Test Properties', function (done) {
        assert.strictEqual(vertex.props.s, '');
        assert.strictEqual(vertex.props.i, 0);
        assert.strictEqual(vertex.props.b, false);
        assert.deepStrictEqual(vertex.props.a, []);
        assert.deepStrictEqual(vertex.props.o, {});
        done();
    });

    it('Test Equality', function (done) {
        assert.strictEqual(vertex, vertex);
        done();
    });
});
