:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidybulk'
.. highlight: bash

bioconductor-tidybulk
=====================

.. conda:recipe:: bioconductor-tidybulk
   :replaces_section_title:
   :noindex:

   Brings transcriptomics to the tidyverse

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/tidybulk.html
   :license: GPL-3
   :recipe: /`bioconductor-tidybulk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidybulk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidybulk/meta.yaml>`_

   This is a collection of utility functions that allow to perform exploration of and calculations to RNA sequencing data\, in a modular\, pipe\-friendly and tidy fashion.


.. conda:package:: bioconductor-tidybulk

   |downloads_bioconductor-tidybulk| |docker_bioconductor-tidybulk|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tidybulk

   and update with::

      conda update bioconductor-tidybulk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidybulk:<tag>

   (see `bioconductor-tidybulk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidybulk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidybulk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidybulk
   :alt:   (downloads)
.. |docker_bioconductor-tidybulk| image:: https://quay.io/repository/biocontainers/bioconductor-tidybulk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidybulk
.. _`bioconductor-tidybulk/tags`: https://quay.io/repository/biocontainers/bioconductor-tidybulk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidybulk";
        var versions = ["1.12.0","1.10.0","1.6.1","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidybulk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidybulk/README.html