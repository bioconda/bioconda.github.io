:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lowmaca'
.. highlight: bash

bioconductor-lowmaca
====================

.. conda:recipe:: bioconductor-lowmaca
   :replaces_section_title:
   :noindex:

   LowMACA \- Low frequency Mutation Analysis via Consensus Alignment

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/LowMACA.html
   :license: GPL-3
   :recipe: /`bioconductor-lowmaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lowmaca/meta.yaml>`_

   The LowMACA package is a simple suite of tools to investigate and analyze the mutation profile of several proteins or pfam domains via consensus alignment. You can conduct an hypothesis driven exploratory analysis using our package simply providing a set of genes or pfam domains of your interest.


.. conda:package:: bioconductor-lowmaca

   |downloads_bioconductor-lowmaca| |docker_bioconductor-lowmaca|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-lowmacaannotation: ``>=0.99.0,<0.100.0``
   :depends bioconductor-motifstack: ``>=1.38.0,<1.39.0``
   :depends clustalo: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cgdsr: 
   :depends r-data.table: 
   :depends r-gridbase: 
   :depends r-httr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lowmaca

   and update with::

      conda update bioconductor-lowmaca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lowmaca:<tag>

   (see `bioconductor-lowmaca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lowmaca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lowmaca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lowmaca
   :alt:   (downloads)
.. |docker_bioconductor-lowmaca| image:: https://quay.io/repository/biocontainers/bioconductor-lowmaca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lowmaca
.. _`bioconductor-lowmaca/tags`: https://quay.io/repository/biocontainers/bioconductor-lowmaca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lowmaca";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lowmaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lowmaca/README.html