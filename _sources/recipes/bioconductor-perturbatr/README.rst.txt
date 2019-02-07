.. title:: Package Recipe 'bioconductor-perturbatr'
.. highlight: bash


bioconductor-perturbatr
=======================

.. conda:recipe:: bioconductor-perturbatr
   :replaces_section_title:

   perturbatr does stage\-wise analysis of large\-scale genetic perturbation screens for integrated data sets consisting of multiple screens. For multiple integrated perturbation screens a hierarchical model that considers the variance between different biological conditions is fitted. The resulting list of gene effects is then further extended using a network propagation algorithm to correct for false negatives.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/perturbatr.html
   :license: GPL-3
   :recipe: /`bioconductor-perturbatr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perturbatr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-perturbatr/meta.yaml>`_

   


.. conda:package:: bioconductor-perturbatr

   |downloads_bioconductor-perturbatr| |docker_bioconductor-perturbatr|

   :versions: 1.2.1

   :depends: :conda:package:`r-assertthat`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-diffusr`  :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-foreach`  :conda:package:`r-formula.tools`  :conda:package:`r-ggplot2`  :conda:package:`r-igraph`  :conda:package:`r-lazyeval`  :conda:package:`r-lme4`  :conda:package:`r-magrittr`  :conda:package:`r-rlang`  :conda:package:`r-scales`  :conda:package:`r-tibble`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-perturbatr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-perturbatr

   and update with::

      conda update bioconductor-perturbatr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-perturbatr


.. |required_by_bioconductor-perturbatr| conda:required_by:: bioconductor-perturbatr
.. |downloads_bioconductor-perturbatr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-perturbatr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-perturbatr| image:: https://quay.io/repository/biocontainers/bioconductor-perturbatr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-perturbatr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-perturbatr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-perturbatr/README.html

