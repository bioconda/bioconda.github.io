:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-borealis'
.. highlight: bash

bioconductor-borealis
=====================

.. conda:recipe:: bioconductor-borealis
   :replaces_section_title:
   :noindex:

   Bisulfite\-seq OutlieR mEthylation At singLe\-sIte reSolution

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/borealis.html
   :license: GPL-3
   :recipe: /`bioconductor-borealis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-borealis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-borealis/meta.yaml>`_

   Borealis is an R library performing outlier analysis for count\-based bisulfite sequencing data. It detectes outlier methylated CpG sites from bisulfite sequencing \(BS\-seq\). The core of Borealis is modeling Beta\-Binomial distributions. This can be useful for rare disease diagnoses.


.. conda:package:: bioconductor-borealis

   |downloads_bioconductor-borealis| |docker_bioconductor-borealis|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsseq: ``>=1.34.0,<1.35.0``
   :depends bioconductor-dss: ``>=2.46.0,<2.47.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cowplot: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-gamlss: 
   :depends r-gamlss.dist: 
   :depends r-ggplot2: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-rlang: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-borealis

   and update with::

      conda update bioconductor-borealis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-borealis:<tag>

   (see `bioconductor-borealis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-borealis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-borealis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-borealis
   :alt:   (downloads)
.. |docker_bioconductor-borealis| image:: https://quay.io/repository/biocontainers/bioconductor-borealis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-borealis
.. _`bioconductor-borealis/tags`: https://quay.io/repository/biocontainers/bioconductor-borealis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-borealis";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-borealis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-borealis/README.html