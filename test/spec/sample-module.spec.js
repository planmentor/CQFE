describe('snqs.SampleModule -->', function() {

    it('Global Namespace object \'snqs\' exists', function() {
        expect(snqs).toBeDefined();
    });

    it('SampleModule object exists', function() {
        expect(snqs.SampleModule).toBeDefined();
    });

    describe('Public API -->', function () {

        it('exposes a method called init()', function () {
            expect(snqs.SampleModule.init()).toBeDefined();
        });
    });

    describe('Public API usage -->', function () {

        describe('Method init() -->', function () {

            it('calls a private method that returns null', function () {
                var property = snqs.SampleModule.init();

                expect(property).toBeNull();
            });
        });
    });
});
