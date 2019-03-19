:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fastqstatsandsubsample'
.. highlight: bash

ucsc-fastqstatsandsubsample
===========================

.. conda:recipe:: ucsc-fastqstatsandsubsample
   :replaces_section_title:

   Go through a fastq file doing sanity checks and collecting stats

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fastqstatsandsubsample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fastqstatsandsubsample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fastqstatsandsubsample/meta.yaml>`_

   


.. conda:package:: ucsc-fastqstatsandsubsample

   |downloads_ucsc-fastqstatsandsubsample| |docker_ucsc-fastqstatsandsubsample|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fastqstatsandsubsample

   and update with::

      conda update ucsc-fastqstatsandsubsample

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fastqstatsandsubsample:<tag>

   (see `ucsc-fastqstatsandsubsample/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fastqstatsandsubsample| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fastqstatsandsubsample.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fastqstatsandsubsample| image:: https://quay.io/repository/biocontainers/ucsc-fastqstatsandsubsample/status
   :target: https://quay.io/repository/biocontainers/ucsc-fastqstatsandsubsample
.. _`ucsc-fastqstatsandsubsample/tags`: https://quay.io/repository/biocontainers/ucsc-fastqstatsandsubsample?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fastqstatsandsubsample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fastqstatsandsubsample/README.html