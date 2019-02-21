:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methyvim'
.. highlight: bash

bioconductor-methyvim
=====================

.. conda:recipe:: bioconductor-methyvim
   :replaces_section_title:

   This package provides facilities for differential methylation analysis based on variable importance measures \(VIMs\)\, a class of statistical target parameters that arise in causal inference. The estimation and inference procedures provided are nonparametric\, relying on ensemble machine learning to flexibly assess functional relationships among covariates and the outcome of interest. These tools can be applied to differential methylation at the level of CpG sites\, to obtain valid statistical inference even after corrections for multiple hypothesis testing.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methyvim.html
   :license: file LICENSE
   :recipe: /`bioconductor-methyvim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyvim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methyvim/meta.yaml>`_

   


.. conda:package:: bioconductor-methyvim

   |downloads_bioconductor-methyvim| |docker_bioconductor-methyvim|

   :versions: 1.4.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-bumphunter: >=1.24.0,<1.25.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-minfi: >=1.28.0,<1.29.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-cluster: 
   
   :depends r-dofuture: 
   
   :depends r-dplyr: 
   
   :depends r-future: 
   
   :depends r-ggplot2: 
   
   :depends r-ggsci: 
   
   :depends r-gridextra: 
   
   :depends r-gtools: 
   
   :depends r-superheat: 
   
   :depends r-tmle: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methyvim

   and update with::

      conda update bioconductor-methyvim

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methyvim:<tag>

   (see `bioconductor-methyvim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methyvim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methyvim.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methyvim| image:: https://quay.io/repository/biocontainers/bioconductor-methyvim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methyvim
.. _`bioconductor-methyvim/tags`: https://quay.io/repository/biocontainers/bioconductor-methyvim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methyvim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methyvim/README.html