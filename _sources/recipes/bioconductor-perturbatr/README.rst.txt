:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-perturbatr'
.. highlight: bash

bioconductor-perturbatr
=======================

.. conda:recipe:: bioconductor-perturbatr
   :replaces_section_title:

   perturbatr does stage\-wise analysis of large\-scale genetic perturbation screens for integrated data sets consisting of multiple screens. For multiple integrated perturbation screens a hierarchical model that considers the variance between different biological conditions is fitted. The resulting list of gene effects is then further extended using a network propagation algorithm to correct for false negatives.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/perturbatr.html
   :license: GPL-3
   :recipe: /`bioconductor-perturbatr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perturbatr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perturbatr/meta.yaml>`_

   


.. conda:package:: bioconductor-perturbatr

   |downloads_bioconductor-perturbatr| |docker_bioconductor-perturbatr|

   :versions: 1.6.0-0, 1.4.0-1, 1.4.0-0, 1.2.1-0
   
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-diffusr: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-formula.tools: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-lazyeval: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-perturbatr

   and update with::

      conda update bioconductor-perturbatr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-perturbatr:<tag>

   (see `bioconductor-perturbatr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-perturbatr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-perturbatr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-perturbatr
   :alt:   (downloads)
.. |docker_bioconductor-perturbatr| image:: https://quay.io/repository/biocontainers/bioconductor-perturbatr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-perturbatr
.. _`bioconductor-perturbatr/tags`: https://quay.io/repository/biocontainers/bioconductor-perturbatr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-perturbatr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-perturbatr/README.html