:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomes'
.. highlight: bash

bioconductor-genomes
====================

.. conda:recipe:: bioconductor-genomes
   :replaces_section_title:

   Genome sequencing project metadata

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/genomes.html
   :license: GPL-3
   :recipe: /`bioconductor-genomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomes/meta.yaml>`_

   Download genome and assembly reports from NCBI


.. conda:package:: bioconductor-genomes

   |downloads_bioconductor-genomes| |docker_bioconductor-genomes|

   :versions: 3.18.0-0, 3.16.0-0, 3.14.0-1, 3.14.0-0, 3.12.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-curl: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomes

   and update with::

      conda update bioconductor-genomes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomes:<tag>

   (see `bioconductor-genomes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomes
   :alt:   (downloads)
.. |docker_bioconductor-genomes| image:: https://quay.io/repository/biocontainers/bioconductor-genomes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomes
.. _`bioconductor-genomes/tags`: https://quay.io/repository/biocontainers/bioconductor-genomes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomes/README.html