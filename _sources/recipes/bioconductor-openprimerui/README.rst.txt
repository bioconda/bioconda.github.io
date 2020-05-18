:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-openprimerui'
.. highlight: bash

bioconductor-openprimerui
=========================

.. conda:recipe:: bioconductor-openprimerui
   :replaces_section_title:

   Shiny Application for Multiplex PCR Primer Design and Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/openPrimeRui.html
   :license: GPL-2
   :recipe: /`bioconductor-openprimerui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimerui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-openprimerui/meta.yaml>`_

   A Shiny application providing methods for designing\, evaluating\, and comparing primer sets for multiplex polymerase chain reaction. Primers are designed by solving a set cover problem such that the number of covered template sequences is maximized with the smallest possible set of primers. To guarantee that high\-quality primers are generated\, only primers fulfilling constraints on their physicochemical properties are selected.


.. conda:package:: bioconductor-openprimerui

   |downloads_bioconductor-openprimerui| |docker_bioconductor-openprimerui|

   :versions: 1.10.0-0, 1.8.0-0, 1.6.0-1, 1.4.1-0
   
   :depends bioconductor-openprimer: >=1.10.0,<1.11.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dt: >=0.2
   :depends r-rmarkdown: >=1.0
   :depends r-shiny: >=1.0.2
   :depends r-shinybs: >=0.61
   :depends r-shinyjs: >=0.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-openprimerui

   and update with::

      conda update bioconductor-openprimerui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-openprimerui:<tag>

   (see `bioconductor-openprimerui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-openprimerui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-openprimerui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-openprimerui
   :alt:   (downloads)
.. |docker_bioconductor-openprimerui| image:: https://quay.io/repository/biocontainers/bioconductor-openprimerui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-openprimerui
.. _`bioconductor-openprimerui/tags`: https://quay.io/repository/biocontainers/bioconductor-openprimerui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-openprimerui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-openprimerui/README.html