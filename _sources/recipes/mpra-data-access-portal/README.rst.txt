:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpra-data-access-portal'
.. highlight: bash

mpra-data-access-portal
=======================

.. conda:recipe:: mpra-data-access-portal
   :replaces_section_title:
   :noindex:

   Saturation mutagenesis MPRA data access portal.

   :homepage: https://mpra.gs.washington.edu/satMutMPRA
   :license: MIT
   :recipe: /`mpra-data-access-portal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpra-data-access-portal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpra-data-access-portal/meta.yaml>`_

   


.. conda:package:: mpra-data-access-portal

   |downloads_mpra-data-access-portal| |docker_mpra-data-access-portal|

   :versions:
      
      

      ``0.1.8-2``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``

      

   
   :depends r-base: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-markdown: 
   :depends r-plotly: 
   :depends r-readr: 
   :depends r-shiny: 
   :depends r-shinytest: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mpra-data-access-portal

   and update with::

      conda update mpra-data-access-portal

   or use the docker container::

      docker pull quay.io/biocontainers/mpra-data-access-portal:<tag>

   (see `mpra-data-access-portal/tags`_ for valid values for ``<tag>``)


.. |downloads_mpra-data-access-portal| image:: https://img.shields.io/conda/dn/bioconda/mpra-data-access-portal.svg?style=flat
   :target: https://anaconda.org/bioconda/mpra-data-access-portal
   :alt:   (downloads)
.. |docker_mpra-data-access-portal| image:: https://quay.io/repository/biocontainers/mpra-data-access-portal/status
   :target: https://quay.io/repository/biocontainers/mpra-data-access-portal
.. _`mpra-data-access-portal/tags`: https://quay.io/repository/biocontainers/mpra-data-access-portal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpra-data-access-portal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpra-data-access-portal/README.html