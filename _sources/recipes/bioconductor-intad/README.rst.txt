:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intad'
.. highlight: bash

bioconductor-intad
==================

.. conda:recipe:: bioconductor-intad
   :replaces_section_title:
   :noindex:

   Search for correlation between epigenetic signals and gene expression in TADs

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/InTAD.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-intad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intad/meta.yaml>`_

   The package is focused on the detection of correlation between expressed genes and selected epigenomic signals \(i.e. enhancers obtained from ChIP\-seq data\) either within topologically associated domains \(TADs\) or between chromatin contact loop anchors. Various parameters can be controlled to investigate the influence of external factors and visualization plots are available for each analysis step.


.. conda:package:: bioconductor-intad

   |downloads_bioconductor-intad| |docker_bioconductor-intad|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-multiassayexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-qvalue: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-mclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-intad

   and update with::

      conda update bioconductor-intad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-intad:<tag>

   (see `bioconductor-intad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-intad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-intad
   :alt:   (downloads)
.. |docker_bioconductor-intad| image:: https://quay.io/repository/biocontainers/bioconductor-intad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intad
.. _`bioconductor-intad/tags`: https://quay.io/repository/biocontainers/bioconductor-intad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-intad";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intad/README.html