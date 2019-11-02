:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bandits'
.. highlight: bash

bioconductor-bandits
====================

.. conda:recipe:: bioconductor-bandits
   :replaces_section_title:

   BANDITS is a Bayesian hierarchical model for detecting differential splicing of genes and transcripts\, via differential transcript usage \(DTU\)\, between two or more conditions. The method uses a Bayesian hierarchical framework\, which allows for sample specific proportions in a Dirichlet\-Multinomial model\, and samples the allocation of fragments to the transcripts. Parameters are inferred via Markov chain Monte Carlo \(MCMC\) techniques and a DTU test is performed via a multivariate Wald test on the posterior densities for the average relative abundance of transcripts.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/BANDITS.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-bandits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandits/meta.yaml>`_

   


.. conda:package:: bioconductor-bandits

   |downloads_bioconductor-bandits| |docker_bioconductor-bandits|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-drimseq: >=1.14.0,<1.15.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bandits

   and update with::

      conda update bioconductor-bandits

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bandits:<tag>

   (see `bioconductor-bandits/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bandits| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bandits.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bandits
   :alt:   (downloads)
.. |docker_bioconductor-bandits| image:: https://quay.io/repository/biocontainers/bioconductor-bandits/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bandits
.. _`bioconductor-bandits/tags`: https://quay.io/repository/biocontainers/bioconductor-bandits?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bandits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bandits/README.html