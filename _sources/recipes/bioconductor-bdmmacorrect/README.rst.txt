:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bdmmacorrect'
.. highlight: bash

bioconductor-bdmmacorrect
=========================

.. conda:recipe:: bioconductor-bdmmacorrect
   :replaces_section_title:

   Meta\-analysis for the metagenomic read counts data from different cohorts

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/BDMMAcorrect.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-bdmmacorrect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bdmmacorrect/meta.yaml>`_

   Metagenomic sequencing techniques enable quantitative analyses of the microbiome. However\, combining the microbial data from these experiments is challenging due to the variations between experiments. The existing methods for correcting batch effects do not consider the interactions between variables—microbial taxa in microbial studies—and the overdispersion of the microbiome data. Therefore\, they are not applicable to microbiome data. We develop a new method\, Bayesian Dirichlet\-multinomial regression meta\-analysis \(BDMMA\)\, to simultaneously model the batch effects and detect the microbial taxa associated with phenotypes. BDMMA automatically models the dependence among microbial taxa and is robust to the high dimensionality of the microbiome and their association sparsity.


.. conda:package:: bioconductor-bdmmacorrect

   |downloads_bioconductor-bdmmacorrect| |docker_bioconductor-bdmmacorrect|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.0-0
   
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ellipse: 
   :depends r-ggplot2: 
   :depends r-rcpp: >=0.12.12
   :depends r-rcpparmadillo: 
   :depends r-rcppeigen: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bdmmacorrect

   and update with::

      conda update bioconductor-bdmmacorrect

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bdmmacorrect:<tag>

   (see `bioconductor-bdmmacorrect/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bdmmacorrect| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bdmmacorrect.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bdmmacorrect
   :alt:   (downloads)
.. |docker_bioconductor-bdmmacorrect| image:: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect
.. _`bioconductor-bdmmacorrect/tags`: https://quay.io/repository/biocontainers/bioconductor-bdmmacorrect?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bdmmacorrect/README.html