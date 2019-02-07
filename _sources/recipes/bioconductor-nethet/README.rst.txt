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

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-multtest` >=2.38.0,<2.39.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-compquadform`  :conda:package:`r-genenet`  :conda:package:`r-ggm`  :conda:package:`r-ggplot2`  :conda:package:`r-glasso`  :conda:package:`r-glmnet`  :conda:package:`r-gsa`  :conda:package:`r-huge`  :conda:package:`r-icsnp`  :conda:package:`r-mclust`  :conda:package:`r-mvtnorm`  :conda:package:`r-network`  :conda:package:`r-parcor`  

   :required~by: |required_by_bioconductor-nethet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nethet

   and update with::

      conda update bioconductor-nethet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-nethet


.. |required_by_bioconductor-nethet| conda:required_by:: bioconductor-nethet
.. |downloads_bioconductor-nethet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nethet.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nethet| image:: https://quay.io/repository/biocontainers/bioconductor-nethet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nethet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nethet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nethet/README.html

