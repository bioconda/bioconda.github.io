:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctrap'
.. highlight: bash

bioconductor-ctrap
==================

.. conda:recipe:: bioconductor-ctrap
   :replaces_section_title:

   Identification of candidate causal perturbations from differential gene expression data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/cTRAP.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ctrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctrap/meta.yaml>`_

   Compare differential gene expression results with those from known cellular perturbations \(such as gene knock\-down\, overexpression or small molecules\) derived from the Connectivity Map. Such analyses allow not only to infer the molecular causes of the observed difference in gene expression but also to identify small molecules that could drive or revert specific transcriptomic alterations.


.. conda:package:: bioconductor-ctrap

   |downloads_bioconductor-ctrap| |docker_bioconductor-ctrap|

   :versions: 1.6.0-0, 1.4.0-0, 1.2.0-1, 1.0.3-0
   
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-fgsea: >=1.14.0,<1.15.0
   :depends bioconductor-limma: >=3.44.0,<3.45.0
   :depends bioconductor-rhdf5: >=2.32.0,<2.33.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-httr: 
   :depends r-pbapply: 
   :depends r-r.utils: 
   :depends r-readxl: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ctrap

   and update with::

      conda update bioconductor-ctrap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ctrap:<tag>

   (see `bioconductor-ctrap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ctrap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctrap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctrap
   :alt:   (downloads)
.. |docker_bioconductor-ctrap| image:: https://quay.io/repository/biocontainers/bioconductor-ctrap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctrap
.. _`bioconductor-ctrap/tags`: https://quay.io/repository/biocontainers/bioconductor-ctrap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctrap/README.html