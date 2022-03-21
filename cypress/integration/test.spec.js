describe('Overall tests', () => {
    // For desktop view
    context('720p resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport(1280, 720)
        })
        describe('When you visit home', () => {
            it('Should visit home page', () => {
                cy.visit('/')
            });
            describe('when you click on color select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-color]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,1100)
                      })
                    
                })
            })

            describe('when you click on power select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-power]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,1600)
                      })
                    
                })
            })
            
            describe('when you click on option package select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-package]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,2600)
                      })
                    
                })
            })

            describe('when you click on wrap drive select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-wrap-drive]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,3100)
                    })  
                })
            })

            describe('When you visit', () => {
                it('It should show color amount in summary', () => {
                    cy.get('[data-cy=color]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,100])
                      })
                    
                })
            })

            describe('When you visit', () => {
                it('It should show power amount in summary', () => {
                    cy.get('[data-cy=power]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,200,500])
                      })
                    
                })
            })

            describe('When you visit', () => {
                it('It should show wrap drive amount in summary', () => {
                    cy.get('[data-cy=wrap_drive]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,1000])
                      })
                    
                })
            })

            describe('When you visit', () => {
                it('It should show option package amount in summary', () => {
                    cy.get('[data-cy=option_package]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,100,500])
                      })
                    
                })
            })

            describe('when you click on option package select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-package]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })

            describe('when you click on color select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-color]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })

            describe('when you click on power select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-power]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })

            describe('when you click on wrap drive select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-wrap-drive]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })
        })
    })
    context('iphone-x resolution', () => {
        beforeEach(() => {
            /**
             * Run these tests as if in a desktop browser,
             * with a 720p monitor
             */
            cy.viewport('iphone-x')
        })
        describe('When you visit home', () => {
            it('Should visit home page', () => {
                cy.visit('/')
            });
            describe('when you click on color select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-color]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,1100)
                      })
                    
                })
            })

            describe('when you click on power select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-power]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,1600)
                      })
                    
                })
            })
            
            describe('when you click on option package select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-package]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,2600)
                      })
                    
                })
            })

            describe('when you click on wrap drive select button', () => {
                it('It should add amount to summary', () => {
                    cy.get('[data-cy=btn-wrap-drive]').click({ multiple: true }).should('have.class', 'shadow-green')
                    cy.get('[data-cy=total]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.within(1000,3100)
                    })  
                })
            })

            describe('When you visit', () => {
                it('It should show color amount in summary', () => {
                    cy.get('[data-cy=color]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,100])
                      })
                    
                })
            })

            describe('When you visit', () => {
                it('It should show power amount in summary', () => {
                    cy.get('[data-cy=power]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,200,500])
                      })
                    
                })
            })

            describe('When you visit', () => {
                it('It should show wrap drive amount in summary', () => {
                    cy.get('[data-cy=wrap_drive]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,1000])
                      })
                    
                })
            })

            describe('When you visit', () => {
                it('It should show option package amount in summary', () => {
                    cy.get('[data-cy=option_package]')
                    .invoke('text')
                    .then(text => +text.replace('€', '').trim())
                    .should(($p) => {
                        expect($p).to.be.oneOf([0,100,500])
                      })
                    
                })
            })
            
            describe('when you click on option package select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-package]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })

            describe('when you click on color select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-color]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })

            describe('when you click on power select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-power]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })

            describe('when you click on wrap drive select button', () => {
                it('It should apply the shadow class', () => {
                    cy.get('[data-cy=btn-wrap-drive]').click({ multiple: true }).should('have.class', 'shadow-green')
                })
            })
        })
    })
})