:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scopfunctions'
.. highlight: bash

r-scopfunctions
===============

.. conda:recipe:: r-scopfunctions
   :replaces_section_title:
   :noindex:

   An R package of functions for single cell \-omics analysis. 

   :homepage: https://github.com/CBMR-Single-Cell-Omics-Platform/SCOPfunctions
   :license: AGPL / AGPL-3
   :recipe: /`r-scopfunctions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scopfunctions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scopfunctions/meta.yaml>`_

   


.. conda:package:: r-scopfunctions

   |downloads_r-scopfunctions| |docker_r-scopfunctions|

   :versions:
      
      

      ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends bioconductor-mast: 
   :depends libcxx: ``>=15.0.7``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-patchwork: 
   :depends r-r.utils: 
   :depends r-sessioninfo: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-scopfunctions

   and update with::

      conda update r-scopfunctions

   or use the docker container::

      docker pull quay.io/biocontainers/r-scopfunctions:<tag>

   (see `r-scopfunctions/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scopfunctions| image:: https://img.shields.io/conda/dn/bioconda/r-scopfunctions.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scopfunctions
   :alt:   (downloads)
.. |docker_r-scopfunctions| image:: https://quay.io/repository/biocontainers/r-scopfunctions/status
   :target: https://quay.io/repository/biocontainers/r-scopfunctions
.. _`r-scopfunctions/tags`: https://quay.io/repository/biocontainers/r-scopfunctions?tab=tags


.. raw:: html

    <script>
        var package = "r-scopfunctions";
        var versions = ["0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scopfunctions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scopfunctions/README.html