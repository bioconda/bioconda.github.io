:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fgnet'
.. highlight: bash

bioconductor-fgnet
==================

.. conda:recipe:: bioconductor-fgnet
   :replaces_section_title:
   :noindex:

   Functional Gene Networks derived from biological enrichment analyses

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/FGNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fgnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fgnet/meta.yaml>`_

   Build and visualize functional gene and term networks from clustering of enrichment analyses in multiple annotation spaces. The package includes a graphical user interface \(GUI\) and functions to perform the functional enrichment analysis through DAVID\, GeneTerm Linker\, gage \(GSEA\) and topGO.


.. conda:package:: bioconductor-fgnet

   |downloads_bioconductor-fgnet| |docker_bioconductor-fgnet|

   :versions:
      
      

      ``3.24.0-0``,  ``3.23.1-0``,  ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.16.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-hwriter: 
   :depends r-igraph: ``>=0.6``
   :depends r-plotrix: 
   :depends r-png: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fgnet

   and update with::

      conda update bioconductor-fgnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fgnet:<tag>

   (see `bioconductor-fgnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fgnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fgnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fgnet
   :alt:   (downloads)
.. |docker_bioconductor-fgnet| image:: https://quay.io/repository/biocontainers/bioconductor-fgnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fgnet
.. _`bioconductor-fgnet/tags`: https://quay.io/repository/biocontainers/bioconductor-fgnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fgnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fgnet/README.html