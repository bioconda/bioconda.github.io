.. title:: Package Recipe 'bioconductor-appreci8r'
.. highlight: bash


bioconductor-appreci8r
======================

.. conda:recipe:: bioconductor-appreci8r
   :replaces_section_title:

   The appreci8R is an R version of our appreci8\-algorithm \- A Pipeline for PREcise variant Calling Integrating 8 tools. Variant calling results of our standard appreci8\-tools \(GATK\, Platypus\, VarScan\, FreeBayes\, LoFreq\, SNVer\, samtools and VarDict\)\, as well as up to 5 additional tools is combined\, evaluated and filtered.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/appreci8R.html
   :license: LGPL-3
   :recipe: /`bioconductor-appreci8r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-appreci8r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-appreci8r/meta.yaml>`_

   


.. conda:package:: bioconductor-appreci8r

   |downloads_bioconductor-appreci8r| |docker_bioconductor-appreci8r|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19` >=1.4.0,<1.5.0 :conda:package:`bioconductor-cosmic.67` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicscores` >=1.6.0,<1.7.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-mafdb.1kgenomes.phase3.hs37d5` >=3.7.0,<3.8.0 :conda:package:`bioconductor-mafdb.esp6500si.v2.ssa137.hs37d5` >=3.7.0,<3.8.0 :conda:package:`bioconductor-mafdb.exac.r1.0.hs37d5` >=3.7.0,<3.8.0 :conda:package:`bioconductor-mafdb.gnomadex.r2.0.1.hs37d5` >=3.8.0,<3.9.0 :conda:package:`bioconductor-polyphen.hsapiens.dbsnp131` >=1.0.0,<1.1.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-sift.hsapiens.dbsnp137` >=1.0.0,<1.1.0 :conda:package:`bioconductor-snplocs.hsapiens.dbsnp144.grch37` >=0.99.0,<0.100.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene` >=3.2.0,<3.3.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`bioconductor-xtrasnplocs.hsapiens.dbsnp144.grch37` >=0.99.0,<0.100.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dt`  :conda:package:`r-openxlsx`  :conda:package:`r-rentrez`  :conda:package:`r-rsnps`  :conda:package:`r-seqinr`  :conda:package:`r-shiny`  :conda:package:`r-shinyjs`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-appreci8r|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-appreci8r

   and update with::

      conda update bioconductor-appreci8r

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-appreci8r


.. |required_by_bioconductor-appreci8r| conda:required_by:: bioconductor-appreci8r
.. |downloads_bioconductor-appreci8r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-appreci8r.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-appreci8r| image:: https://quay.io/repository/biocontainers/bioconductor-appreci8r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-appreci8r







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-appreci8r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-appreci8r/README.html

