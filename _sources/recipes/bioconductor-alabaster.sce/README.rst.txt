:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.sce'
.. highlight: bash

bioconductor-alabaster.sce
==========================

.. conda:recipe:: bioconductor-alabaster.sce
   :replaces_section_title:
   :noindex:

   Load and Save SingleCellExperiment from File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.sce.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.sce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.sce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.sce/meta.yaml>`_

   Save SingleCellExperiment into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.sce

   |downloads_bioconductor-alabaster.sce| |docker_bioconductor-alabaster.sce|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.se: ``>=1.0.0,<1.1.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.sce

   and update with::

      conda update bioconductor-alabaster.sce

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.sce:<tag>

   (see `bioconductor-alabaster.sce/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.sce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.sce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.sce
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.sce| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.sce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.sce
.. _`bioconductor-alabaster.sce/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.sce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.sce";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.sce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.sce/README.html