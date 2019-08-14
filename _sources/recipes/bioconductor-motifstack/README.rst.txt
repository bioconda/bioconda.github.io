:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motifstack'
.. highlight: bash

bioconductor-motifstack
=======================

.. conda:recipe:: bioconductor-motifstack
   :replaces_section_title:

   The motifStack package is designed for graphic representation of multiple motifs with different similarity scores. It works with both DNA\/RNA sequence motif and amino acid sequence motif. In addition\, it provides the flexibility for users to customize the graphic parameters such as the font type and symbol colors.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/motifStack.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-motifstack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifstack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motifstack/meta.yaml>`_
   :links: biotools: :biotools:`motifstack`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-motifstack

   |downloads_bioconductor-motifstack| |docker_bioconductor-motifstack|

   :versions: 1.28.0-1, 1.26.0-1, 1.26.0-0, 1.24.1-0, 1.22.0-0, 1.20.1-0, 1.18.0-0
   
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-motiv: >=1.40.0,<1.41.0
   :depends r-ade4: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-grimport2: 
   :depends r-htmlwidgets: 
   :depends r-scales: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-motifstack

   and update with::

      conda update bioconductor-motifstack

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motifstack:<tag>

   (see `bioconductor-motifstack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motifstack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motifstack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motifstack
   :alt:   (downloads)
.. |docker_bioconductor-motifstack| image:: https://quay.io/repository/biocontainers/bioconductor-motifstack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motifstack
.. _`bioconductor-motifstack/tags`: https://quay.io/repository/biocontainers/bioconductor-motifstack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motifstack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motifstack/README.html