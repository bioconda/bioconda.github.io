:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-findbin-real'
.. highlight: bash

perl-findbin-real
=================

.. conda:recipe:: perl-findbin-real
   :replaces_section_title:

   Locates the full path to the script bin directory to allow the use of paths relative to the bin directory.

   :homepage: https://metacpan.org/pod/FindBin::Real
   :license: perl_5
   :recipe: /`perl-findbin-real <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-real>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-findbin-real/meta.yaml>`_

   


.. conda:package:: perl-findbin-real

   |downloads_perl-findbin-real| |docker_perl-findbin-real|

   :versions: 1.05-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-findbin-real

   and update with::

      conda update perl-findbin-real

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-findbin-real:<tag>

   (see `perl-findbin-real/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-findbin-real| image:: https://img.shields.io/conda/dn/bioconda/perl-findbin-real.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-findbin-real| image:: https://quay.io/repository/biocontainers/perl-findbin-real/status
   :target: https://quay.io/repository/biocontainers/perl-findbin-real
.. _`perl-findbin-real/tags`: https://quay.io/repository/biocontainers/perl-findbin-real?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-findbin-real/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-findbin-real/README.html