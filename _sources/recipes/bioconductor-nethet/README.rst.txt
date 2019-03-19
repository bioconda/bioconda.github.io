:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nethet'
.. highlight: bash

bioconductor-nethet
===================

.. conda:recipe:: bioconductor-nethet
   :replaces_section_title:

   Package nethet is an implementation of statistical solid methodology enabling the analysis of network heterogeneity from high\-dimensional data. It combines several implementations of recent statistical innovations useful for estimation and comparison of networks in a heterogeneous\, high\-dimensional setting. In particular\, we provide code for formal two\-sample testing in Gaussian graphical models \(differential network and GGM\-GSA\; Stadler and Mukherjee\, 2013\, 2014\) and make a novel network\-based clustering algorithm available \(mixed graphical lasso\, Stadler and Mukherjee\, 2013\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/nethet.html
   :license: GPL-2
   :recipe: /`bioconductor-nethet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nethet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nethet/meta.yaml>`_

   


.. conda:package:: bioconductor-nethet

   |downloads_bioconductor-nethet| |docker_bioconductor-nethet|

   :versions: 1.14.0-0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-multtest: >=2.38.0,<2.39.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-compquadform: 
   
   :depends r-genenet: 
   
   :depends r-ggm: 
   
   :depends r-ggplot2: 
   
   :depends r-glasso: 
   
   :depends r-glmnet: 
   
   :depends r-gsa: 
   
   :depends r-huge: 
   
   :depends r-icsnp: 
   
   :depends r-mclust: 
   
   :depends r-mvtnorm: 
   
   :depends r-network: 
   
   :depends r-parcor: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nethet

   and update with::

      conda update bioconductor-nethet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nethet:<tag>

   (see `bioconductor-nethet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nethet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nethet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nethet| image:: https://quay.io/repository/biocontainers/bioconductor-nethet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nethet
.. _`bioconductor-nethet/tags`: https://quay.io/repository/biocontainers/bioconductor-nethet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nethet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nethet/README.html