:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rprimer'
.. highlight: bash

bioconductor-rprimer
====================

.. conda:recipe:: bioconductor-rprimer
   :replaces_section_title:
   :noindex:

   Design Degenerate Oligos from a Multiple DNA Sequence Alignment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rprimer.html
   :license: GPL-3
   :recipe: /`bioconductor-rprimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rprimer/meta.yaml>`_

   Functions\, workflow\, and a Shiny application for visualizing sequence conservation and designing degenerate primers\, probes\, and \(RT\)\-\(q\/d\)PCR assays from a multiple DNA sequence alignment. The results can be presented in data frame format and visualized as dashboard\-like plots. For more information\, please see the package vignette.


.. conda:package:: bioconductor-rprimer

   |downloads_bioconductor-rprimer| |docker_bioconductor-rprimer|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bslib: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-mathjaxr: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinyfeedback: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rprimer

   and update with::

      conda update bioconductor-rprimer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rprimer:<tag>

   (see `bioconductor-rprimer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rprimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rprimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rprimer
   :alt:   (downloads)
.. |docker_bioconductor-rprimer| image:: https://quay.io/repository/biocontainers/bioconductor-rprimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rprimer
.. _`bioconductor-rprimer/tags`: https://quay.io/repository/biocontainers/bioconductor-rprimer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rprimer";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rprimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rprimer/README.html