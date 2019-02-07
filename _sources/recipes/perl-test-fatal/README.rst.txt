.. title:: Package Recipe 'perl-test-fatal'
.. highlight: bash


perl-test-fatal
===============

.. conda:recipe:: perl-test-fatal
   :replaces_section_title:

   incredibly simple helpers for testing code with exceptions

   :homepage: https://github.com/rjbs/Test-Fatal
   :license: perl_5
   :recipe: /`perl-test-fatal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-fatal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-fatal/meta.yaml>`_

   


.. conda:package:: perl-test-fatal

   |downloads_perl-test-fatal| |docker_perl-test-fatal|

   :versions: 0.014

   :depends: :conda:package:`perl-threaded`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-test-fatal|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-fatal

   and update with::

      conda update perl-test-fatal

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-test-fatal


.. |required_by_perl-test-fatal| conda:required_by:: perl-test-fatal
.. |downloads_perl-test-fatal| image:: https://img.shields.io/conda/dn/bioconda/perl-test-fatal.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-test-fatal| image:: https://quay.io/repository/biocontainers/perl-test-fatal/status
   :target: https://quay.io/repository/biocontainers/perl-test-fatal







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-fatal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-fatal/README.html

