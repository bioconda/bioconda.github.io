:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-arabidopsis.db0'
.. highlight: bash

bioconductor-arabidopsis.db0
============================

.. conda:recipe:: bioconductor-arabidopsis.db0
   :replaces_section_title:
   :noindex:

   Base Level Annotation databases for arabidopsis

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/arabidopsis.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arabidopsis.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arabidopsis.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arabidopsis.db0/meta.yaml>`_

   Base annotation databases for arabidopsis\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.


.. conda:package:: bioconductor-arabidopsis.db0

   |downloads_bioconductor-arabidopsis.db0| |docker_bioconductor-arabidopsis.db0|

   :versions:
      
      

      ``3.12.0-0``,  ``3.11.3-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.1-1``,  ``3.7.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arabidopsis.db0

   and update with::

      conda update bioconductor-arabidopsis.db0

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-arabidopsis.db0:<tag>

   (see `bioconductor-arabidopsis.db0/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-arabidopsis.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arabidopsis.db0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-arabidopsis.db0
   :alt:   (downloads)
.. |docker_bioconductor-arabidopsis.db0| image:: https://quay.io/repository/biocontainers/bioconductor-arabidopsis.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arabidopsis.db0
.. _`bioconductor-arabidopsis.db0/tags`: https://quay.io/repository/biocontainers/bioconductor-arabidopsis.db0?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arabidopsis.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arabidopsis.db0/README.html