.. title:: Package Recipe 'bioconductor-gdcrnatools'
.. highlight: bash


bioconductor-gdcrnatools
========================

.. conda:recipe:: bioconductor-gdcrnatools
   :replaces_section_title:

   This is an easy\-to\-use package for downloading\, organizing\, and integrative analyzing RNA expression data in GDC with an emphasis on deciphering the lncRNA\-mRNA related ceRNA regulatory network in cancer. Three databases of lncRNA\-miRNA interactions including spongeScan\, starBase\, and miRcode\, as well as three databases of mRNA\-miRNA interactions including miRTarBase\, starBase\, and miRcode are incorporated into the package for ceRNAs network construction. limma\, edgeR\, and DESeq2 can be used to identify differentially expressed genes\/miRNAs. Functional enrichment analyses including GO\, KEGG\, and DO can be performed based on the clusterProfiler and DO packages. Both univariate CoxPH and KM survival analyses of multiple genes can be implemented in the package. Besides some routine visualization functions such as volcano plot\, bar plot\, and KM plot\, a few simply shiny apps are developed to facilitate visualization of results on a local webpage.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GDCRNATools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdcrnatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdcrnatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdcrnatools/meta.yaml>`_

   


.. conda:package:: bioconductor-gdcrnatools

   |downloads_bioconductor-gdcrnatools| |docker_bioconductor-gdcrnatools|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicdatacommons` >=1.6.0,<1.7.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-pathview` >=1.22.0,<1.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dt`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-jsonlite`  :conda:package:`r-rjson`  :conda:package:`r-shiny`  :conda:package:`r-survival`  :conda:package:`r-survminer`  :conda:package:`r-xml`  

   :required~by: |required_by_bioconductor-gdcrnatools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gdcrnatools

   and update with::

      conda update bioconductor-gdcrnatools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gdcrnatools


.. |required_by_bioconductor-gdcrnatools| conda:required_by:: bioconductor-gdcrnatools
.. |downloads_bioconductor-gdcrnatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdcrnatools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gdcrnatools| image:: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdcrnatools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdcrnatools/README.html

