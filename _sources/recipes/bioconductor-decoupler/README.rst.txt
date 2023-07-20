:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decoupler'
.. highlight: bash

bioconductor-decoupler
======================

.. conda:recipe:: bioconductor-decoupler
   :replaces_section_title:
   :noindex:

   decoupleR\: Ensemble of computational methods to infer biological activities from omics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/decoupleR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-decoupler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decoupler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decoupler/meta.yaml>`_

   Many methods allow us to extract biological activities from omics data using information from prior knowledge resources\, reducing the dimensionality for increased statistical power and better interpretability. Here\, we present decoupleR\, a Bioconductor package containing different statistical methods to extract these signatures within a unified framework. decoupleR allows the user to flexibly test any method with any resource. It incorporates methods that take into account the sign and weight of network interactions. decoupleR can be used with any omic\, as long as its features can be linked to a biological process based on prior knowledge. For example\, in transcriptomics gene sets regulated by a transcription factor\, or in phospho\-proteomics phosphosites that are targeted by a kinase.


.. conda:package:: bioconductor-decoupler

   |downloads_bioconductor-decoupler| |docker_bioconductor-decoupler|

   :versions:
      
      

      ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-rlang: 
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
        var versions = ["2.6.0","2.4.0","2.0.0","1.0.0"];
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