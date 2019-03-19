:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgvstovcf'
.. highlight: bash

ucsc-hgvstovcf
==============

.. conda:recipe:: ucsc-hgvstovcf
   :replaces_section_title:

   Convert HGVS terms to VCF tab\-separated output

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgvstovcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgvstovcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgvstovcf/meta.yaml>`_

   


.. conda:package:: ucsc-hgvstovcf

   |downloads_ucsc-hgvstovcf| |docker_ucsc-hgvstovcf|

   :versions: 377-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgvstovcf

   and update with::

      conda update ucsc-hgvstovcf

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-hgvstovcf:<tag>

   (see `ucsc-hgvstovcf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgvstovcf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgvstovcf.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgvstovcf| image:: https://quay.io/repository/biocontainers/ucsc-hgvstovcf/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgvstovcf
.. _`ucsc-hgvstovcf/tags`: https://quay.io/repository/biocontainers/ucsc-hgvstovcf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgvstovcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgvstovcf/README.html