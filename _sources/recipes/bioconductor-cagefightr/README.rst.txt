.. title:: Package Recipe 'bioconductor-cagefightr'
.. highlight: bash


bioconductor-cagefightr
=======================

.. conda:recipe:: bioconductor-cagefightr
   :replaces_section_title:

   CAGE is a widely used high throughput assay for measuring transcription start site \(TSS\) activity. CAGEfightR is an R\/Bioconductor package for performing a wide range of common data analysis tasks for CAGE and 5\'\-end data in general. Core functionality includes\: import of CAGE TSSs \(CTSSs\)\, tag \(or unidirectional\) clustering for TSS identification\, bidirectional clustering for enhancer identification\, annotation with transcript and gene models\, correlation of TSS and enhancer expression\, calculation of TSS shapes\, quantification of CAGE expression as expression matrices and genome brower visualization.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CAGEfightR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cagefightr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cagefightr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cagefightr/meta.yaml>`_

   


.. conda:package:: bioconductor-cagefightr

   |downloads_bioconductor-cagefightr| |docker_bioconductor-cagefightr|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicinteractions` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-gviz` >=1.26.0,<1.27.0 :conda:package:`bioconductor-interactionset` >=1.10.0,<1.11.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-assertthat` >=0.2.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-grr` >=0.9.5 :conda:package:`r-matrix` >=1.2-12 :conda:package:`r-matrix.utils` >=0.9.6 :conda:package:`r-pryr` >=0.1.3 

   :required~by: |required_by_bioconductor-cagefightr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cagefightr

   and update with::

      conda update bioconductor-cagefightr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cagefightr


.. |required_by_bioconductor-cagefightr| conda:required_by:: bioconductor-cagefightr
.. |downloads_bioconductor-cagefightr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cagefightr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cagefightr| image:: https://quay.io/repository/biocontainers/bioconductor-cagefightr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cagefightr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cagefightr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cagefightr/README.html

