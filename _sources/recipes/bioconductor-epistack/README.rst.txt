:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epistack'
.. highlight: bash

bioconductor-epistack
=====================

.. conda:recipe:: bioconductor-epistack
   :replaces_section_title:
   :noindex:

   Heatmaps of Stack Profiles from Epigenetic Signals

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/epistack.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epistack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epistack/meta.yaml>`_

   The epistack package main objective is the visualizations of stacks of genomic tracks \(such as\, but not restricted to\, ChIP\-seq\, ATAC\-seq\, DNA methyation or genomic conservation data\) centered at genomic regions of interest. epistack needs three different inputs\: 1\) a genomic score objects\, such as ChIP\-seq coverage or DNA methylation values\, provided as a \`GRanges\` \(easily obtained from \`bigwig\` or \`bam\` files\). 2\) a list of feature of interest\, such as peaks or transcription start sites\, provided as a \`GRanges\` \(easily obtained from \`gtf\` or \`bed\` files\). 3\) a score to sort the features\, such as peak height or gene expression value.


.. conda:package:: bioconductor-epistack

   |downloads_bioconductor-epistack| |docker_bioconductor-epistack|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-plotrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epistack

   and update with::

      conda update bioconductor-epistack

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epistack:<tag>

   (see `bioconductor-epistack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epistack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epistack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epistack
   :alt:   (downloads)
.. |docker_bioconductor-epistack| image:: https://quay.io/repository/biocontainers/bioconductor-epistack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epistack
.. _`bioconductor-epistack/tags`: https://quay.io/repository/biocontainers/bioconductor-epistack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epistack";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epistack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epistack/README.html