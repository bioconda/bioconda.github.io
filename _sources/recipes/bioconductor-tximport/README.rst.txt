:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tximport'
.. highlight: bash

bioconductor-tximport
=====================

.. conda:recipe:: bioconductor-tximport
   :replaces_section_title:

   Imports transcript\-level abundance\, estimated counts and transcript lengths\, and summarizes into matrices for use with downstream gene\-level analysis packages. Average transcript length\, weighted by sample\-specific transcript abundance estimates\, is provided as a matrix which can be used as an offset for different expression of gene\-level counts.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/tximport.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-tximport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tximport/meta.yaml>`_
   :links: biotools: :biotools:`tximport`

   


.. conda:package:: bioconductor-tximport

   |downloads_bioconductor-tximport| |docker_bioconductor-tximport|

   :versions: 1.12.0-0, 1.10.1-0, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.0.3-1, 1.0.3-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tximport

   and update with::

      conda update bioconductor-tximport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tximport:<tag>

   (see `bioconductor-tximport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tximport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tximport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tximport
   :alt:   (downloads)
.. |docker_bioconductor-tximport| image:: https://quay.io/repository/biocontainers/bioconductor-tximport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tximport
.. _`bioconductor-tximport/tags`: https://quay.io/repository/biocontainers/bioconductor-tximport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tximport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tximport/README.html