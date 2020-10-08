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
      
      

      ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``

      

   
   :depends r-base: ``4.0.*``
   :depends r-dplyr: ``1.0.*``
   :depends r-dt: ``0.15.*``
   :depends r-ggplot2: ``3.3.*``
   :depends r-htmlwidgets: ``1.5.*``
   :depends r-markdown: ``1.1.*``
   :depends r-plotly: ``4.9.2.*``
   :depends r-readr: ``1.3.*``
   :depends r-shiny: ``1.5.*``
   :depends r-shinytest: ``1.4.*``
   :depends r-stringr: ``1.4.*``
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