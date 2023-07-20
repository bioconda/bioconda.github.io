:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rificomparative'
.. highlight: bash

bioconductor-rificomparative
============================

.. conda:recipe:: bioconductor-rificomparative
   :replaces_section_title:
   :noindex:

   \'rifiComparative\' compares the outputs of \'rifi\' under two different conditions.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rifiComparative.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-rificomparative <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rificomparative>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rificomparative/meta.yaml>`_

   \'rifiComparative\' is an extension of the \'rifi\' package. It is designed to compare the outputs of \'rifi\' under two different conditions by utilizing the half\-life and mRNA at time 0 segments. To perform the segmentation\, it takes into account the difference in half\-life between the two conditions and the log2FC \(fold change\) of the mRNA at time 0. This package offers various functionalities such as segmentation\, statistical analysis\, summary tables\, visualization of fragments\, and additional plots that can be helpful for further analysis.


.. conda:package:: bioconductor-rificomparative

   |downloads_bioconductor-rificomparative| |docker_bioconductor-rificomparative|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-dta: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-devtools: 
   :depends r-domc: 
   :depends r-dplyr: 
   :depends r-egg: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-lsd: 
   :depends r-nnet: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-writexl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rificomparative

   and update with::

      conda update bioconductor-rificomparative

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rificomparative:<tag>

   (see `bioconductor-rificomparative/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rificomparative| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rificomparative.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rificomparative
   :alt:   (downloads)
.. |docker_bioconductor-rificomparative| image:: https://quay.io/repository/biocontainers/bioconductor-rificomparative/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rificomparative
.. _`bioconductor-rificomparative/tags`: https://quay.io/repository/biocontainers/bioconductor-rificomparative?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rificomparative";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rificomparative/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rificomparative/README.html