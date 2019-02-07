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

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-bumphunter` >=1.24.0,<1.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-minfi` >=1.28.0,<1.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-dofuture`  :conda:package:`r-dplyr`  :conda:package:`r-future`  :conda:package:`r-ggplot2`  :conda:package:`r-ggsci`  :conda:package:`r-gridextra`  :conda:package:`r-gtools`  :conda:package:`r-superheat`  :conda:package:`r-tmle`  

   :required~by: |required_by_bioconductor-methyvim|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methyvim

   and update with::

      conda update bioconductor-methyvim

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methyvim


.. |required_by_bioconductor-methyvim| conda:required_by:: bioconductor-methyvim
.. |downloads_bioconductor-methyvim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methyvim.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methyvim| image:: https://quay.io/repository/biocontainers/bioconductor-methyvim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methyvim







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methyvim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methyvim/README.html

