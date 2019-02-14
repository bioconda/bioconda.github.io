:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgloadsqltab'
.. highlight: bash

ucsc-hgloadsqltab
=================

.. conda:recipe:: ucsc-hgloadsqltab
   :replaces_section_title:

   Load table into database from SQL and text files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadsqltab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadsqltab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadsqltab/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadsqltab

   |downloads_ucsc-hgloadsqltab| |docker_ucsc-hgloadsqltab|

   :versions: 366-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadsqltab

   and update with::

      conda update ucsc-hgloadsqltab

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadsqltab:<tag>

   (see `ucsc-hgloadsqltab/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgloadsqltab| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadsqltab.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadsqltab| image:: https://quay.io/repository/biocontainers/ucsc-hgloadsqltab/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadsqltab
.. _`ucsc-hgloadsqltab/tags`: https://quay.io/repository/biocontainers/ucsc-hgloadsqltab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadsqltab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadsqltab/README.html