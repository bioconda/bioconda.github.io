:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ivygapse'
.. highlight: bash

bioconductor-ivygapse
=====================

.. conda:recipe:: bioconductor-ivygapse
   :replaces_section_title:
   :noindex:

   A SummarizedExperiment for Ivy\-GAP data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ivygapSE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ivygapse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivygapse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ivygapse/meta.yaml>`_

   Define a SummarizedExperiment and exploratory app for Ivy\-GAP glioblastoma image\, expression\, and clinical data.


.. conda:package:: bioconductor-ivygapse

   |downloads_bioconductor-ivygapse| |docker_bioconductor-ivygapse|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-hwriter: 
   :depends r-plotly: 
   :depends r-shiny: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ivygapse

   and update with::

      conda update bioconductor-ivygapse

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ivygapse:<tag>

   (see `bioconductor-ivygapse/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ivygapse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ivygapse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ivygapse
   :alt:   (downloads)
.. |docker_bioconductor-ivygapse| image:: https://quay.io/repository/biocontainers/bioconductor-ivygapse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ivygapse
.. _`bioconductor-ivygapse/tags`: https://quay.io/repository/biocontainers/bioconductor-ivygapse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ivygapse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ivygapse/README.html