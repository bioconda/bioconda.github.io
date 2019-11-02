:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sincell'
.. highlight: bash

bioconductor-sincell
====================

.. conda:recipe:: bioconductor-sincell
   :replaces_section_title:

   Cell differentiation processes are achieved through a continuum of hierarchical intermediate cell\-states that might be captured by single\-cell RNA seq. Existing computational approaches for the assessment of cell\-state hierarchies from single\-cell data might be formalized under a general workflow composed of i\) a metric to assess cell\-to\-cell similarities \(combined or not with a dimensionality reduction step\)\, and ii\) a graph\-building algorithm \(optionally making use of a cells\-clustering step\). Sincell R package implements a methodological toolbox allowing flexible workflows under such framework. Furthermore\, Sincell contributes new algorithms to provide cell\-state hierarchies with statistical support while accounting for stochastic factors in single\-cell RNA seq. Graphical representations and functional association tests are provided to interpret hierarchies.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/sincell.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sincell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sincell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sincell/meta.yaml>`_
   :links: biotools: :biotools:`sincell`

   


.. conda:package:: bioconductor-sincell

   |downloads_bioconductor-sincell| |docker_bioconductor-sincell|

   :versions: 1.18.0-0, 1.16.0-1, 1.16.0-0, 1.14.1-0, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-entropy: 
   :depends r-fastica: 
   :depends r-fields: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-proxy: 
   :depends r-rcpp: >=0.11.2
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-scatterplot3d: 
   :depends r-statmod: 
   :depends r-tsp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sincell

   and update with::

      conda update bioconductor-sincell

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sincell:<tag>

   (see `bioconductor-sincell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sincell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sincell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sincell
   :alt:   (downloads)
.. |docker_bioconductor-sincell| image:: https://quay.io/repository/biocontainers/bioconductor-sincell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sincell
.. _`bioconductor-sincell/tags`: https://quay.io/repository/biocontainers/bioconductor-sincell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sincell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sincell/README.html