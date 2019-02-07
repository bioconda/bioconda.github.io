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

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-multiassayexperiment` >=1.8.0,<1.9.0 :conda:package:`bioconductor-qvalue` >=2.14.0,<2.15.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-ggpubr`  :conda:package:`r-mclust`  

   :required~by: |required_by_bioconductor-intad|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-intad

   and update with::

      conda update bioconductor-intad

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-intad


.. |required_by_bioconductor-intad| conda:required_by:: bioconductor-intad
.. |downloads_bioconductor-intad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-intad.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-intad| image:: https://quay.io/repository/biocontainers/bioconductor-intad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-intad







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-intad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-intad/README.html

