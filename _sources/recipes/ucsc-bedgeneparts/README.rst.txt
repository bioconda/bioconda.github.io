:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedgeneparts'
.. highlight: bash

ucsc-bedgeneparts
=================

.. conda:recipe:: ucsc-bedgeneparts
   :replaces_section_title:

   Given a bed\, spit out promoter\, first exon\, or all introns.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedgeneparts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedgeneparts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedgeneparts/meta.yaml>`_

   


.. conda:package:: ucsc-bedgeneparts

   |downloads_ucsc-bedgeneparts| |docker_ucsc-bedgeneparts|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: 
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedgeneparts

   and update with::

      conda update ucsc-bedgeneparts

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bedgeneparts:<tag>

   (see `ucsc-bedgeneparts/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedgeneparts| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedgeneparts.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bedgeneparts
   :alt:   (downloads)
.. |docker_ucsc-bedgeneparts| image:: https://quay.io/repository/biocontainers/ucsc-bedgeneparts/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedgeneparts
.. _`ucsc-bedgeneparts/tags`: https://quay.io/repository/biocontainers/ucsc-bedgeneparts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedgeneparts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedgeneparts/README.html