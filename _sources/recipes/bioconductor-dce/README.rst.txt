:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dce'
.. highlight: bash

bioconductor-dce
================

.. conda:recipe:: bioconductor-dce
   :replaces_section_title:
   :noindex:

   Pathway Enrichment Based on Differential Causal Effects

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/dce.html
   :license: GPL-3
   :recipe: /`bioconductor-dce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dce/meta.yaml>`_

   Compute differential causal effects \(dce\) on \(biological\) networks. Given observational samples from a control experiment and non\-control \(e.g.\, cancer\) for two genes A and B\, we can compute differential causal effects with a \(generalized\) linear regression. If the causal effect of gene A on gene B in the control samples is different from the causal effect in the non\-control samples the dce will differ from zero. We regularize the dce computation by the inclusion of prior network information from pathway databases such as KEGG.


.. conda:package:: bioconductor-dce

   |downloads_bioconductor-dce| |docker_bioconductor-dce|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-epinem: ``>=1.22.0,<1.23.0``
   :depends bioconductor-graph: ``>=1.76.0,<1.77.0``
   :depends bioconductor-graphite: ``>=1.44.0,<1.45.0``
   :depends bioconductor-mnem: ``>=1.14.0,<1.15.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-rgraphviz: ``>=2.42.0,<2.43.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
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

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dce

   and update with::

      conda update bioconductor-dce

   or use the docker container::

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
        var versions = ["1.6.0","1.2.0","1.0.0"];
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