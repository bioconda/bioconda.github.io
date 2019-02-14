:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-birte'
.. highlight: bash

bioconductor-birte
==================

.. conda:recipe:: bioconductor-birte
   :replaces_section_title:

   Expression levels of mRNA molecules are regulated by different processes\, comprising inhibition or activation by transcription factors and post\-transcriptional degradation by microRNAs. biRte uses regulatory networks of TFs\, miRNAs and possibly other factors\, together with mRNA\, miRNA and other available expression data to predict the relative influence of a regulator on the expression of its target genes. Inference is done in a Bayesian modeling framework using Markov\-Chain\-Monte\-Carlo. A special feature is the possibility for follow\-up network reverse engineering between active regulators.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/birte.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-birte <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birte>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-birte/meta.yaml>`_
   :links: biotools: :biotools:`birte`, doi: :doi:`10.1093/bioinformatics/btv379`

   


.. conda:package:: bioconductor-birte

   |downloads_bioconductor-birte| |docker_bioconductor-birte|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-nem: >=2.56.0,<2.57.0
   
   :depends libcxx: >=4.0.1
   
   :depends openblas: >=0.3.3,<0.3.4.0a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-glmnet: 
   
   :depends r-mass: 
   
   :depends r-rcpp: 
   
   :depends r-rcpparmadillo: >=0.3.6.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-birte

   and update with::

      conda update bioconductor-birte

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-birte:<tag>

   (see `bioconductor-birte/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-birte| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-birte.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-birte| image:: https://quay.io/repository/biocontainers/bioconductor-birte/status
   :target: https://quay.io/repository/biocontainers/bioconductor-birte
.. _`bioconductor-birte/tags`: https://quay.io/repository/biocontainers/bioconductor-birte?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-birte/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-birte/README.html