:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basilisk'
.. highlight: bash

bioconductor-basilisk
=====================

.. conda:recipe:: bioconductor-basilisk
   :replaces_section_title:
   :noindex:

   Freezing Python Dependencies Inside Bioconductor Packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/basilisk.html
   :license: GPL-3
   :recipe: /`bioconductor-basilisk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basilisk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basilisk/meta.yaml>`_

   Installs a self\-contained conda instance that is managed by the R\/Bioconductor installation machinery. This aims to provide a consistent Python environment that can be used reliably by Bioconductor packages. Functions are also provided to enable smooth interoperability of multiple Python environments in a single R session.


.. conda:package:: bioconductor-basilisk

   |downloads_bioconductor-basilisk| |docker_bioconductor-basilisk|

   :versions:
      
      

      ``1.12.1-0``,  ``1.10.2-0``,  ``1.9.12-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk.utils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-dir.expiry: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-reticulate: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basilisk

   and update with::

      conda update bioconductor-basilisk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basilisk:<tag>

   (see `bioconductor-basilisk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basilisk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basilisk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basilisk
   :alt:   (downloads)
.. |docker_bioconductor-basilisk| image:: https://quay.io/repository/biocontainers/bioconductor-basilisk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basilisk
.. _`bioconductor-basilisk/tags`: https://quay.io/repository/biocontainers/bioconductor-basilisk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basilisk";
        var versions = ["1.12.1","1.10.2","1.9.12","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basilisk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basilisk/README.html