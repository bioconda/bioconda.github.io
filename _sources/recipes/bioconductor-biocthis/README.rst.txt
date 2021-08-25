:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocthis'
.. highlight: bash

bioconductor-biocthis
=====================

.. conda:recipe:: bioconductor-biocthis
   :replaces_section_title:
   :noindex:

   Automate package and project setup for Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/biocthis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocthis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocthis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocthis/meta.yaml>`_

   This package expands the usethis package with the goal of helping automate the process of creating R packages for Bioconductor or making them Bioconductor\-friendly.


.. conda:package:: bioconductor-biocthis

   |downloads_bioconductor-biocthis| |docker_bioconductor-biocthis|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.10-0``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-fs: 
   :depends r-glue: 
   :depends r-rlang: 
   :depends r-styler: 
   :depends r-usethis: ``>=2.0.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocthis

   and update with::

      conda update bioconductor-biocthis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocthis:<tag>

   (see `bioconductor-biocthis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocthis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocthis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocthis
   :alt:   (downloads)
.. |docker_bioconductor-biocthis| image:: https://quay.io/repository/biocontainers/bioconductor-biocthis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocthis
.. _`bioconductor-biocthis/tags`: https://quay.io/repository/biocontainers/bioconductor-biocthis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocthis";
        var versions = ["1.2.0","1.0.10","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocthis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocthis/README.html