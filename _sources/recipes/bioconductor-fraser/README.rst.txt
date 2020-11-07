:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fraser'
.. highlight: bash

bioconductor-fraser
===================

.. conda:recipe:: bioconductor-fraser
   :replaces_section_title:
   :noindex:

   Find RAre Splicing Events in RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/FRASER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fraser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser/meta.yaml>`_

   Detection of rare aberrant splicing events in transcriptome profiles. The workflow aims to assist the diagnostics in the field of rare diseases where RNA\-seq is performed to identify aberrant splicing defects.


.. conda:package:: bioconductor-fraser

   |downloads_bioconductor-fraser| |docker_bioconductor-fraser|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biocgenerics: ``>=0.36.0,<0.37.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-bsgenome: ``>=1.58.0,<1.59.0``
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.12.0,<1.13.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicfeatures: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-hdf5array: ``>=1.18.0,<1.19.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-outrider: ``>=1.8.0,<1.9.0``
   :depends bioconductor-pcamethods: ``>=1.82.0,<1.83.0``
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-rsubread: ``>=2.4.0,<2.5.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bbmisc: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-extradistr: 
   :depends r-generics: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-prroc: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-tibble: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fraser

   and update with::

      conda update bioconductor-fraser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fraser:<tag>

   (see `bioconductor-fraser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fraser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fraser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fraser
   :alt:   (downloads)
.. |docker_bioconductor-fraser| image:: https://quay.io/repository/biocontainers/bioconductor-fraser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fraser
.. _`bioconductor-fraser/tags`: https://quay.io/repository/biocontainers/bioconductor-fraser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fraser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fraser/README.html