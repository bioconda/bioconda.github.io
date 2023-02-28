:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanotator'
.. highlight: bash

bioconductor-nanotator
======================

.. conda:recipe:: bioconductor-nanotator
   :replaces_section_title:
   :noindex:

   Next generation structural variant annotation and classification

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/nanotatoR.html
   :license: file LICENSE
   :recipe: /`bioconductor-nanotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotator/meta.yaml>`_

   Whole genome sequencing \(WGS\) has successfully been used to identify single\-nucleotide variants \(SNV\)\, small insertions and deletions \(INDELs\) and\, more recently\, small copy number variants \(CNVs\). However\, due to utilization of short reads\, it is not well suited for identification of structural variants \(SV\). Optical mapping \(OM\) from Bionano Genomics\, utilizes long fluorescently labeled megabase size DNA molecules for de novo genome assembly and identification of SVs with a much higher sensitivity than WGS. Nevertheless\, currently available SV annotation tools have limited number of functions. NanotatoR is an R package written to provide a set of annotations for SVs identified by OM. It uses Database of Genomic Variants \(DGV\)\, Database of Chromosomal Imbalance and Phenotype in Humans Using Ensembl Resources \(DECIPHER\) as well as a subset \(154 samples\) of 1000 Genome Project to calculate the population frequencies of the SVs \(an optional internal cohort SV frequency calculation is also available\). NanotatoR creates a primary gene list \(PG\) from NCBI databases based on proband’s phenotype specific keywords and compares the list to the set of genes overlapping\/near SVs. The output is given in an Excel file format\, which is subdivided into multiple sheets based on SV type \(e.g.\, INDELs\, Inversions\, Translocations\). Users then have a choice to filter SVs using the provided annotations for de novo \(if parental samples are available\) or inherited rare variants.


.. conda:package:: bioconductor-nanotator

   |downloads_bioconductor-nanotator| |docker_bioconductor-nanotator|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-curl: 
   :depends r-dplyr: 
   :depends r-hash: ``>=2.2.6``
   :depends r-httr: 
   :depends r-knitr: 
   :depends r-openxlsx: ``>=4.0.17``
   :depends r-rentrez: ``>=1.1.0``
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-testthat: 
   :depends r-tidyverse: 
   :depends r-varfrompdb: 
   :depends r-xml: 
   :depends r-xml2r: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nanotator

   and update with::

      conda update bioconductor-nanotator

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanotator:<tag>

   (see `bioconductor-nanotator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanotator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanotator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanotator
   :alt:   (downloads)
.. |docker_bioconductor-nanotator| image:: https://quay.io/repository/biocontainers/bioconductor-nanotator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanotator
.. _`bioconductor-nanotator/tags`: https://quay.io/repository/biocontainers/bioconductor-nanotator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanotator";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanotator/README.html