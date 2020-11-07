:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wpm'
.. highlight: bash

bioconductor-wpm
================

.. conda:recipe:: bioconductor-wpm
   :replaces_section_title:
   :noindex:

   Well Plate Maker

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/wpm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wpm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wpm/meta.yaml>`_

   This is a shiny application for creating well\-plate plans. It uses a backtracking\-inspired algorithm to place samples on plates based on specific neighborhood constraints.


.. conda:package:: bioconductor-wpm

   |downloads_bioconductor-wpm| |docker_bioconductor-wpm|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-wpm

   and update with::

      conda update bioconductor-wpm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wpm:<tag>

   (see `bioconductor-wpm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wpm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wpm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wpm
   :alt:   (downloads)
.. |docker_bioconductor-wpm| image:: https://quay.io/repository/biocontainers/bioconductor-wpm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wpm
.. _`bioconductor-wpm/tags`: https://quay.io/repository/biocontainers/bioconductor-wpm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wpm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wpm/README.html