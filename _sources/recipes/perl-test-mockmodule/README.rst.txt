.. title:: Package Recipe 'perl-test-mockmodule'
.. highlight: bash


perl-test-mockmodule
====================

.. conda:recipe:: perl-test-mockmodule
   :replaces_section_title:

   Override subroutines in a module for unit testing

   :homepage: https://github.com/geofffranks/test-mockmodule
   :license: gpl_3
   :recipe: /`perl-test-mockmodule <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-mockmodule>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-mockmodule/meta.yaml>`_

   


.. conda:package:: perl-test-mockmodule

   |downloads_perl-test-mockmodule| |docker_perl-test-mockmodule|

   :versions: 0.13

   :depends: :conda:package:`perl` 5.22.0* :conda:package:`perl-carp`  :conda:package:`perl-super`  

   :required~by: |required_by_perl-test-mockmodule|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-mockmodule

   and update with::

      conda update perl-test-mockmodule

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-mockmodule


.. |required_by_perl-test-mockmodule| conda:required_by:: perl-test-mockmodule
.. |downloads_perl-test-mockmodule| image:: https://img.shields.io/conda/dn/bioconda/perl-test-mockmodule.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-mockmodule| image:: https://quay.io/repository/biocontainers/perl-test-mockmodule/status
   :target: https://quay.io/repository/biocontainers/perl-test-mockmodule







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-mockmodule/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-mockmodule/README.html

