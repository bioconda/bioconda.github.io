:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vdjdive'
.. highlight: bash

bioconductor-vdjdive
====================

.. conda:recipe:: bioconductor-vdjdive
   :replaces_section_title:
   :noindex:

   Analysis Tools for 10X V\(D\)J Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/VDJdive.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-vdjdive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vdjdive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vdjdive/meta.yaml>`_

   This package provides functions for handling and analyzing immune receptor repertoire data\, such as produced by the CellRanger V\(D\)J pipeline. This includes reading the data into R\, merging it with paired single\-cell data\, quantifying clonotype abundances\, calculating diversity metrics\, and producing common plots. It implements the E\-M Algorithm for clonotype assignment\, along with other methods\, which makes use of ambiguous cells for improved quantification.


.. conda:package:: bioconductor-vdjdive

   |downloads_bioconductor-vdjdive| |docker_bioconductor-vdjdive|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-vdjdive

   and update with::

      conda update bioconductor-vdjdive

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-vdjdive:<tag>

   (see `bioconductor-vdjdive/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-vdjdive| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vdjdive.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vdjdive
   :alt:   (downloads)
.. |docker_bioconductor-vdjdive| image:: https://quay.io/repository/biocontainers/bioconductor-vdjdive/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vdjdive
.. _`bioconductor-vdjdive/tags`: https://quay.io/repository/biocontainers/bioconductor-vdjdive?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vdjdive";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vdjdive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vdjdive/README.html