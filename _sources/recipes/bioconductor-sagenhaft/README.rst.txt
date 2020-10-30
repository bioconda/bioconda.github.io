:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sagenhaft'
.. highlight: bash

bioconductor-sagenhaft
======================

.. conda:recipe:: bioconductor-sagenhaft
   :replaces_section_title:
   :noindex:

   Collection of functions for reading and comparing SAGE libraries

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/sagenhaft.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sagenhaft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sagenhaft/meta.yaml>`_
   :links: biotools: :biotools:`sagenhaft`, doi: :doi:`10.1038/nmeth.3252`

   This package implements several functions useful for analysis of gene expression data by sequencing tags as done in SAGE \(Serial Analysis of Gene Expressen\) data\, i.e. extraction of a SAGE library from sequence files\, sequence error correction\, library comparison. Sequencing error correction is implementing using an Expectation Maximization Algorithm based on a Mixture Model of tag counts.


.. conda:package:: bioconductor-sagenhaft

   |downloads_bioconductor-sagenhaft| |docker_bioconductor-sagenhaft|

   :versions:
      
      

      ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-sparsem: ``>=0.73``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sagenhaft

   and update with::

      conda update bioconductor-sagenhaft

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sagenhaft:<tag>

   (see `bioconductor-sagenhaft/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sagenhaft| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sagenhaft.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sagenhaft
   :alt:   (downloads)
.. |docker_bioconductor-sagenhaft| image:: https://quay.io/repository/biocontainers/bioconductor-sagenhaft/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sagenhaft
.. _`bioconductor-sagenhaft/tags`: https://quay.io/repository/biocontainers/bioconductor-sagenhaft?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sagenhaft/README.html