:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decoupler'
.. highlight: bash

bioconductor-decoupler
======================

.. conda:recipe:: bioconductor-decoupler
   :replaces_section_title:
   :noindex:

   decoupleR\: Inferring biological activities from omics data using a collection of methods

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/decoupleR.html
   :license: GPL-3
   :recipe: /`bioconductor-decoupler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decoupler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decoupler/meta.yaml>`_

   Computational methods allow the extraction of mechanistic signatures from omics data based on prior knowledge resources\, reducing the dimensionality of the data for increased statistical power and better interpretability. Here\, we present decoupleR\, a Bioconductor package containing different statistical methods to extract these signatures within a unified framework. decoupleR allows the user to flexibly test any method with any resource. It incorporates methods that take into account the sign and weight of network interactions. Using decoupleR\, we evaluated the performance of contemporary methods on transcriptomic and phospho\-proteomic perturbation experiments.


.. conda:package:: bioconductor-decoupler

   |downloads_bioconductor-decoupler| |docker_bioconductor-decoupler|

   :versions:
      
      

      ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
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
        var versions = ["2.4.0","2.0.0","1.0.0"];
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