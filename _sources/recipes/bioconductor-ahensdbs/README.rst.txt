:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahensdbs'
.. highlight: bash

bioconductor-ahensdbs
=====================

.. conda:recipe:: bioconductor-ahensdbs
   :replaces_section_title:
   :noindex:

   EnsDbs for AnnotationHub

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/AHEnsDbs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahensdbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahensdbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahensdbs/meta.yaml>`_

   Supplies AnnotationHub with EnsDb Ensembl\-based annotation databases for all species. EnsDb SQLite databases are generated separately from Ensembl MySQL databases using functions from the ensembldb package employing the Ensembl Perl API.


.. conda:package:: bioconductor-ahensdbs

   |downloads_bioconductor-ahensdbs| |docker_bioconductor-ahensdbs|

   :versions:
      
      

      ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.12-0``,  ``1.0.9-1``,  ``1.0.8-0``

      

   
   :depends bioconductor-annotationhubdata: ``>=1.20.0,<1.21.0``
   :depends bioconductor-ensembldb: ``>=2.14.0,<2.15.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ahensdbs

   and update with::

      conda update bioconductor-ahensdbs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ahensdbs:<tag>

   (see `bioconductor-ahensdbs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ahensdbs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahensdbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahensdbs
   :alt:   (downloads)
.. |docker_bioconductor-ahensdbs| image:: https://quay.io/repository/biocontainers/bioconductor-ahensdbs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahensdbs
.. _`bioconductor-ahensdbs/tags`: https://quay.io/repository/biocontainers/bioconductor-ahensdbs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahensdbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahensdbs/README.html