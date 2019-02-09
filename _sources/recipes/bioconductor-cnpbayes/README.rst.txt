.. title:: Package Recipe 'bioconductor-cnpbayes'
.. highlight: bash


bioconductor-cnpbayes
=====================

.. conda:recipe:: bioconductor-cnpbayes
   :replaces_section_title:

   Bayesian hierarchical mixture models for batch effects and copy number.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNPBayes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnpbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnpbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnpbayes/meta.yaml>`_

   


.. conda:package:: bioconductor-cnpbayes

   |downloads_bioconductor-cnpbayes| |docker_bioconductor-cnpbayes|

   :versions: 1.12.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-coda`  :conda:package:`r-combinat`  :conda:package:`r-dplyr`  :conda:package:`r-ggplot2`  :conda:package:`r-gtools`  :conda:package:`r-magrittr`  :conda:package:`r-matrixstats`  :conda:package:`r-mclust`  :conda:package:`r-purrr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp` >=0.12.1 :conda:package:`r-reshape2`  :conda:package:`r-scales`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-cnpbayes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnpbayes

   and update with::

      conda update bioconductor-cnpbayes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cnpbayes


.. |required_by_bioconductor-cnpbayes| conda:required_by:: bioconductor-cnpbayes
.. |downloads_bioconductor-cnpbayes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnpbayes.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cnpbayes| image:: https://quay.io/repository/biocontainers/bioconductor-cnpbayes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnpbayes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnpbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnpbayes/README.html

