:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drugvsdiseasedata'
.. highlight: bash

bioconductor-drugvsdiseasedata
==============================

.. conda:recipe:: bioconductor-drugvsdiseasedata
   :replaces_section_title:
   :noindex:

   Drug versus Disease Data

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/DrugVsDiseasedata.html
   :license: GPL-3
   :recipe: /`bioconductor-drugvsdiseasedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugvsdiseasedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drugvsdiseasedata/meta.yaml>`_

   Data package which provides default disease expression profiles\, clusters and annotation information for use with the DrugVsDisease package.


.. conda:package:: bioconductor-drugvsdiseasedata

   |downloads_bioconductor-drugvsdiseasedata| |docker_bioconductor-drugvsdiseasedata|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      

   
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drugvsdiseasedata

   and update with::

      conda update bioconductor-drugvsdiseasedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drugvsdiseasedata:<tag>

   (see `bioconductor-drugvsdiseasedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drugvsdiseasedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drugvsdiseasedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drugvsdiseasedata
   :alt:   (downloads)
.. |docker_bioconductor-drugvsdiseasedata| image:: https://quay.io/repository/biocontainers/bioconductor-drugvsdiseasedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drugvsdiseasedata
.. _`bioconductor-drugvsdiseasedata/tags`: https://quay.io/repository/biocontainers/bioconductor-drugvsdiseasedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drugvsdiseasedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drugvsdiseasedata/README.html