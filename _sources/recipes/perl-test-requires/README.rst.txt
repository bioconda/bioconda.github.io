.. title:: Package Recipe 'perl-test-requires'
.. highlight: bash


perl-test-requires
==================

.. conda:recipe:: perl-test-requires
   :replaces_section_title:

   Checks to see if the module can be loaded

   :homepage: https://github.com/tokuhirom/Test-Requires
   :license: perl_5
   :recipe: /`perl-test-requires <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requires>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requires/meta.yaml>`_

   


.. conda:package:: perl-test-requires

   |downloads_perl-test-requires| |docker_perl-test-requires|

   :versions: 0.10

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-test-requires|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-requires

   and update with::

      conda update perl-test-requires

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-requires


.. |required_by_perl-test-requires| conda:required_by:: perl-test-requires
.. |downloads_perl-test-requires| image:: https://img.shields.io/conda/dn/bioconda/perl-test-requires.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-requires| image:: https://quay.io/repository/biocontainers/perl-test-requires/status
   :target: https://quay.io/repository/biocontainers/perl-test-requires







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-requires/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-requires/README.html

