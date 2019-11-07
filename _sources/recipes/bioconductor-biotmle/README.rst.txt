:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotmle'
.. highlight: bash

bioconductor-biotmle
====================

.. conda:recipe:: bioconductor-biotmle
   :replaces_section_title:

   Targeted Learning with Moderated Statistics for Biomarker Discovery

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/biotmle.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle/meta.yaml>`_

   This package facilitates the discovery of biomarkers from biological sequencing data \(e.g.\, microarrays\, RNA\-seq\) based on the associations of potential biomarkers with exposure variables by implementing an inferential procedure that combines a generalization of moderated statistics with targeted minimum loss estimates of the average treatment effect whose estimator admits an asymptotically linear representations \(in terms of an efficient influence function\).


.. conda:package:: bioconductor-biotmle

   |downloads_bioconductor-biotmle| |docker_bioconductor-biotmle|

   :versions: 1.10.0-0, 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dofuture: 
   :depends r-dplyr: 
   :depends r-future: 
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-superheat: 
   :depends r-tibble: 
   :depends r-tmle: >=1.4.0.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biotmle

   and update with::

      conda update bioconductor-biotmle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biotmle:<tag>

   (see `bioconductor-biotmle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biotmle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotmle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotmle
   :alt:   (downloads)
.. |docker_bioconductor-biotmle| image:: https://quay.io/repository/biocontainers/bioconductor-biotmle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotmle
.. _`bioconductor-biotmle/tags`: https://quay.io/repository/biocontainers/bioconductor-biotmle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotmle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotmle/README.html