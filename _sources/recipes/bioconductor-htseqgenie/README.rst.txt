.. title:: Package Recipe 'bioconductor-htseqgenie'
.. highlight: bash


bioconductor-htseqgenie
=======================

.. conda:recipe:: bioconductor-htseqgenie
   :replaces_section_title:

   Libraries to perform NGS analysis.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/HTSeqGenie.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htseqgenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htseqgenie/meta.yaml>`_

   


.. conda:package:: bioconductor-htseqgenie

   |downloads_bioconductor-htseqgenie| |docker_bioconductor-htseqgenie|

   :versions: 4.12.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-chipseq` >=1.32.0,<1.33.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gmapr` >=1.24.0,<1.25.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`bioconductor-varianttools` >=1.24.0,<1.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cairo` >=1.5.5 :conda:package:`r-hwriter` >=1.3.0 

   :required~by: |required_by_bioconductor-htseqgenie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-htseqgenie

   and update with::

      conda update bioconductor-htseqgenie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-htseqgenie


.. |required_by_bioconductor-htseqgenie| conda:required_by:: bioconductor-htseqgenie
.. |downloads_bioconductor-htseqgenie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htseqgenie.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-htseqgenie| image:: https://quay.io/repository/biocontainers/bioconductor-htseqgenie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htseqgenie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htseqgenie/README.html

