:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rarevariantvis'
.. highlight: bash

bioconductor-rarevariantvis
===========================

.. conda:recipe:: bioconductor-rarevariantvis
   :replaces_section_title:

   Second version of RareVariantVis package aims to provide comprehensive information about rare variants for your genome data. It annotates\, filters and presents genomic variants \(especially rare ones\) in a global\, per chromosome way. For discovered rare variants CRISPR guide RNAs are designed\, so the user can plan further functional studies. Large structural variants\, including copy number variants are also supported. Package accepts variants directly from variant caller \- for example GATK or Speedseq. Output of package are lists of variants together with adequate visualization. Visualization of variants is performed in two ways \- standard that outputs png figures and interactive that uses JavaScript d3 package. Interactive visualization allows to analyze trio\/family data\, for example in search for causative variants in rare Mendelian diseases\, in point\-and\-click interface. The package includes homozygous region caller and allows to analyse whole human genomes in less than 30 minutes on a desktop computer. RareVariantVis disclosed novel causes of several rare monogenic disorders\, including one with non\-coding causative variant \- keratolythic winter erythema.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/RareVariantVis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rarevariantvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rarevariantvis/meta.yaml>`_
   :links: biotools: :biotools:`rarevariantvis`, doi: :doi:`10.1093/bioinformatics/btw359`

   


.. conda:package:: bioconductor-rarevariantvis

   |downloads_bioconductor-rarevariantvis| |docker_bioconductor-rarevariantvis|

   :versions: 2.10.0-0, 2.8.0-0, 2.6.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: >=1.4.0,<1.5.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-genomicscores: >=1.6.0,<1.7.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-phastcons100way.ucsc.hg19: >=3.7.0,<3.8.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: >=3.2.0,<3.3.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-googlevis: 
   :depends r-gtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rarevariantvis

   and update with::

      conda update bioconductor-rarevariantvis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rarevariantvis:<tag>

   (see `bioconductor-rarevariantvis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rarevariantvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rarevariantvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rarevariantvis
   :alt:   (downloads)
.. |docker_bioconductor-rarevariantvis| image:: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis
.. _`bioconductor-rarevariantvis/tags`: https://quay.io/repository/biocontainers/bioconductor-rarevariantvis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rarevariantvis/README.html