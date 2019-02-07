.. title:: Package Recipe 'bioconductor-scoreinvhap'
.. highlight: bash


bioconductor-scoreinvhap
========================

.. conda:recipe:: bioconductor-scoreinvhap
   :replaces_section_title:

   scoreInvHap can get the samples\' inversion status of known inversions. scoreInvHap uses SNP data as input and requires the following information about the inversion\: genotype frequencies in the different haplotypes\, R2 between the region SNPs and inversion status and heterozygote genotypes in the reference. The package include this data for two well known inversions \(8p23 and 17q21.31\) and for two additional regions.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scoreInvHap.html
   :license: file LICENSE
   :recipe: /`bioconductor-scoreinvhap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scoreinvhap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scoreinvhap/meta.yaml>`_

   


.. conda:package:: bioconductor-scoreinvhap

   |downloads_bioconductor-scoreinvhap| |docker_bioconductor-scoreinvhap|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-snpstats` >=1.32.0,<1.33.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-scoreinvhap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scoreinvhap

   and update with::

      conda update bioconductor-scoreinvhap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scoreinvhap


.. |required_by_bioconductor-scoreinvhap| conda:required_by:: bioconductor-scoreinvhap
.. |downloads_bioconductor-scoreinvhap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scoreinvhap.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scoreinvhap| image:: https://quay.io/repository/biocontainers/bioconductor-scoreinvhap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scoreinvhap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scoreinvhap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scoreinvhap/README.html

