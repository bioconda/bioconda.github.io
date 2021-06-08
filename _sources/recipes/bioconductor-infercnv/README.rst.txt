:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-infercnv'
.. highlight: bash

bioconductor-infercnv
=====================

.. conda:recipe:: bioconductor-infercnv
   :replaces_section_title:
   :noindex:

   Infer Copy Number Variation from Single\-Cell RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/infercnv.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-infercnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-infercnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-infercnv/meta.yaml>`_

   Using single\-cell RNA\-Seq expression to visualize CNV in cells.


.. conda:package:: bioconductor-infercnv

   |downloads_bioconductor-infercnv| |docker_bioconductor-infercnv|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends jags: ``4.*.*``
   :depends r-ape: 
   :depends r-argparse: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-catools: 
   :depends r-coda: 
   :depends r-coin: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-fastcluster: 
   :depends r-fitdistrplus: 
   :depends r-foreach: 
   :depends r-futile.logger: 
   :depends r-future: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-hiddenmarkov: 
   :depends r-leiden: 
   :depends r-matrix: 
   :depends r-phyclust: 
   :depends r-rann: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :depends r-rjags: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-infercnv

   and update with::

      conda update bioconductor-infercnv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-infercnv:<tag>

   (see `bioconductor-infercnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-infercnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-infercnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-infercnv
   :alt:   (downloads)
.. |docker_bioconductor-infercnv| image:: https://quay.io/repository/biocontainers/bioconductor-infercnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-infercnv
.. _`bioconductor-infercnv/tags`: https://quay.io/repository/biocontainers/bioconductor-infercnv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-infercnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-infercnv/README.html