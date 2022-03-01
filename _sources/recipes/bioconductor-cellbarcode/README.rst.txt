:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbarcode'
.. highlight: bash

bioconductor-cellbarcode
========================

.. conda:recipe:: bioconductor-cellbarcode
   :replaces_section_title:
   :noindex:

   Cellular DNA Barcode Analysis toolkit

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CellBarcode.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cellbarcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbarcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbarcode/meta.yaml>`_

   This package performs Cellular DNA Barcode \(genetic lineage tracing\) analysis. The package can handle all kinds of DNA barcodes\, as long as the barcode within a single sequencing read and has a pattern which can be matched by a regular expression. This package can handle barcode with flexible length\, with or without UMI \(unique molecular identifier\). This tool also can be used for pre\-processing of some amplicon data such as CRISPR gRNA screening\, immune repertoire sequencing and meta genome data.


.. conda:package:: bioconductor-cellbarcode

   |downloads_bioconductor-cellbarcode| |docker_bioconductor-cellbarcode|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-shortread: ``>=1.52.0,<1.53.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ckmeans.1d.dp: 
   :depends r-data.table: ``>=1.12.6``
   :depends r-egg: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rcpp: ``>=1.0.5``
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellbarcode

   and update with::

      conda update bioconductor-cellbarcode

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellbarcode:<tag>

   (see `bioconductor-cellbarcode/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellbarcode| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbarcode.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbarcode
   :alt:   (downloads)
.. |docker_bioconductor-cellbarcode| image:: https://quay.io/repository/biocontainers/bioconductor-cellbarcode/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbarcode
.. _`bioconductor-cellbarcode/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbarcode?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellbarcode";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbarcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbarcode/README.html