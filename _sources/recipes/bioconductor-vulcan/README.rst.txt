.. title:: Package Recipe 'bioconductor-vulcan'
.. highlight: bash


bioconductor-vulcan
===================

.. conda:recipe:: bioconductor-vulcan
   :replaces_section_title:

   Vulcan \(VirtUaL ChIP\-Seq Analysis through Networks\) is a package that interrogates gene regulatory networks to infer cofactors significantly enriched in a differential binding signature coming from ChIP\-Seq data. In order to do so\, our package combines strategies from different BioConductor packages\: DESeq for data normalization\, ChIPpeakAnno and DiffBind for annotation and definition of ChIP\-Seq genomic peaks\, csaw to define optimal peak width and viper for applying a regulatory network over a differential binding signature.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/vulcan.html
   :license: LGPL-3
   :recipe: /`bioconductor-vulcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vulcan/meta.yaml>`_

   


.. conda:package:: bioconductor-vulcan

   |downloads_bioconductor-vulcan| |docker_bioconductor-vulcan|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-chippeakanno` >=3.16.0,<3.17.0 :conda:package:`bioconductor-csaw` >=1.16.0,<1.17.0 :conda:package:`bioconductor-deseq` >=1.34.0,<1.35.0 :conda:package:`bioconductor-diffbind` >=2.10.0,<2.11.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-txdb.hsapiens.ucsc.hg19.knowngene` >=3.2.0,<3.3.0 :conda:package:`bioconductor-viper` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-catools`  :conda:package:`r-gplots`  :conda:package:`r-locfit`  :conda:package:`r-wordcloud`  :conda:package:`r-zoo`  

   :required~by: |required_by_bioconductor-vulcan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vulcan

   and update with::

      conda update bioconductor-vulcan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-vulcan


.. |required_by_bioconductor-vulcan| conda:required_by:: bioconductor-vulcan
.. |downloads_bioconductor-vulcan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vulcan.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-vulcan| image:: https://quay.io/repository/biocontainers/bioconductor-vulcan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vulcan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vulcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vulcan/README.html

