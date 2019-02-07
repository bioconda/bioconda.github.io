.. title:: Package Recipe 'perl-test-longstring'
.. highlight: bash


perl-test-longstring
====================

.. conda:recipe:: perl-test-longstring
   :replaces_section_title:

   tests strings for equality\, with more helpful failures

   :homepage: http://metacpan.org/pod/Test::LongString
   :license: perl_5
   :recipe: /`perl-test-longstring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-longstring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-longstring/meta.yaml>`_

   


.. conda:package:: perl-test-longstring

   |downloads_perl-test-longstring| |docker_perl-test-longstring|

   :versions: 0.17

   :depends: :conda:package:`perl-test-builder-tester`  :conda:package:`perl-test-simple`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-test-longstring|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-longstring

   and update with::

      conda update perl-test-longstring

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-longstring


.. |required_by_perl-test-longstring| conda:required_by:: perl-test-longstring
.. |downloads_perl-test-longstring| image:: https://img.shields.io/conda/dn/bioconda/perl-test-longstring.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-longstring| image:: https://quay.io/repository/biocontainers/perl-test-longstring/status
   :target: https://quay.io/repository/biocontainers/perl-test-longstring







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-longstring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-longstring/README.html

