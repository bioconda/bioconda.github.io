:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dce'
.. highlight: bash

bioconductor-dce
================

.. conda:recipe:: bioconductor-dce
   :replaces_section_title:
   :noindex:

   Pathway Enrichment Based on Differential Causal Effects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/dce.html
   :license: GPL-3
   :recipe: /`bioconductor-dce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dce/meta.yaml>`_

   Compute differential causal effects \(dce\) on \(biological\) networks. Given observational samples from a control experiment and non\-control \(e.g.\, cancer\) for two genes A and B\, we can compute differential causal effects with a \(generalized\) linear regression. If the causal effect of gene A on gene B in the control samples is different from the causal effect in the non\-control samples the dce will differ from zero. We regularize the dce computation by the inclusion of prior network information from pathway databases such as KEGG.


.. conda:package:: bioconductor-dce

   |downloads_bioconductor-dce| |docker_bioconductor-dce|

   :versions:
      
      

      ``1.10.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-epinem: ``>=1.26.0,<1.27.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-graphite: ``>=1.48.0,<1.49.0``
   :depends bioconductor-mnem: ``>=1.18.0,<1.19.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-expm: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-glm2: 
   :depends r-glue: 
   :depends r-harmonicmeanp: 
   :depends r-igraph: 
   :depends r-logger: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-metap: 
   :depends r-naturalsort: 
   :depends r-pcalg: 
   :depends r-ppcor: 
   :depends r-purrr: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-shadowtext: 
   :depends r-tidygraph: 
   :depends r-tidyverse: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-dce

   and update with::

      mamba update bioconductor-dce

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dce

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dce:<tag>

   (see `bioconductor-dce/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dce
   :alt:   (downloads)
.. |docker_bioconductor-dce| image:: https://quay.io/repository/biocontainers/bioconductor-dce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dce
.. _`bioconductor-dce/tags`: https://quay.io/repository/biocontainers/bioconductor-dce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dce";
        var versions = ["1.10.0","1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dce/README.html