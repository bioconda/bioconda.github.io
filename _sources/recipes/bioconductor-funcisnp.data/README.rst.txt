:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-funcisnp.data'
.. highlight: bash

bioconductor-funcisnp.data
==========================

.. conda:recipe:: bioconductor-funcisnp.data
   :replaces_section_title:

   Data sets needed for FunciSNP to integrate information from GWAS\, 1000genomes and chromatin feature\, in order to identify functional SNP in coding or non\-coding regions.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/FunciSNP.data.html
   :license: GPL-3
   :recipe: /`bioconductor-funcisnp.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funcisnp.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-funcisnp.data/meta.yaml>`_

   


.. conda:package:: bioconductor-funcisnp.data

   |downloads_bioconductor-funcisnp.data| |docker_bioconductor-funcisnp.data|

   :versions: 1.18.0-0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-funcisnp.data

   and update with::

      conda update bioconductor-funcisnp.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-funcisnp.data:<tag>

   (see `bioconductor-funcisnp.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-funcisnp.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-funcisnp.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-funcisnp.data
   :alt:   (downloads)
.. |docker_bioconductor-funcisnp.data| image:: https://quay.io/repository/biocontainers/bioconductor-funcisnp.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-funcisnp.data
.. _`bioconductor-funcisnp.data/tags`: https://quay.io/repository/biocontainers/bioconductor-funcisnp.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-funcisnp.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-funcisnp.data/README.html