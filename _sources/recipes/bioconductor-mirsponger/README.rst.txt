:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsponger'
.. highlight: bash

bioconductor-mirsponger
=======================

.. conda:recipe:: bioconductor-mirsponger
   :replaces_section_title:
   :noindex:

   Identification and analysis of miRNA sponge regulation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/miRspongeR.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsponger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger/meta.yaml>`_

   This package provides several functions to explore miRNA sponge \(also called ceRNA or miRNA decoy\) regulation from putative miRNA\-target interactions or\/and transcriptomics data \(including bulk\, single\-cell and spatial gene expression data\). It provides eight popular methods for identifying miRNA sponge interactions\, and an integrative method to integrate miRNA sponge interactions from different methods\, as well as the functions to validate miRNA sponge interactions\, and infer miRNA sponge modules\, conduct enrichment analysis of miRNA sponge modules\, and conduct survival analysis of miRNA sponge modules. By using a sample control variable strategy\, it provides a function to infer sample\-specific miRNA sponge interactions. In terms of sample\-specific miRNA sponge interactions\, it implements three similarity methods to construct sample\-sample correlation network.


.. conda:package:: bioconductor-mirsponger

   |downloads_bioconductor-mirsponger| |docker_bioconductor-mirsponger|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>1.20.1-1</code>,  <code>1.20.1-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.2-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``1.20.1-1``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.2-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-reactomepa: ``>=1.44.0,<1.45.0``
   :depends bioconductor-sponge: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-linkcomm: 
   :depends r-mcl: 
   :depends r-rcpp: 
   :depends r-survival: 
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

      mamba install bioconductor-mirsponger

   and update with::

      mamba update bioconductor-mirsponger

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirsponger

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsponger:<tag>

   (see `bioconductor-mirsponger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsponger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsponger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsponger
   :alt:   (downloads)
.. |docker_bioconductor-mirsponger| image:: https://quay.io/repository/biocontainers/bioconductor-mirsponger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsponger
.. _`bioconductor-mirsponger/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsponger?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirsponger";
        var versions = ["2.4.0","2.2.0","2.2.0","1.20.1","1.20.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html