:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treekor'
.. highlight: bash

bioconductor-treekor
====================

.. conda:recipe:: bioconductor-treekor
   :replaces_section_title:
   :noindex:

   Cytometry Cluster Hierarchy and Cellular\-to\-phenotype Associations

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/treekoR.html
   :license: GPL-3
   :recipe: /`bioconductor-treekor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treekor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treekor/meta.yaml>`_

   treekoR is a novel framework that aims to utilise the hierarchical nature of single cell cytometry data to find robust and interpretable associations between cell subsets and patient clinical end points. These associations are aimed to recapitulate the nested proportions prevalent in workflows inovlving manual gating\, which are often overlooked in workflows using automatic clustering to identify cell populations. We developed treekoR to\: Derive a hierarchical tree structure of cell clusters\; quantify a cell types as a proportion relative to all cells in a sample \(\%total\)\, and\, as the proportion relative to a parent population \(\%parent\)\; perform significance testing using the calculated proportions\; and provide an interactive html visualisation to help highlight key results.


.. conda:package:: bioconductor-treekor

   |downloads_bioconductor-treekor| |docker_bioconductor-treekor|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-diffcyt: ``>=1.22.0,<1.23.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends bioconductor-hopach: ``>=2.62.0,<2.63.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggiraph: 
   :depends r-ggplot2: 
   :depends r-lme4: 
   :depends r-multcomp: 
   :depends r-patchwork: 
   :depends r-tidyr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-treekor

   and update with::

      mamba update bioconductor-treekor

  To create a new environment, run::

      mamba create --name myenvname bioconductor-treekor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treekor:<tag>

   (see `bioconductor-treekor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treekor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treekor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treekor
   :alt:   (downloads)
.. |docker_bioconductor-treekor| image:: https://quay.io/repository/biocontainers/bioconductor-treekor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treekor
.. _`bioconductor-treekor/tags`: https://quay.io/repository/biocontainers/bioconductor-treekor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treekor";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treekor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treekor/README.html