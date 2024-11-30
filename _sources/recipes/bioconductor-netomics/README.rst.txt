:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netomics'
.. highlight: bash

bioconductor-netomics
=====================

.. conda:recipe:: bioconductor-netomics
   :replaces_section_title:
   :noindex:

   Multi\-Omics \(time\-course\) network\-based integration and interpretation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/netOmics.html
   :license: GPL-3
   :recipe: /`bioconductor-netomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netomics/meta.yaml>`_

   netOmics is a multi\-omics networks builder and explorer. It uses a combination of network inference algorithms and and knowledge\-based graphs to build multi\-layered networks. The package can be combined with timeOmics to incorporate time\-course expression data and build sub\-networks from multi\-omics kinetic clusters. Finally\, from the generated multi\-omics networks\, propagation analyses allow the identification of missing biological functions \(1\)\, multi\-omics mechanisms \(2\) and molecules between kinetic clusters \(3\). This helps to resolve complex regulatory mechanisms.


.. conda:package:: bioconductor-netomics

   |downloads_bioconductor-netomics| |docker_bioconductor-netomics|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-minet: ``>=3.60.0,<3.61.0``
   :depends bioconductor-randomwalkrestartmh: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gprofiler2: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-tibble: 
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

      mamba install bioconductor-netomics

   and update with::

      mamba update bioconductor-netomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-netomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netomics:<tag>

   (see `bioconductor-netomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netomics
   :alt:   (downloads)
.. |docker_bioconductor-netomics| image:: https://quay.io/repository/biocontainers/bioconductor-netomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netomics
.. _`bioconductor-netomics/tags`: https://quay.io/repository/biocontainers/bioconductor-netomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netomics";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netomics/README.html