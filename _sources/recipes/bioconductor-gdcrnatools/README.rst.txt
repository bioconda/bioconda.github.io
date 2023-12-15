:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdcrnatools'
.. highlight: bash

bioconductor-gdcrnatools
========================

.. conda:recipe:: bioconductor-gdcrnatools
   :replaces_section_title:
   :noindex:

   GDCRNATools\: an R\/Bioconductor package for integrative analysis of lncRNA\, mRNA\, and miRNA data in GDC

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GDCRNATools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdcrnatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdcrnatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdcrnatools/meta.yaml>`_

   This is an easy\-to\-use package for downloading\, organizing\, and integrative analyzing RNA expression data in GDC with an emphasis on deciphering the lncRNA\-mRNA related ceRNA regulatory network in cancer. Three databases of lncRNA\-miRNA interactions including spongeScan\, starBase\, and miRcode\, as well as three databases of mRNA\-miRNA interactions including miRTarBase\, starBase\, and miRcode are incorporated into the package for ceRNAs network construction. limma\, edgeR\, and DESeq2 can be used to identify differentially expressed genes\/miRNAs. Functional enrichment analyses including GO\, KEGG\, and DO can be performed based on the clusterProfiler and DO packages. Both univariate CoxPH and KM survival analyses of multiple genes can be implemented in the package. Besides some routine visualization functions such as volcano plot\, bar plot\, and KM plot\, a few simply shiny apps are developed to facilitate visualization of results on a local webpage.


.. conda:package:: bioconductor-gdcrnatools

   |downloads_bioconductor-gdcrnatools| |docker_bioconductor-gdcrnatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomicdatacommons: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-pathview: ``>=1.42.0,<1.43.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-jsonlite: 
   :depends r-rjson: 
   :depends r-shiny: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-xml: 
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

      mamba install bioconductor-gdcrnatools

   and update with::

      mamba update bioconductor-gdcrnatools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdcrnatools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdcrnatools:<tag>

   (see `bioconductor-gdcrnatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdcrnatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdcrnatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdcrnatools
   :alt:   (downloads)
.. |docker_bioconductor-gdcrnatools| image:: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools
.. _`bioconductor-gdcrnatools/tags`: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdcrnatools";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html