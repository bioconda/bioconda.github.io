:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sesame'
.. highlight: bash

bioconductor-sesame
===================

.. conda:recipe:: bioconductor-sesame
   :replaces_section_title:
   :noindex:

   SEnsible Step\-wise Analysis of DNA MEthylation BeadChips

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sesame.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sesame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesame/meta.yaml>`_

   Tools For analyzing Illumina Infinium DNA methylation arrays.SeSAMe provides utilities to support analyses of multiple generations of Infinium DNA methylation BeadChips\, including preprocessing\, quality control\, visualization and inference. SeSAMe features more accurate detection calling\, intelligenet inference of ethnicity\, sex and advanced quality control routines.


.. conda:package:: bioconductor-sesame

   |downloads_bioconductor-sesame| |docker_bioconductor-sesame|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-illuminaio: ``>=0.40.0,<0.41.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-preprocesscore: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-sesamedata: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-wheatmap: ``>=0.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sesame

   and update with::

      conda update bioconductor-sesame

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sesame:<tag>

   (see `bioconductor-sesame/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sesame| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesame.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sesame
   :alt:   (downloads)
.. |docker_bioconductor-sesame| image:: https://quay.io/repository/biocontainers/bioconductor-sesame/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesame
.. _`bioconductor-sesame/tags`: https://quay.io/repository/biocontainers/bioconductor-sesame?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sesame";
        var versions = ["1.16.0","1.12.0","1.10.3","1.8.2","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesame/README.html