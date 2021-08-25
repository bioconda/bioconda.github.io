:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5filters'
.. highlight: bash

bioconductor-rhdf5filters
=========================

.. conda:recipe:: bioconductor-rhdf5filters
   :replaces_section_title:
   :noindex:

   HDF5 Compression Filters

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/rhdf5filters.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-rhdf5filters <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5filters>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5filters/meta.yaml>`_

   Provides a collection of compression filters for use with HDF5 datasets.


.. conda:package:: bioconductor-rhdf5filters

   |downloads_bioconductor-rhdf5filters| |docker_bioconductor-rhdf5filters|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-rhdf5lib: ``>=1.14.0,<1.15.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5filters

   and update with::

      conda update bioconductor-rhdf5filters

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhdf5filters:<tag>

   (see `bioconductor-rhdf5filters/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhdf5filters| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5filters.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5filters
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5filters| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5filters/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5filters
.. _`bioconductor-rhdf5filters/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5filters?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rhdf5filters";
        var versions = ["1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5filters/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5filters/README.html