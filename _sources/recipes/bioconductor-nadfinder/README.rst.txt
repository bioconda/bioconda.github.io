.. title:: Package Recipe 'bioconductor-nadfinder'
.. highlight: bash


bioconductor-nadfinder
======================

.. conda:recipe:: bioconductor-nadfinder
   :replaces_section_title:

   Nucleolus is an important structure inside the nucleus in eukaryotic cells. It is the site for transcribing rDNA into rRNA and for assembling ribosomes\, aka ribosome biogenesis. In addition\, nucleoli are dynamic hubs through which numerous proteins shuttle and contact specific non\-rDNA genomic loci. Deep sequencing analyses of DNA associated with isolated nucleoli \(NAD\- seq\) have shown that specific loci\, termed nucleolus\- associated domains \(NADs\) form frequent three\- dimensional associations with nucleoli. NAD\-seq has been used to study the biological functions of NAD and the dynamics of NAD distribution during embryonic stem cell \(ESC\) differentiation. Here\, we developed a Bioconductor package NADfinder for bioinformatic analysis of the NAD\-seq data\, including normalization\, smoothing\, peak calling\, peak trimming and annotation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/NADfinder.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-nadfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nadfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nadfinder/meta.yaml>`_

   


.. conda:package:: bioconductor-nadfinder

   |downloads_bioconductor-nadfinder| |docker_bioconductor-nadfinder|

   :versions: 1.6.0, 1.4.0, 1.2.0

   :depends: :conda:package:`bioconductor-atacseqqc` >=1.6.0,<1.7.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-csaw` >=1.16.0,<1.17.0 :conda:package:`bioconductor-empiricalbrownsmethod` >=1.10.0,<1.11.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-trackviewer` >=1.18.0,<1.19.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-baseline`  :conda:package:`r-corrplot`  :conda:package:`r-metap`  :conda:package:`r-rbamtools`  :conda:package:`r-signal`  

   :required~by: |required_by_bioconductor-nadfinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nadfinder

   and update with::

      conda update bioconductor-nadfinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-nadfinder


.. |required_by_bioconductor-nadfinder| conda:required_by:: bioconductor-nadfinder
.. |downloads_bioconductor-nadfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nadfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-nadfinder| image:: https://quay.io/repository/biocontainers/bioconductor-nadfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nadfinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nadfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nadfinder/README.html

