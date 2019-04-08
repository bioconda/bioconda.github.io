:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-intad'
.. highlight: bash

bioconductor-intad
==================

.. conda:recipe:: bioconductor-intad
   :replaces_section_title:

   The package is focused on the detection of correlation between expressed genes and selected epigenomic signals i.e. enhancers obtained from ChIP\-seq data within topologically associated domains \(TADs\). Various parameters can be controlled to investigate the influence of external factors and visualization plots are available for each analysis step.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/InTAD.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-intad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-intad/meta.yaml>`_

   


.. conda:package:: bioconductor-intad

   |downloads_bioconductor-intad| |docker_bioconductor-intad|

   :versions: 1.2.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-multiassayexperiment: >=1.8.0,<1.9.0
   :depends bioconductor-qvalue: >=2.14.0,<2.15.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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
   :alt:   (downloads)
.. |docker_bioconductor-intad| image:: https://quay.io/repository/biocontainers/bioconductor-intad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intad
.. _`bioconductor-intad/tags`: https://quay.io/repository/biocontainers/bioconductor-intad?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intad/README.html