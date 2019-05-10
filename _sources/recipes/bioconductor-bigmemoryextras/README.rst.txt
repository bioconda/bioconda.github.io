:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bigmemoryextras'
.. highlight: bash

bioconductor-bigmemoryextras
============================

.. conda:recipe:: bioconductor-bigmemoryextras
   :replaces_section_title:

   This package defines a \"BigMatrix\" ReferenceClass which adds safety and convenience features to the filebacked.big.matrix class from the bigmemory package. BigMatrix protects against segfaults by monitoring and gracefully restoring the connection to on\-disk data and it also protects against accidental data modification with a filesystem\-based permissions system. We provide utilities for using BigMatrix\-derived classes as assayData matrices within the Biobase package\'s eSet family of classes. BigMatrix provides some optimizations related to attaching to\, and indexing into\, file\-backed matrices with dimnames. Additionally\, the package provides a \"BigMatrixFactor\" class\, a file\-backed matrix with factor properties.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bigmemoryExtras.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bigmemoryextras <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmemoryextras>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bigmemoryextras/meta.yaml>`_

   


.. conda:package:: bioconductor-bigmemoryextras

   |downloads_bioconductor-bigmemoryextras| |docker_bioconductor-bigmemoryextras|

   :versions: 1.32.0-0, 1.30.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-bigmemory: >=4.5.31
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bigmemoryextras

   and update with::

      conda update bioconductor-bigmemoryextras

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bigmemoryextras:<tag>

   (see `bioconductor-bigmemoryextras/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bigmemoryextras| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bigmemoryextras.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bigmemoryextras| image:: https://quay.io/repository/biocontainers/bioconductor-bigmemoryextras/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bigmemoryextras
.. _`bioconductor-bigmemoryextras/tags`: https://quay.io/repository/biocontainers/bioconductor-bigmemoryextras?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bigmemoryextras/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bigmemoryextras/README.html