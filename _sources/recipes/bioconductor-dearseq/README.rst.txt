:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dearseq'
.. highlight: bash

bioconductor-dearseq
====================

.. conda:recipe:: bioconductor-dearseq
   :replaces_section_title:
   :noindex:

   Differential Expression Analysis for RNA\-seq data through a robust variance component test

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/dearseq.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-dearseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dearseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dearseq/meta.yaml>`_

   Differential Expression Analysis RNA\-seq data with variance component score test accounting for data heteroscedasticity through precision weights. Perform both gene\-wise and gene set analyses\, and can deal with repeated or longitudinal data. Methods are detailed in\: Agniel D \& Hejblum BP \(2017\) Variance component score test for time\-course gene set analysis of longitudinal RNA\-seq data\, Biostatistics\, 18\(4\)\:589\-604. and Gauthier M\, Agniel D\, Thiébaut R \& Hejblum BP \(2019\). dearseq\: a variance component score test for RNA\-Seq differential analysis that effectively controls the false discovery rate\, \*bioRxiv\* 635714.


.. conda:package:: bioconductor-dearseq

   |downloads_bioconductor-dearseq| |docker_bioconductor-dearseq|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-kernsmooth: 
   :depends r-matrixstats: 
   :depends r-patchwork: 
   :depends r-pbapply: 
   :depends r-statmod: 
   :depends r-survey: 
   :depends r-viridislite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dearseq

   and update with::

      conda update bioconductor-dearseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dearseq:<tag>

   (see `bioconductor-dearseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dearseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dearseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dearseq
   :alt:   (downloads)
.. |docker_bioconductor-dearseq| image:: https://quay.io/repository/biocontainers/bioconductor-dearseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dearseq
.. _`bioconductor-dearseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dearseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dearseq";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dearseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dearseq/README.html