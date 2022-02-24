:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-manor'
.. highlight: bash

bioconductor-manor
==================

.. conda:recipe:: bioconductor-manor
   :replaces_section_title:
   :noindex:

   CGH Micro\-Array NORmalization

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MANOR.html
   :license: GPL-2
   :recipe: /`bioconductor-manor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-manor/meta.yaml>`_

   Importation\, normalization\, visualization\, and quality control functions to correct identified sources of variability in array\-CGH experiments.


.. conda:package:: bioconductor-manor

   |downloads_bioconductor-manor| |docker_bioconductor-manor|

   :versions:
      
      

      ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``

      

   
   :depends bioconductor-glad: ``>=2.58.0,<2.59.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-manor

   and update with::

      conda update bioconductor-manor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-manor:<tag>

   (see `bioconductor-manor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-manor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-manor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-manor
   :alt:   (downloads)
.. |docker_bioconductor-manor| image:: https://quay.io/repository/biocontainers/bioconductor-manor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-manor
.. _`bioconductor-manor/tags`: https://quay.io/repository/biocontainers/bioconductor-manor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-manor";
        var versions = ["1.66.0","1.66.0","1.64.0","1.62.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-manor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-manor/README.html