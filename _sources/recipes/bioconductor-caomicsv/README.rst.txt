:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-caomicsv'
.. highlight: bash

bioconductor-caomicsv
=====================

.. conda:recipe:: bioconductor-caomicsv
   :replaces_section_title:

   Visualization of multi\-dimentional cancer genomics data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/caOmicsV.html
   :license: GPL (>=2.0)
   :recipe: /`bioconductor-caomicsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caomicsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caomicsv/meta.yaml>`_

   caOmicsV package provides methods to visualize multi\-dimentional cancer genomics data including of patient information\, gene expressions\, DNA methylations\, DNA copy number variations\, and SNP\/mutations in matrix layout or network layout.


.. conda:package:: bioconductor-caomicsv

   |downloads_bioconductor-caomicsv| |docker_bioconductor-caomicsv|

   :versions: 1.16.0-0, 1.14.0-1, 1.14.0-0, 1.12.1-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-bc3net: >=1.0.2
   :depends r-igraph: >=0.7.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-caomicsv

   and update with::

      conda update bioconductor-caomicsv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-caomicsv:<tag>

   (see `bioconductor-caomicsv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-caomicsv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-caomicsv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-caomicsv
   :alt:   (downloads)
.. |docker_bioconductor-caomicsv| image:: https://quay.io/repository/biocontainers/bioconductor-caomicsv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-caomicsv
.. _`bioconductor-caomicsv/tags`: https://quay.io/repository/biocontainers/bioconductor-caomicsv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-caomicsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-caomicsv/README.html