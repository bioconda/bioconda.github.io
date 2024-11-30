:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sgcp'
.. highlight: bash

bioconductor-sgcp
=================

.. conda:recipe:: bioconductor-sgcp
   :replaces_section_title:
   :noindex:

   SGCP\: A semi\-supervised pipeline for gene clustering using self\-training approach in gene co\-expression networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SGCP.html
   :license: GPL-3
   :recipe: /`bioconductor-sgcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sgcp/meta.yaml>`_

   SGC is a semi\-supervised pipeline for gene clustering in gene co\-expression networks. SGC consists of multiple novel steps that enable the computation of highly enriched modules in an unsupervised manner. But unlike all existing frameworks\, it further incorporates a novel step that leverages Gene Ontology information in a semi\-supervised clustering method that further improves the quality of the computed modules.


.. conda:package:: bioconductor-sgcp

   |downloads_bioconductor-sgcp| |docker_bioconductor-sgcp|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-gostats: ``>=2.68.0,<2.69.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-desctools: 
   :depends r-dplyr: 
   :depends r-expm: 
   :depends r-ggplot2: 
   :depends r-ggridges: 
   :depends r-openxlsx: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rspectra: 
   :depends r-xtable: 
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

      mamba install bioconductor-sgcp

   and update with::

      mamba update bioconductor-sgcp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sgcp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sgcp:<tag>

   (see `bioconductor-sgcp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sgcp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sgcp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sgcp
   :alt:   (downloads)
.. |docker_bioconductor-sgcp| image:: https://quay.io/repository/biocontainers/bioconductor-sgcp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sgcp
.. _`bioconductor-sgcp/tags`: https://quay.io/repository/biocontainers/bioconductor-sgcp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sgcp";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sgcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sgcp/README.html