:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-segmenter'
.. highlight: bash

bioconductor-segmenter
======================

.. conda:recipe:: bioconductor-segmenter
   :replaces_section_title:
   :noindex:

   Perform Chromatin Segmentation Analysis in R by Calling ChromHMM

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/segmenter.html
   :license: GPL-3
   :recipe: /`bioconductor-segmenter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmenter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-segmenter/meta.yaml>`_

   Chromatin segmentation analysis transforms ChIP\-seq data into signals over the genome. The latter represents the observed states in a multivariate Markov model to predict the chromatin\'s underlying states. ChromHMM\, written in Java\, integrates histone modification datasets to learn the chromatin states de\-novo. The goal of this package is to call chromHMM from within R\, capture the output files in an S4 object and interface to other relevant Bioconductor analysis tools. In addition\, segmenter provides functions to test\, select and visualize the output of the segmentation.


.. conda:package:: bioconductor-segmenter

   |downloads_bioconductor-segmenter| |docker_bioconductor-segmenter|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-bamsignals: ``>=1.30.0,<1.31.0``
   :depends bioconductor-chipseeker: ``>=1.34.0,<1.35.0``
   :depends bioconductor-chromhmmdata: ``>=0.99.0,<0.100.0``
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-segmenter

   and update with::

      conda update bioconductor-segmenter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-segmenter:<tag>

   (see `bioconductor-segmenter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-segmenter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-segmenter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-segmenter
   :alt:   (downloads)
.. |docker_bioconductor-segmenter| image:: https://quay.io/repository/biocontainers/bioconductor-segmenter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-segmenter
.. _`bioconductor-segmenter/tags`: https://quay.io/repository/biocontainers/bioconductor-segmenter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-segmenter";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-segmenter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-segmenter/README.html