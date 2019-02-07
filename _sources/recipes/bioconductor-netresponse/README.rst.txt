.. title:: Package Recipe 'bioconductor-netresponse'
.. highlight: bash


bioconductor-netresponse
========================

.. conda:recipe:: bioconductor-netresponse
   :replaces_section_title:

   Algorithms for functional network analysis. Includes an implementation of a variational Dirichlet process Gaussian mixture model for nonparametric mixture modeling.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/netresponse.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-netresponse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netresponse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netresponse/meta.yaml>`_

   


.. conda:package:: bioconductor-netresponse

   |downloads_bioconductor-netresponse| |docker_bioconductor-netresponse|

   :versions: 1.42.0

   :depends: :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-minet` >=3.40.0,<3.41.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dmt`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-mclust`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-netresponse|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netresponse

   and update with::

      conda update bioconductor-netresponse

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-netresponse


.. |required_by_bioconductor-netresponse| conda:required_by:: bioconductor-netresponse
.. |downloads_bioconductor-netresponse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netresponse.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netresponse| image:: https://quay.io/repository/biocontainers/bioconductor-netresponse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netresponse







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netresponse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netresponse/README.html

