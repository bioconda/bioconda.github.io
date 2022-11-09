:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ribodipa'
.. highlight: bash

bioconductor-ribodipa
=====================

.. conda:recipe:: bioconductor-ribodipa
   :replaces_section_title:
   :noindex:

   Differential pattern analysis for Ribo\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/RiboDiPA.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-ribodipa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribodipa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ribodipa/meta.yaml>`_

   This package performs differential pattern analysis for Ribo\-seq data. It identifies genes with significantly different patterns in the ribosome footprint between two conditions. RiboDiPA contains five major components including bam file processing\, P\-site mapping\, data binning\, differential pattern analysis and footprint visualization.


.. conda:package:: bioconductor-ribodipa

   |downloads_bioconductor-ribodipa| |docker_bioconductor-ribodipa|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=14.0.4``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-elitism: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrixstats: 
   :depends r-rcpp: ``>=1.0.2``
   :depends r-reldist: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ribodipa

   and update with::

      conda update bioconductor-ribodipa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ribodipa:<tag>

   (see `bioconductor-ribodipa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ribodipa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ribodipa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ribodipa
   :alt:   (downloads)
.. |docker_bioconductor-ribodipa| image:: https://quay.io/repository/biocontainers/bioconductor-ribodipa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ribodipa
.. _`bioconductor-ribodipa/tags`: https://quay.io/repository/biocontainers/bioconductor-ribodipa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ribodipa";
        var versions = ["1.6.0","1.2.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ribodipa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ribodipa/README.html