:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgspeciesrna'
.. highlight: bash

ucsc-hgspeciesrna
=================

.. conda:recipe:: ucsc-hgspeciesrna
   :replaces_section_title:
   :noindex:

   Create fasta file with RNA from one species

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgspeciesrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgspeciesrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgspeciesrna/meta.yaml>`_

   


.. conda:package:: ucsc-hgspeciesrna

   |downloads_ucsc-hgspeciesrna| |docker_ucsc-hgspeciesrna|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgspeciesrna

   and update with::

      conda update ucsc-hgspeciesrna

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-hgspeciesrna:<tag>

   (see `ucsc-hgspeciesrna/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgspeciesrna| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgspeciesrna.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-hgspeciesrna
   :alt:   (downloads)
.. |docker_ucsc-hgspeciesrna| image:: https://quay.io/repository/biocontainers/ucsc-hgspeciesrna/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgspeciesrna
.. _`ucsc-hgspeciesrna/tags`: https://quay.io/repository/biocontainers/ucsc-hgspeciesrna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgspeciesrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgspeciesrna/README.html