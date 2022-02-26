:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fraser'
.. highlight: bash

bioconductor-fraser
===================

.. conda:recipe:: bioconductor-fraser
   :replaces_section_title:
   :noindex:

   Find RAre Splicing Events in RNA\-Seq Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/FRASER.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fraser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fraser/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41467-020-20573-7`

   Detection of rare aberrant splicing events in transcriptome profiles. The workflow aims to assist the diagnostics in the field of rare diseases where RNA\-seq is performed to identify aberrant splicing defects.


.. conda:package:: bioconductor-fraser

   |downloads_bioconductor-fraser| |docker_bioconductor-fraser|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-hdf5array: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-outrider: ``>=1.12.0,<1.13.0``
   :depends bioconductor-pcamethods: ``>=1.86.0,<1.87.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rsubread: ``>=2.8.0,<2.9.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=12.0.1``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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


.. raw:: html

    <script>
        var package = "bioconductor-fraser";
        var versions = ["1.6.0","1.6.0","1.4.0","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fraser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fraser/README.html