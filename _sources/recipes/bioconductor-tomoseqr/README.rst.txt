:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tomoseqr'
.. highlight: bash

bioconductor-tomoseqr
=====================

.. conda:recipe:: bioconductor-tomoseqr
   :replaces_section_title:
   :noindex:

   R Package for Analyzing Tomo\-seq Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/tomoseqr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tomoseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoseqr/meta.yaml>`_

   \`tomoseqr\` is an R package for analyzing Tomo\-seq data. Tomo\-seq is a genome\-wide RNA tomography method that combines combining high\-throughput RNA sequencing with cryosectioning for spatially resolved transcriptomics. \`tomoseqr\` reconstructs 3D expression patterns from tomo\-seq data and visualizes the reconstructed 3D expression patterns.


.. conda:package:: bioconductor-tomoseqr

   |downloads_bioconductor-tomoseqr| |docker_bioconductor-tomoseqr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.6.0,<2.7.0``
   :depends r-animation: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-plotly: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-shiny: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tomoseqr

   and update with::

      conda update bioconductor-tomoseqr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tomoseqr:<tag>

   (see `bioconductor-tomoseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tomoseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomoseqr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tomoseqr
   :alt:   (downloads)
.. |docker_bioconductor-tomoseqr| image:: https://quay.io/repository/biocontainers/bioconductor-tomoseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomoseqr
.. _`bioconductor-tomoseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-tomoseqr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tomoseqr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomoseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomoseqr/README.html