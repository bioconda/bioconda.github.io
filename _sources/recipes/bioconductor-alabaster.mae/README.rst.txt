:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.mae'
.. highlight: bash

bioconductor-alabaster.mae
==========================

.. conda:recipe:: bioconductor-alabaster.mae
   :replaces_section_title:
   :noindex:

   Load and Save MultiAssayExperiments

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.mae.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.mae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.mae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.mae/meta.yaml>`_

   Save MultiAssayExperiments into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.mae

   |downloads_bioconductor-alabaster.mae| |docker_bioconductor-alabaster.mae|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-alabaster.se: ``>=1.0.0,<1.1.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.mae

   and update with::

      conda update bioconductor-alabaster.mae

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.mae:<tag>

   (see `bioconductor-alabaster.mae/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.mae| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.mae.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.mae
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.mae| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.mae/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.mae
.. _`bioconductor-alabaster.mae/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.mae?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.mae";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.mae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.mae/README.html