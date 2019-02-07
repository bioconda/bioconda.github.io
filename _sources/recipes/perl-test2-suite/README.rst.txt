.. title:: Package Recipe 'perl-test2-suite'
.. highlight: bash


perl-test2-suite
================

.. conda:recipe:: perl-test2-suite
   :replaces_section_title:

   Distribution with a rich set of tools built upon the Test2 framework.

   :homepage: http://metacpan.org/pod/Test2::Suite
   :license: perl_5
   :recipe: /`perl-test2-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2-suite/meta.yaml>`_

   


.. conda:package:: perl-test2-suite

   |downloads_perl-test2-suite| |docker_perl-test2-suite|

   :versions: 0.000117, 0.000116, 0.000115, 0.000061

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-data-dumper`  :conda:package:`perl-exporter`  :conda:package:`perl-importer`  :conda:package:`perl-module-pluggable`  :conda:package:`perl-scope-guard`  :conda:package:`perl-sub-info`  :conda:package:`perl-term-table`  :conda:package:`perl-time-hires`  

   :required~by: |required_by_perl-test2-suite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test2-suite

   and update with::

      conda update perl-test2-suite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test2-suite


.. |required_by_perl-test2-suite| conda:required_by:: perl-test2-suite
.. |downloads_perl-test2-suite| image:: https://img.shields.io/conda/dn/bioconda/perl-test2-suite.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test2-suite| image:: https://quay.io/repository/biocontainers/perl-test2-suite/status
   :target: https://quay.io/repository/biocontainers/perl-test2-suite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test2-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test2-suite/README.html

