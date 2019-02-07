.. title:: Package Recipe 'bioconductor-derfinder'
.. highlight: bash


bioconductor-derfinder
======================

.. conda:recipe:: bioconductor-derfinder
   :replaces_section_title:

   This package provides functions for annotation\-agnostic differential expression analysis of RNA\-seq data.
   Two implementations of the DER Finder approach are included in this package\: \(1\) single base\-level F\-statistics and \(2\) DER identification at the expressed regions\-level.
   The DER Finder approach can also be used to identify differentially bounded ChIP\-seq peaks.


   :homepage: https://bioconductor.org/packages/3.8/bioc/html/derfinder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-derfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-derfinder/meta.yaml>`_
   :links: biotools: :biotools:`derfinder`

   


.. conda:package:: bioconductor-derfinder

   |downloads_bioconductor-derfinder| |docker_bioconductor-derfinder|

   :versions: 1.16.1, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-bumphunter` >=1.24.0,<1.25.0 :conda:package:`bioconductor-derfinderhelper` >=1.16.0,<1.17.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-hmisc`  

   :required~by: |required_by_bioconductor-derfinder|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-derfinder

   and update with::

      conda update bioconductor-derfinder

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-derfinder


.. |required_by_bioconductor-derfinder| conda:required_by:: bioconductor-derfinder
.. |downloads_bioconductor-derfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-derfinder.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-derfinder| image:: https://quay.io/repository/biocontainers/bioconductor-derfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-derfinder







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-derfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-derfinder/README.html

