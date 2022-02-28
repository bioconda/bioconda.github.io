:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sracipe'
.. highlight: bash

bioconductor-sracipe
====================

.. conda:recipe:: bioconductor-sracipe
   :replaces_section_title:
   :noindex:

   Systems biology tool to simulate gene regulatory circuits

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sRACIPE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sracipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sracipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sracipe/meta.yaml>`_

   sRACIPE implements a randomization\-based method for gene circuit modeling. It allows us to study the effect of both the gene expression noise and the parametric variation on any gene regulatory circuit \(GRC\) using only its topology\, and simulates an ensemble of models with random kinetic parameters at multiple noise levels. Statistical analysis of the generated gene expressions reveals the basin of attraction and stability of various phenotypic states and their changes associated with intrinsic and extrinsic noises. sRACIPE provides a holistic picture to evaluate the effects of both the stochastic nature of cellular processes and the parametric variation.


.. conda:package:: bioconductor-sracipe

   |downloads_bioconductor-sracipe| |docker_bioconductor-sracipe|

   :versions:
      
      

      ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-htmlwidgets: 
   :depends r-mass: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-umap: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sracipe

   and update with::

      conda update bioconductor-sracipe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sracipe:<tag>

   (see `bioconductor-sracipe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sracipe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sracipe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sracipe
   :alt:   (downloads)
.. |docker_bioconductor-sracipe| image:: https://quay.io/repository/biocontainers/bioconductor-sracipe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sracipe
.. _`bioconductor-sracipe/tags`: https://quay.io/repository/biocontainers/bioconductor-sracipe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sracipe";
        var versions = ["1.10.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sracipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sracipe/README.html