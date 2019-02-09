.. title:: Package Recipe 'bioconductor-csaw'
.. highlight: bash


bioconductor-csaw
=================

.. conda:recipe:: bioconductor-csaw
   :replaces_section_title:

   Detection of differentially bound regions in ChIP\-seq data with sliding windows\, with methods for normalization and proper FDR control.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/csaw.html
   :license: GPL-3
   :recipe: /`bioconductor-csaw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csaw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csaw/meta.yaml>`_
   :links: biotools: :biotools:`csaw`

   


.. conda:package:: bioconductor-csaw

   |downloads_bioconductor-csaw| |docker_bioconductor-csaw|

   :versions: 1.16.1, 1.16.0, 1.14.1, 1.12.0, 1.10.0, 1.6.1, 1.4.1, 1.4.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rhtslib` >=1.14.0,<1.15.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcpp`  

   :required~by: |required_by_bioconductor-csaw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-csaw

   and update with::

      conda update bioconductor-csaw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-csaw


.. |required_by_bioconductor-csaw| conda:required_by:: bioconductor-csaw
.. |downloads_bioconductor-csaw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-csaw.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-csaw| image:: https://quay.io/repository/biocontainers/bioconductor-csaw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-csaw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-csaw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-csaw/README.html

