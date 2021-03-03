:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fatovcf'
.. highlight: bash

ucsc-fatovcf
============

.. conda:recipe:: ucsc-fatovcf
   :replaces_section_title:
   :noindex:

   Extract VCF from a multi\-sequence FASTA alignment

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fatovcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatovcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatovcf/meta.yaml>`_

   


.. conda:package:: ucsc-fatovcf

   |downloads_ucsc-fatovcf| |docker_ucsc-fatovcf|

   :versions:
      
      

      ``407-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fatovcf

   and update with::

      conda update ucsc-fatovcf

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fatovcf:<tag>

   (see `ucsc-fatovcf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fatovcf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fatovcf.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fatovcf
   :alt:   (downloads)
.. |docker_ucsc-fatovcf| image:: https://quay.io/repository/biocontainers/ucsc-fatovcf/status
   :target: https://quay.io/repository/biocontainers/ucsc-fatovcf
.. _`ucsc-fatovcf/tags`: https://quay.io/repository/biocontainers/ucsc-fatovcf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fatovcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fatovcf/README.html