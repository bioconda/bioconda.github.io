.. title:: Package Recipe 'bioconductor-seqsetvis'
.. highlight: bash


bioconductor-seqsetvis
======================

.. conda:recipe:: bioconductor-seqsetvis
   :replaces_section_title:

   seqsetvis enables the visualization and analysis of multiple genomic datasets. Although seqsetvis was designed for the comparison of mulitple ChIP\-seq datasets\, this package is domain\-agnostic and allows the processing of multiple genomic coordinate files \(bed\-like files\) and signal files \(bigwig files or bam pileups\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/seqsetvis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-seqsetvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsetvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqsetvis/meta.yaml>`_

   


.. conda:package:: bioconductor-seqsetvis

   |downloads_bioconductor-seqsetvis| |docker_bioconductor-seqsetvis|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-eulerr`  :conda:package:`r-ggplot2`  :conda:package:`r-png`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-seqsetvis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqsetvis

   and update with::

      conda update bioconductor-seqsetvis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqsetvis


.. |required_by_bioconductor-seqsetvis| conda:required_by:: bioconductor-seqsetvis
.. |downloads_bioconductor-seqsetvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqsetvis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqsetvis| image:: https://quay.io/repository/biocontainers/bioconductor-seqsetvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqsetvis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqsetvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqsetvis/README.html

