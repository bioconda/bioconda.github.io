:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-catdir'
.. highlight: bash

ucsc-catdir
===========

.. conda:recipe:: ucsc-catdir
   :replaces_section_title:
   :noindex:

   concatenate files in directory to stdout.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-catdir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-catdir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-catdir/meta.yaml>`_

   


.. conda:package:: ucsc-catdir

   |downloads_ucsc-catdir| |docker_ucsc-catdir|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-catdir

   and update with::

      conda update ucsc-catdir

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-catdir:<tag>

   (see `ucsc-catdir/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-catdir| image:: https://img.shields.io/conda/dn/bioconda/ucsc-catdir.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-catdir
   :alt:   (downloads)
.. |docker_ucsc-catdir| image:: https://quay.io/repository/biocontainers/ucsc-catdir/status
   :target: https://quay.io/repository/biocontainers/ucsc-catdir
.. _`ucsc-catdir/tags`: https://quay.io/repository/biocontainers/ucsc-catdir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-catdir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-catdir/README.html