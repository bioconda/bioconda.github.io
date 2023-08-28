:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cemitool'
.. highlight: bash

bioconductor-cemitool
=====================

.. conda:recipe:: bioconductor-cemitool
   :replaces_section_title:
   :noindex:

   Co\-expression Modules identification Tool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CEMiTool.html
   :license: GPL-3
   :recipe: /`bioconductor-cemitool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cemitool/meta.yaml>`_

   The CEMiTool package unifies the discovery and the analysis of coexpression gene modules in a fully automatic manner\, while providing a user\-friendly html report with high quality graphs. Our tool evaluates if modules contain genes that are over\-represented by specific pathways or that are altered in a specific sample group. Additionally\, CEMiTool is able to integrate transcriptomic data with interactome information\, identifying the potential hubs on each network.


.. conda:package:: bioconductor-cemitool

   |downloads_bioconductor-cemitool| |docker_bioconductor-cemitool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.3-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.1-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.6.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-fgsea: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.9.4``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-fastcluster: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggpmisc: 
   :depends r-ggrepel: 
   :depends r-ggthemes: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-htmltools: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-network: 
   :depends r-pracma: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-sna: 
   :depends r-stringr: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cemitool

   and update with::

      mamba update bioconductor-cemitool

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cemitool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cemitool:<tag>

   (see `bioconductor-cemitool/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cemitool| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cemitool.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cemitool
   :alt:   (downloads)
.. |docker_bioconductor-cemitool| image:: https://quay.io/repository/biocontainers/bioconductor-cemitool/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cemitool
.. _`bioconductor-cemitool/tags`: https://quay.io/repository/biocontainers/bioconductor-cemitool?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cemitool";
        var versions = ["1.24.0","1.22.0","1.18.1","1.16.0","1.14.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cemitool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cemitool/README.html