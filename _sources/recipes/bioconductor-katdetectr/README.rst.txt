:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-katdetectr'
.. highlight: bash

bioconductor-katdetectr
=======================

.. conda:recipe:: bioconductor-katdetectr
   :replaces_section_title:
   :noindex:

   Detection\, Characterization and Visualization of Kataegis in Sequencing Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/katdetectr.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-katdetectr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-katdetectr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-katdetectr/meta.yaml>`_

   Kataegis refers to the occurrence of regional hypermutation and is a phenomenon observed in a wide range of malignancies. Using changepoint detection katdetectr aims to identify putative kataegis foci from common data\-formats housing genomic variants. Katdetectr has shown to be a robust package for the detection\, characterization and visualization of kataegis.


.. conda:package:: bioconductor-katdetectr

   |downloads_bioconductor-katdetectr| |docker_bioconductor-katdetectr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-maftools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-plyranges: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-variantannotation: ``>=1.44.0,<1.45.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-changepoint: ``>=2.2.3``
   :depends r-changepoint.np: ``>=1.0.3``
   :depends r-checkmate: ``>=2.0.0``
   :depends r-dplyr: ``>=1.0.8``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-ggtext: ``>=0.1.1``
   :depends r-rdpack: ``>=2.3.1``
   :depends r-rlang: ``>=1.0.2``
   :depends r-tibble: ``>=3.1.6``
   :depends r-tidyr: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-katdetectr

   and update with::

      conda update bioconductor-katdetectr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-katdetectr:<tag>

   (see `bioconductor-katdetectr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-katdetectr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-katdetectr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-katdetectr
   :alt:   (downloads)
.. |docker_bioconductor-katdetectr| image:: https://quay.io/repository/biocontainers/bioconductor-katdetectr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-katdetectr
.. _`bioconductor-katdetectr/tags`: https://quay.io/repository/biocontainers/bioconductor-katdetectr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-katdetectr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-katdetectr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-katdetectr/README.html