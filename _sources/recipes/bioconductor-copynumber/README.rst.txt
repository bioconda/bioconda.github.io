:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copynumber'
.. highlight: bash

bioconductor-copynumber
=======================

.. conda:recipe:: bioconductor-copynumber
   :replaces_section_title:

   Segmentation of single\- and multi\-track copy number data by penalized least squares regression.

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/copynumber.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copynumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copynumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copynumber/meta.yaml>`_
   :links: biotools: :biotools:`copynumber`

   Penalized least squares regression is applied to fit piecewise constant curves to copy number data to locate genomic regions of constant copy number. Procedures are available for individual segmentation of each sample\, joint segmentation of several samples and joint segmentation of the two data tracks from SNP\-arrays. Several plotting functions are available for visualization of the data and the segmentation results.


.. conda:package:: bioconductor-copynumber

   |downloads_bioconductor-copynumber| |docker_bioconductor-copynumber|

   :versions: 1.28.0-0, 1.26.0-0, 1.24.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-copynumber

   and update with::

      conda update bioconductor-copynumber

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copynumber:<tag>

   (see `bioconductor-copynumber/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copynumber| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copynumber.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copynumber
   :alt:   (downloads)
.. |docker_bioconductor-copynumber| image:: https://quay.io/repository/biocontainers/bioconductor-copynumber/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copynumber
.. _`bioconductor-copynumber/tags`: https://quay.io/repository/biocontainers/bioconductor-copynumber?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copynumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copynumber/README.html