:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-schot'
.. highlight: bash

bioconductor-schot
==================

.. conda:recipe:: bioconductor-schot
   :replaces_section_title:
   :noindex:

   single\-cell higher order testing

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/scHOT.html
   :license: GPL-3
   :recipe: /`bioconductor-schot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-schot/meta.yaml>`_

   Single cell Higher Order Testing \(scHOT\) is an R package that facilitates testing changes in higher order structure of gene expression along either a developmental trajectory or across space. scHOT is general and modular in nature\, can be run in multiple data contexts such as along a continuous trajectory\, between discrete groups\, and over spatial orientations\; as well as accommodate any higher order measurement such as variability or correlation. scHOT meaningfully adds to first order effect testing\, such as differential expression\, and provides a framework for interrogating higher order interactions from single cell data.


.. conda:package:: bioconductor-schot

   |downloads_bioconductor-schot| |docker_bioconductor-schot|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggforce: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-schot

   and update with::

      conda update bioconductor-schot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-schot:<tag>

   (see `bioconductor-schot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-schot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-schot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-schot
   :alt:   (downloads)
.. |docker_bioconductor-schot| image:: https://quay.io/repository/biocontainers/bioconductor-schot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-schot
.. _`bioconductor-schot/tags`: https://quay.io/repository/biocontainers/bioconductor-schot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-schot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-schot/README.html