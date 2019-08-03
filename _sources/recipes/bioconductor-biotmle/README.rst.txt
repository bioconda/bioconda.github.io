:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotmle'
.. highlight: bash

bioconductor-biotmle
====================

.. conda:recipe:: bioconductor-biotmle
   :replaces_section_title:

   This package facilitates the discovery of biomarkers from biological sequencing data \(e.g.\, microarrays\, RNA\-seq\) based on the associations of potential biomarkers with exposure and outcome variables by implementing an estimation procedure that combines a generalization of moderated statistics with targeted minimum loss\-based estimates \(TMLE\) of causal parameters \(e.g.\, Average Treatment Effect\) whose estimators admit asymptotically linear representations \(in terms of influence functions\).

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/biotmle.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle/meta.yaml>`_

   


.. conda:package:: bioconductor-biotmle

   |downloads_bioconductor-biotmle| |docker_bioconductor-biotmle|

   :versions: 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biocparallel: >=1.18.0,<1.19.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dofuture: 
   :depends r-dplyr: 
   :depends r-future: 
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-superheat: 
   :depends r-tibble: 
   :depends r-tmle: 
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