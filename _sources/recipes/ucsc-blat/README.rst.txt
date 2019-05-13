:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-blat'
.. highlight: bash

ucsc-blat
=========

.. conda:recipe:: ucsc-blat
   :replaces_section_title:

   Standalone BLAT v. 36x2 fast sequence search command line tool

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-blat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-blat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-blat/meta.yaml>`_

   


.. conda:package:: ucsc-blat

   |downloads_ucsc-blat| |docker_ucsc-blat|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: 
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-blat

   and update with::

      conda update ucsc-blat

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-blat:<tag>

   (see `ucsc-blat/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-blat| image:: https://img.shields.io/conda/dn/bioconda/ucsc-blat.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-blat
   :alt:   (downloads)
.. |docker_ucsc-blat| image:: https://quay.io/repository/biocontainers/ucsc-blat/status
   :target: https://quay.io/repository/biocontainers/ucsc-blat
.. _`ucsc-blat/tags`: https://quay.io/repository/biocontainers/ucsc-blat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-blat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-blat/README.html