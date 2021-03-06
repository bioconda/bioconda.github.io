:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treekor'
.. highlight: bash

bioconductor-treekor
====================

.. conda:recipe:: bioconductor-treekor
   :replaces_section_title:
   :noindex:

   Cytometry Cluster Hierarchy and Proportions to Parent

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/treekoR.html
   :license: GPL-3
   :recipe: /`bioconductor-treekor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treekor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treekor/meta.yaml>`_

   treekoR is a novel framework that aims to utilise the hierarchical nature of single cell cytometry data to find robust and interpretable associations between cell subsets and patient clinical end points. These associations are aimed to recapitulate the nested proportions prevalent in workflows inovlving manual gating\, which are often overlooked in workflows using automatic clustering to identify cell populations. We developed treekoR to\: Derive a hierarchical tree structure of cell clusters\; measure the proportions to parent \(proportions of cells each node in the tree relative to the number of cells belonging its parent node\)\, in addition to the proportions to all \(proportion of cells in each node relative to all cells\)\; perform significance testing using the calculated proportions\; and provide an interactive html visualisation to help highlight key results.


.. conda:package:: bioconductor-treekor

   |downloads_bioconductor-treekor| |docker_bioconductor-treekor|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.0.0,<3.1.0``
   :depends bioconductor-hopach: ``>=2.52.0,<2.53.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggiraph: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-treekor

   and update with::

      conda update bioconductor-treekor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treekor:<tag>

   (see `bioconductor-treekor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treekor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treekor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treekor
   :alt:   (downloads)
.. |docker_bioconductor-treekor| image:: https://quay.io/repository/biocontainers/bioconductor-treekor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treekor
.. _`bioconductor-treekor/tags`: https://quay.io/repository/biocontainers/bioconductor-treekor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treekor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treekor/README.html