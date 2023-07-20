:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocbaseutils'
.. highlight: bash

bioconductor-biocbaseutils
==========================

.. conda:recipe:: bioconductor-biocbaseutils
   :replaces_section_title:
   :noindex:

   General utility functions for developing Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BiocBaseUtils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocbaseutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbaseutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocbaseutils/meta.yaml>`_

   The package provides utility functions related to package development. These include functions that replace slots\, and selectors for show methods. It aims to coalesce the various helper functions often re\-used throughout the Bioconductor ecosystem.


.. conda:package:: bioconductor-biocbaseutils

   |downloads_bioconductor-biocbaseutils| |docker_bioconductor-biocbaseutils|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocbaseutils

   and update with::

      conda update bioconductor-biocbaseutils

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocbaseutils:<tag>

   (see `bioconductor-biocbaseutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocbaseutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocbaseutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocbaseutils
   :alt:   (downloads)
.. |docker_bioconductor-biocbaseutils| image:: https://quay.io/repository/biocontainers/bioconductor-biocbaseutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocbaseutils
.. _`bioconductor-biocbaseutils/tags`: https://quay.io/repository/biocontainers/bioconductor-biocbaseutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocbaseutils";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocbaseutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocbaseutils/README.html