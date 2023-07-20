:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.string'
.. highlight: bash

bioconductor-alabaster.string
=============================

.. conda:recipe:: bioconductor-alabaster.string
   :replaces_section_title:
   :noindex:

   Save and Load Biostrings to\/from File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.string.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.string <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.string>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.string/meta.yaml>`_

   Save Biostrings objects to file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.string

   |downloads_bioconductor-alabaster.string| |docker_bioconductor-alabaster.string|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.string

   and update with::

      conda update bioconductor-alabaster.string

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.string:<tag>

   (see `bioconductor-alabaster.string/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.string| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.string.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.string
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.string| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.string/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.string
.. _`bioconductor-alabaster.string/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.string?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.string";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.string/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.string/README.html