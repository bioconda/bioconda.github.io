:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decoupler'
.. highlight: bash

bioconductor-decoupler
======================

.. conda:recipe:: bioconductor-decoupler
   :replaces_section_title:
   :noindex:

   Package to decouple gene sets from statistics

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/decoupleR.html
   :license: GPL-3
   :recipe: /`bioconductor-decoupler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decoupler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decoupler/meta.yaml>`_

   Transcriptome profiling followed by differential gene expression analysis often leads to lists of genes that are hard to analyze and interpret. Downstream analysis tools can be used to summarize deregulation events into a smaller set of biologically interpretable features.  In particular\, methods that estimate the activity of transcription factors \(TFs\) from gene expression are commonly used. It has been shown that the transcriptional targets of a TF yield a much more robust estimation of the TF activity than observing the expression of the TF itself. Consequently\, for the estimation of transcription factor activities\, a network of transcriptional regulation is required in combination with a statistical algorithm that summarizes the expression of the target genes into a single activity score. Over the years\, many different regulatory networks and statistical algorithms have been developed\, mostly in a fixed combination of one network and one algorithm. To systematically evaluate both networks and algorithms\, we developed decoupleR \, an R package that allows users to apply efficiently any combination provided.


.. conda:package:: bioconductor-decoupler

   |downloads_bioconductor-decoupler| |docker_bioconductor-decoupler|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-aucell: ``>=1.16.0,<1.17.0``
   :depends bioconductor-fgsea: ``>=1.20.0,<1.21.0``
   :depends bioconductor-gsva: ``>=1.42.0,<1.43.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-viper: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-ranger: 
   :depends r-rlang: 
   :depends r-robustrankaggreg: 
   :depends r-rpart: 
   :depends r-speedglm: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-decoupler

   and update with::

      conda update bioconductor-decoupler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decoupler:<tag>

   (see `bioconductor-decoupler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decoupler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decoupler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decoupler
   :alt:   (downloads)
.. |docker_bioconductor-decoupler| image:: https://quay.io/repository/biocontainers/bioconductor-decoupler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decoupler
.. _`bioconductor-decoupler/tags`: https://quay.io/repository/biocontainers/bioconductor-decoupler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decoupler";
        var versions = ["2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decoupler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decoupler/README.html