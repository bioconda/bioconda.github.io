:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trare'
.. highlight: bash

bioconductor-trare
==================

.. conda:recipe:: bioconductor-trare
   :replaces_section_title:
   :noindex:

   Transcriptional Rewiring

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/TraRe.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-trare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trare/meta.yaml>`_

   TraRe \(Transcriptional Rewiring\) is an R package which contains the necessary tools to carry out several functions. Identification of module\-based gene regulatory networks \(GRN\)\; score\-based classification of these modules via a rewiring test\; visualization of rewired modules to analyze condition\-based GRN deregulation and drop out genes recovering via cliques methodology. For each tool\, an html report can be generated containing useful information about the generated GRN and statistical data about the performed tests. These tools have been developed considering sequenced data \(RNA\-Seq\).


.. conda:package:: bioconductor-trare

   |downloads_bioconductor-trare| |docker_bioconductor-trare|

   :versions:
      
      

      ``1.5.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dqrng: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-hash: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-pvclust: 
   :depends r-r.utils: 
   :depends r-vbsr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trare

   and update with::

      conda update bioconductor-trare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trare:<tag>

   (see `bioconductor-trare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trare
   :alt:   (downloads)
.. |docker_bioconductor-trare| image:: https://quay.io/repository/biocontainers/bioconductor-trare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trare
.. _`bioconductor-trare/tags`: https://quay.io/repository/biocontainers/bioconductor-trare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trare";
        var versions = ["1.5.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trare/README.html