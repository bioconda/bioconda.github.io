:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-autotuner'
.. highlight: bash

bioconductor-autotuner
======================

.. conda:recipe:: bioconductor-autotuner
   :replaces_section_title:
   :noindex:

   Automated parameter selection for untargeted metabolomics data processing

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Autotuner.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-autotuner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-autotuner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-autotuner/meta.yaml>`_

   This package is designed to help faciliate data processing in untargeted metabolomics. To do this\, the algorithm contained within the package performs statistical inference on raw data to come up with the best set of parameters to process the raw data.


.. conda:package:: bioconductor-autotuner

   |downloads_bioconductor-autotuner| |docker_bioconductor-autotuner|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-msnbase: ``>=2.16.0,<2.17.0``
   :depends bioconductor-mzr: ``>=2.24.0,<2.25.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :depends r-entropy: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-autotuner

   and update with::

      conda update bioconductor-autotuner

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-autotuner:<tag>

   (see `bioconductor-autotuner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-autotuner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-autotuner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-autotuner
   :alt:   (downloads)
.. |docker_bioconductor-autotuner| image:: https://quay.io/repository/biocontainers/bioconductor-autotuner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-autotuner
.. _`bioconductor-autotuner/tags`: https://quay.io/repository/biocontainers/bioconductor-autotuner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-autotuner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-autotuner/README.html