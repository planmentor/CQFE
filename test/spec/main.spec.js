describe('snqs.Main -->', function() {

    it('Global Namespace object \'snqs\' exists', function() {
        expect(snqs).toBeDefined();
    });

    it('Main object exists', function() {
        expect(snqs.Main).toBeDefined();
    });

    describe('Public API -->', function () {

        it('exposes a method called init()', function () {
            expect(snqs.Main.init()).toBeDefined();
        });
    });

    describe('Public API usage -->', function () {

        describe('Method init() -->', function () {

            it('calls a private method that returns null', function () {
                var property = snqs.Main.init();

                expect(property).toBeNull();
            });
        });
    });
});
