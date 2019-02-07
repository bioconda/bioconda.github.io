.. title:: Package Recipe 'perl-bloom-faster'
.. highlight: bash


perl-bloom-faster
=================

.. conda:recipe:: perl-bloom-faster
   :replaces_section_title:

   Perl extension for the c library libbloom.

   :homepage: http://metacpan.org/pod/Bloom-Faster
   :license: unknown
   :recipe: /`perl-bloom-faster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bloom-faster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bloom-faster/meta.yaml>`_

   


.. conda:package:: perl-bloom-faster

   |downloads_perl-bloom-faster| |docker_perl-bloom-faster|

   :versions: 1.7

   :depends: :conda:package:`libgcc`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-bloom-faster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bloom-faster

   and update with::

      conda update perl-bloom-faster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bloom-faster


.. |required_by_perl-bloom-faster| conda:required_by:: perl-bloom-faster
.. |downloads_perl-bloom-faster| image:: https://img.shields.io/conda/dn/bioconda/perl-bloom-faster.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bloom-faster| image:: https://quay.io/repository/biocontainers/perl-bloom-faster/status
   :target: https://quay.io/repository/biocontainers/perl-bloom-faster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bloom-faster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bloom-faster/README.html

