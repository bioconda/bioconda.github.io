.. title:: Package Recipe 'perl-extutils-manifest'
.. highlight: bash


perl-extutils-manifest
======================

.. conda:recipe:: perl-extutils-manifest
   :replaces_section_title:

   Utilities to write and check a MANIFEST file

   :homepage: https://metacpan.org/release/ExtUtils-Manifest
   :license: perl_5
   :recipe: /`perl-extutils-manifest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-manifest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-manifest/meta.yaml>`_

   


.. conda:package:: perl-extutils-manifest

   |downloads_perl-extutils-manifest| |docker_perl-extutils-manifest|

   :versions: 1.71, 1.70

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-extutils-manifest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-manifest

   and update with::

      conda update perl-extutils-manifest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-extutils-manifest


.. |required_by_perl-extutils-manifest| conda:required_by:: perl-extutils-manifest
.. |downloads_perl-extutils-manifest| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-manifest.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-extutils-manifest| image:: https://quay.io/repository/biocontainers/perl-extutils-manifest/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-manifest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-manifest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-manifest/README.html

