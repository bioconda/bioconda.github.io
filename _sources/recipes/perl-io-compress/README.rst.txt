.. title:: Package Recipe 'perl-io-compress'
.. highlight: bash


perl-io-compress
================

.. conda:recipe:: perl-io-compress
   :replaces_section_title:

   IO Interface to compressed data files\/buffers

   :homepage: http://metacpan.org/pod/IO-Compress
   :license: perl_5
   :recipe: /`perl-io-compress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-compress/meta.yaml>`_

   


.. conda:package:: perl-io-compress

   |downloads_perl-io-compress| |docker_perl-io-compress|

   :versions: 2.084, 2.083, 2.081, 2.069

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-compress-raw-bzip2` >=2.084 :conda:package:`perl-compress-raw-zlib` >=2.084 :conda:package:`perl-scalar-list-utils`  

   :required~by: |required_by_perl-io-compress|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-compress

   and update with::

      conda update perl-io-compress

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-io-compress


.. |required_by_perl-io-compress| conda:required_by:: perl-io-compress
.. |downloads_perl-io-compress| image:: https://img.shields.io/conda/dn/bioconda/perl-io-compress.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-io-compress| image:: https://quay.io/repository/biocontainers/perl-io-compress/status
   :target: https://quay.io/repository/biocontainers/perl-io-compress







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-compress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-compress/README.html

